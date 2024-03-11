// In developer2.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50 }) // Adjust the length as needed
    Organization: string;

    @Column({ length: 100, unique: true }) // Adjust the length and constraints as needed
    AppName: string;

    @Column({ nullable: true }) // Add other optional properties as needed
    GithubLink: string;

    // You can add more columns based on your requirements
}
export class Projects { } 