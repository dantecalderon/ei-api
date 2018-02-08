import {ForbiddenException, Middleware} from '@nestjs/common';
import {NestMiddleware} from '@nestjs/common/interfaces/middlewares';

import {ProjectsService} from '../services/projects/projects.service';

@Middleware()
export class UserProjectFindMiddleware implements NestMiddleware {
    constructor(private projectsService: ProjectsService) {}

    resolve(): (req, res, next) => void {
        return async (req, res, next) => {
            const projectId = req.params.project;
            const userId = req.user.id;
            const project = await this.projectsService.findOneByUserIdAndId(userId, projectId);

            if (!project) {
                throw new ForbiddenException();
            }

            req.project = project;

            next();
        }
    }
}