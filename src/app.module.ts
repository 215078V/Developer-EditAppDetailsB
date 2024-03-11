import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsService } from './developer2/developer2.service';
import { ProjectsController } from './developer2/developer2.controller';
import { Project } from './developer2/developer2.entity';
import { ProjectModule } from './developer2/developer2.module';
// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'Sanda24',
      database: 'DevPorDB1',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProjectModule,
  ],

  // providers: [AppService],
  // controllers: [AppController],
  //exports: [UsersService],
})
export class AppModule { }
