import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/modules/Users/user.slice';
import { useNavigate } from 'react-router-dom';
import { setUserLoged } from '../../store/modules/UserLoged/UserLoged.slice';

interface FormProps {
  type: 'login' | 'singUp';
}

const Form: React.FC<FormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repitedPassword, setRepitedPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const login = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    /*     const logedUser = {
      email,
      password,
    };

    console.log(logedUser); */

    dispatch(loginAction({ email, password }));
    dispatch(setUserLoged({ email }));
    navigate('/recados');
  };

  const singUp = (ev: React.FormEvent<HTMLFormElement>) => {
    //Lógica de cadastro
  };

  const clearImputs = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Box component={'form'} onSubmit={type === 'login' ? login : singUp}>
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        onChange={(ev) => setEmail(ev.target.value)}
        fullWidth
      />
      <TextField
        id="password"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        onChange={(ev) => setPassword(ev.target.value)}
        fullWidth
      />

      {type === 'singUp' ? (
        <TextField
          id="repitedPassword"
          label="Repita sua senha"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={(ev) => setRepitedPassword(ev.target.value)}
          fullWidth
        />
      ) : (
        <></>
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {type === 'login' ? 'ENTRAR' : 'CADASTRAR'}
      </Button>

      {/* ALERTA COM O ERRO */}
    </Box>
  );
};

export default Form;
