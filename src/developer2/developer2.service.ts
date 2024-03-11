// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './developer2.entity';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectsRepository: Repository<Project>,
    ) { }

    async findAll(): Promise<Project[]> {
        return this.projectsRepository.find();
    }

    async createProject(projectData: Project): Promise<Project> {
        console.log(projectData);
        const newProject = this.projectsRepository.create(projectData);
        return this.projectsRepository.save(newProject);
    }
}
