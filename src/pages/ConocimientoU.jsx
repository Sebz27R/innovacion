import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import EjercicioImg from '../assets/ejercicio.png';
import AmigosImg from '../assets/amigos.png';
import ViajesImg from '../assets/viajes.png';
import NaturalezaImg from '../assets/naturaleza.jpg';
import ArteImg from '../assets/arte.jpg';
import LecturaImg from '../assets/lectura.jpg';
import PlanTranquiImg from '../assets/plan_tranqui.jpg';
import FiestasImg from '../assets/fiestas.png';
import ActividadesCasaImg from '../assets/actividades_casa.png';

const ConocimientoU = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
  
    const options = [
      { label: 'Ejercicio', image: EjercicioImg },
      { label: 'Amigos', image: AmigosImg },
      { label: 'Viajes', image: ViajesImg },
      { label: 'Naturaleza', image: NaturalezaImg },
      { label: 'Arte', image: ArteImg },
      { label: 'Lectura', image: LecturaImg },
      { label: 'Plan tranqui', image: PlanTranquiImg },
      { label: 'Fiestas y eventos', image: FiestasImg },
      { label: 'Actividades en casa', image: ActividadesCasaImg }
    ];
  
    const handleSubmit = () => {
      if (!selectedOption) {
        toast.error('Debes escoger una opción');
      } else {
        navigate('/main');
      }
    };
  
    return (
      <div className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-bold">¡Queremos conocerte!</h1>
        <p className="text-lg mt-4">¿Qué disfrutas hacer?</p>
  
        <div className="grid grid-cols-3 gap-4 mt-6">
          {options.map(option => (
            <div
              key={option.label}
              className={`p-6 text-white bg-[#04243B] cursor-pointer rounded-lg text-center
                ${selectedOption === option.label ? 'border-4 border-white' : ''}`}
              onClick={() => setSelectedOption(option.label)}
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-20 h-20 mx-auto mb-2" // Ajusta el tamaño de la imagen según sea necesario
              />
              <p>{option.label}</p>
            </div>
          ))}
        </div>
  
        <button
          className="bg-[#04243B] text-white mt-6 py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Continuar
        </button>
      </div>
    );
  };

export default ConocimientoU