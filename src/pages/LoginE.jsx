import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginE = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('Registrate');
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    email: '',
    password: '',
    confirmPassword: '',
    ciudad: '',
    categorias: {
      ropa: false,
      zapatos: false,
      accesorios: false,
    },
  });

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, categorias: { ...formData.categorias, [name]: checked } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = async () => {
    try {
      const url = currentState === 'Registrate' ? '/api/empresas/registro' : '/api/empresas/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(currentState === 'Registrate' ? 'Registro exitoso' : 'Inicio de sesión exitoso');
        navigate('/mainE');
      } else {
        throw new Error(data.message || 'Ocurrió un error');
      }
    } catch (error) {
      toast.error(error.message || 'Error en la solicitud');
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === 'Registrate' && (!formData.nombreEmpresa || !formData.email || formData.password !== formData.confirmPassword)) {
      toast.error('Por favor, completa todos los campos correctamente.');
      return;
    }
    submitForm();
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-[80px] gap-4 text-gray-800">
      <ToastContainer />
      {currentState === 'Registrate' && (
        <input
          type="text"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={onChangeHandler}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Nombre empresa"
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
      {currentState === 'Registrate' && (
        <>
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
          <select
            name="ciudad"
            value={formData.ciudad}
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border border-gray-800"
            required
          >
            <option value="" disabled>Selecciona una ciudad</option>
            <option value="medellin">Medellin</option>
            <option value="bucaramanga">Bucaramanga</option>
            <option value="bogota">Bogota</option>
            <option value="ibague">Ibague</option>
          </select>
          <div className="w-full flex flex-col gap-2 mt-2">
            {Object.keys(formData.categorias).map((categoria) => (
              <label key={categoria} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name={categoria}
                  checked={formData.categorias[categoria]}
                  onChange={onChangeHandler}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </label>
            ))}
          </div>
        </>
      )}
      <button type="submit" className="bg-[#4C0070] text-white font-bold px-8 py-2 mt-4 rounded-md hover:bg-[#3F0060]">
        {currentState === 'Inicia sesion' ? 'Inicia sesion' : 'Ingresa'}
      </button>
    </form>
  );
};

export default LoginE;


