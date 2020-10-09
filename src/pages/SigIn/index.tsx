import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';
import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

interface SigInFormData {
  email: string;
  password: string;
}

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { sigIn, user } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SigInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        sigIn({ email: data.email, password: data.password });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [sigIn],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SigIn;
