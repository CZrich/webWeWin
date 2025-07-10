import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Plan }             from './planes/entities/plan.entity';
import { User }             from './users/entities/user.entity';
import { ReporteResiduo }   from './residuos/entities/reporte-residuo.entity';
import { Pago }             from './pagos/entities/pago.entity';
// agrega aquí más entidades si las usas en el seed

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '0569',
  database: 'wewin_db',
  synchronize: true,
  entities: [Plan, User, ReporteResiduo, Pago],
};

export const AppDataSource = new DataSource(dataSourceOptions);
