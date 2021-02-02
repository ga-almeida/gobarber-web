import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';


const Dashboard: React.FC = () => {

  const { sigOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src={user.avatar_url}
              alt={user.name}
            />
            <div>
              <span>Bem vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={sigOut}>
            <FiPower />
          </button>
        </HeaderContent>

        <Content>
          <Schedule>
            <h1>Horários agendados</h1>
            <p>
              <span>Hoje</span>
              <span>Dia 06</span>
              <span>Segunda-feira</span>
            </p>

            <NextAppointment>
              <strong>Atendimento a seguir</strong>
              <div>
                <img
                  src={user.avatar_url}
                  alt={user.name}
                />

                <strong>{user.name}</strong>
                <span>
                  <FiClock />
                  08:00
                </span>

              </div>
            </NextAppointment>
          </Schedule>
          <Calendar />
        </Content>
      </Header>
    </Container>
  );
};

export default Dashboard;
