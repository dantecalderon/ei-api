import {Body, Controller, Delete, HttpCode, Patch, Post} from '@nestjs/common';
import {plainToClass} from 'class-transformer';

import {RequestObjectDecorator} from '../../decorators/request-object.decorator';
import {TaskDto} from '../../dto/task.dto';
import {Project} from '../../entity/project.entity';
import {Task} from '../../entity/task.entity';
import {ValidatorPipe} from '../../pipes/validator/validator.pipe';
import {TasksService} from '../../services/tasks/tasks.service';

@Controller('projects/:project/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    @HttpCode(201)
    async post(@RequestObjectDecorator('project') project: Project, @Body(new ValidatorPipe()) data: TaskDto): Promise<Task> {
        const dataToCreate =  {...data, project};
        const task = plainToClass(Task, dataToCreate);
        return await this.tasksService.save(task);
    }

    @Patch(':task')
    async patch(@RequestObjectDecorator('task') task: Task, @Body(new ValidatorPipe()) taskData: TaskDto): Promise<Task> {
        const taskToUpdate = Object.assign(task, taskData);
        return await this.tasksService.save(taskToUpdate);
    }

    @Delete(':task')
    async delete(@RequestObjectDecorator('task') task: Task): Promise<null> {
        await this.tasksService.delete(task.id);
        return;
    }
}
