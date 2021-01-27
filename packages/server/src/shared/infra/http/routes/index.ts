import { Router } from 'express';

import appointmentsRouter from '@server/modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@server/modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@server/modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
