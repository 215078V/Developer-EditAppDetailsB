import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './developer2/developer2.entity';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) { }

  async getProjects(): Promise<Project[]> {
    // try {
    return await this.projectRepository.find();
    // } catch (error) {
    //   throw new NotFoundException('Unable to fetch user data');
    // }


  }
}
