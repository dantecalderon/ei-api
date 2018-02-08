import {ForbiddenException, Middleware} from '@nestjs/common';
import {NestMiddleware} from '@nestjs/common/interfaces/middlewares';

import {TasksService} from '../services/tasks/tasks.service';

@Middleware()
export class ProjectTaskFindMiddleware implements NestMiddleware {
    constructor(private tasksService: TasksService) {}

    resolve(): (req, res, next) => void {
        return async (req, res, next) => {
            const taskId = req.params.task;
            const projectId = req.params.project;
            const task = await this.tasksService.findOneByProjectIdAndId(projectId, taskId);

            if (!task) {
                throw new ForbiddenException();
            }

            req.task = task;

            next();
        }
    }
}