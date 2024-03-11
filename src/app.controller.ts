import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Project } from './developer2/developer2.entity';

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getProject(): Promise<Project[]> {
    return await this.appService.getProjects();
  }
}
