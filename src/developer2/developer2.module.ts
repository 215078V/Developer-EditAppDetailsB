import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./developer2.entity";
import { ProjectsService } from "./developer2.service";
import { ProjectsController } from "./developer2.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [TypeOrmModule]
})

export class ProjectModule { }