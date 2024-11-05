// Importa createUser desde la carpeta correspondiente
import { createUser } from '../API calls/users.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('Registrate');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    ciudad: '',
    fechaNacimiento: '', // Agrega el campo de fecha de nacimiento al estado
  });

  const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitForm = async () => {
    try {
      if (currentState === 'Registrate') {
        // Llama a createUser si el estado actual es de registro
        const data = await createUser(formData);
        if (data.success) {
          toast.success('Registro exitoso');
          navigate('/conocimiento');
        } else {
          throw new Error(data.message || 'Ocurrió un error en el registro');
        }
      } else {
        const url = '/api/usuarios/login';
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (response.ok) {
          toast.success('Inicio de sesión exitoso');
          navigate('/conocimiento');
        } else {
          throw new Error(data.message || 'Ocurrió un error');
        }
      }
    } catch (error) {
      toast.error(error.message || 'Error en la solicitud');
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      currentState === 'Registrate' &&
      (!formData.nombre || !formData.email || formData.password !== formData.confirmPassword || !formData.fechaNacimiento)
    ) {
      toast.error('Por favor, completa todos los campos correctamente.');
      return;
    }
    submitForm();
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-[80px] gap-4 text-gray-800">
      <ToastContainer />
      {currentState === 'Registrate' && (
        <>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Nombre"
            required
          />
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Fecha de Nacimiento"
            required
          />
        </>
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Correo Electrónico"
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
        </>
      )}
      <button type="submit" className="bg-[#4C0070] text-white font-bold px-8 py-2 mt-4 rounded-md hover:bg-[#3F0060]">
        {currentState === 'Inicia sesion' ? 'Inicia sesión' : 'Ingresa'}
      </button>
    </form>
  );
};

export default Login;


