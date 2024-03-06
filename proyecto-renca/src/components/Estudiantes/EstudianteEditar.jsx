import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EstudianteEditar = () => {
  const [perfil, setPerfil] = useState({
    email: 'josemartinez@outlook.com',
    nombre: 'José',
    apellido: 'Martinez',
    empresa: '',
    tituloProfesional: '',
    zonaHoraria: 'Seleccione su zona horaria',
    pais: 'Chile',
    foto: '',
    registroSocialHogares: null,
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    Swal.fire({
      title: 'Importante',
      html: 'Para realizar un curso y obtener un certificado, es necesario adjuntar el Registro Social de Hogares. Puede conseguirlo en la siguiente página: <a href="https://registrosocial.gob.cl/" target="_blank">Registro Social de Hogares</a>',
      icon: 'info',
      confirmButtonText: 'Entendido'
    });
  }, []);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    setPerfil({
      ...perfil,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (perfil.password !== perfil.confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    console.log('Perfil actualizado:', perfil);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={perfil.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          type="text"
          name="nombre"
          value={perfil.nombre}
          onChange={handleChange}
          required
        />

        <Label htmlFor="apellido">Apellido</Label>
        <Input
          id="apellido"
          type="text"
          name="apellido"
          value={perfil.apellido}
          onChange={handleChange}
          required
        />

        <Label htmlFor="registroSocialHogares">Registro Social de Hogares (PDF)</Label>
        <Input
          id="registroSocialHogares"
          type="file"
          name="registroSocialHogares"
          accept="application/pdf"
          onChange={handleChange}
        />

        <Label htmlFor="password">Nueva contraseña</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={perfil.password}
          onChange={handleChange}
          required
        />

        <Label htmlFor="confirmPassword">Repetir Contraseña</Label>
        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={perfil.confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Guardar Cambios</Button>
      </Form>
    </Container>
  );
};

export default EstudianteEditar;
