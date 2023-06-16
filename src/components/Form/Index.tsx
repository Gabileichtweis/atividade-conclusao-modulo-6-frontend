import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface FormProps {
  type: 'login' | 'singUp';
}

const Form: React.FC<FormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repitedPassword, setRepitedPassword] = useState('');

  const login = (ev: React.FormEvent<HTMLFormElement>) => {
    //Lógica de logar
  };

  const singUp = (ev: React.FormEvent<HTMLFormElement>) => {
    //Lógica de cadastro
  };

  const clearImputs = () => {
    //lógica limpar campos
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
