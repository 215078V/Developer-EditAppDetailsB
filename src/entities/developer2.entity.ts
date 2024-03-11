import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50 })
    Organization: string;

    @Column({ length: 100, unique: true })
    AppName: string;

    @Column({ nullable: true })
    GithubLink: string;


}

export class Projects { }
