import { container } from 'tsyringe';

import IAppointmentsRepository from '@server/modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@server/modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@server/modules/users/repositories/IUsersRepository';
import UsersRepository from '@server/modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
