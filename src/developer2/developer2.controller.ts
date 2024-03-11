// import { Controller } from '@nestjs/common';

// @Controller('users')
// export class UsersController { }

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectsService } from './developer2.service';
import { Project } from './developer2.entity';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get()
    async findAll() {
        return this.projectsService.findAll();
    }

    @Post()
    async createProject(@Body() projectData: Project) {
        return this.projectsService.createProject(projectData);
    }
}


// // Assuming you have a UserController with a method for creating users
// import { Controller, Post, Body } from '@nestjs/common';
// import { UserService } from './user.service';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post('create-user')
//   async createUser(@Body() userData: { name: string; email: string; age: number }) {
//     const createdUser = await this.userService.createUser(userData);
//     return createdUser;
//   }
// }
