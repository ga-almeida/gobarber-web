import React, { useCallback, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment, Section, Appointment } from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectDate(day);
    }
  }, []);

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
              <span>{selectDate.getDay}</span>
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

            <Section>
              <strong>Manhã</strong>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                  />

                  <strong>{user.name}</strong>
                </div>

              </Appointment>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                  />

                  <strong>{user.name}</strong>
                </div>
              </Appointment>
            </Section>

            <Section>
              <strong>Tarde</strong>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                  />

                  <strong>{user.name}</strong>
                </div>
              </Appointment>
            </Section>
          </Schedule>
          <Calendar>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              disabledDays={[{ daysOfWeek: [0, 6] }]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5] }
              }}
              onDayClick={handleDateChange}
              selectedDays={selectDate}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
          </Calendar>
        </Content>
      </Header>
    </Container>
  );
};

export default Dashboard;
