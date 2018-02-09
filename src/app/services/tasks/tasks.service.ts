import {Component, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';

import {Task} from '../../entity/task.entity';

@Component()
export class TasksService {
    constructor(@Inject('TaskRepositoryToken') private readonly repository: Repository<Task>) {}

    public async delete(id: string): Promise<void> {
        return await this.repository.delete({id});
    }

    public async findOneByProjectIdAndId(projectId: string, id: string): Promise<Task> {
        return await this.repository.findOne({where: {id, projectId}, relations: ['project']});
    }

    public async save(task: Task): Promise<Task> {
        return await this.repository.save(task);
    }
}
