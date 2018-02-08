import {Component, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';

import {Project} from '../../entity/project.entity';

@Component()
export class ProjectsService {
    constructor(@Inject('ProjectRepositoryToken') private readonly repository: Repository<Project>) {}

    public async delete(project: Project): Promise<void> {
        return await this.repository.delete(project);
    }

    public async findOneByUserIdAndId(userId: string, id: string): Promise<Project> {
        return await this.repository.findOne({where: {id, userId}});
    }

    public async findByUser(user: string): Promise<Project[]> {
        return await this.repository.find({where: {user}, relations: ['tasks']});
    }

    public async save(project: Project): Promise<Project> {
        return await this.repository.save(project);
    }
}