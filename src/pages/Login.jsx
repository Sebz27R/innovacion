import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegar programáticamente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate(); // Hook de navegación
  const [currentState, setCurrentState] = useState('Registrate');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    ciudad: '',
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Validación de los campos
    if (currentState === 'Registrate') {
      if (!formData.nombre || !formData.email || !formData.password || !formData.confirmPassword || !formData.ciudad) {
        toast.error('Por favor, completa todos los campos.');
        return;
      }

      if (formData.password.length < 8) {
        toast.error('La contraseña debe tener al menos 8 caracteres.');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error('Las contraseñas no coinciden.');
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        toast.error('Por favor, completa todos los campos.');
        return;
      }

      if (formData.password.length < 8) {
        toast.error('La contraseña debe tener al menos 8 caracteres.');
        return;
      }
    }

    // Navegación al siguiente paso si la validación es correcta
    navigate('/main');
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-[80px] gap-4 text-gray-800"
    >
      <ToastContainer/>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-bold prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Inicia sesion' ? '' : (
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={onChangeHandler}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Nombre"
          required
        />
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Correo Electronico"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Contraseña"
        minLength={8}
        required
      />
      {currentState === 'Inicia sesion' ? '' : (
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChangeHandler}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Confirmar Contraseña"
          minLength={8}
          required
        />
      )}
      {currentState === 'Inicia sesion' ? '' : (
        <select
          id="ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={onChangeHandler}
          className="w-full px-3 py-2 border border-gray-800"
          required
        >
          <option value="" disabled>
            Selecciona una ciudad
          </option>
          <option value="medellin">Medellin</option>
          <option value="bucaramanga">Bucaramanga</option>
          <option value="bogota">Bogota</option>
          <option value="ibague">Ibague</option>
        </select>
      )}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Olvidaste tu contraseña?</p>
        {currentState === 'Inicia sesion' ? (
          <p onClick={() => setCurrentState('Registrate')} className="cursor-pointer">
            Crea una cuenta
          </p>
        ) : (
          <p onClick={() => setCurrentState('Inicia sesion')} className="cursor-pointer">
            Inicia sesion
          </p>
        )}
      </div>
      <button type="submit" className="bg-[#4C0070] text-white font-bold px-8 py-2 mt-4 rounded-md hover:bg-[#3F0060]">
        {currentState === 'Inicia sesion' ? 'Inicia sesion' : 'Ingresa'}
      </button>
    </form>
  );
};

export default Login;

