import {Body, Controller, Delete, Get, HttpCode, Patch, Post} from '@nestjs/common';
import {plainToClass} from 'class-transformer';

import {AuthenticatedUserDecorator} from '../../decorators/authenticated-user.decorator';
import {AuthenticatedUserIdDecorator} from '../../decorators/authenticated-user-id.decorator';
import {RequestObjectDecorator} from '../../decorators/request-object.decorator';
import {ProjectDto} from '../../dto/project.dto';
import {Project} from '../../entity/project.entity';
import {ValidatorPipe} from '../../pipes/validator/validator.pipe';
import {ProjectsService} from '../../services/projects/projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    async getList(@AuthenticatedUserIdDecorator() user) {
        return await this.projectsService.findByUser(user);
    }

    @Post()
    @HttpCode(201)
    async post(@Body(new ValidatorPipe()) data: ProjectDto, @AuthenticatedUserDecorator() user): Promise<Project> {
        const dataToCreate = {...data, user};
        const project = plainToClass(Project, dataToCreate);
        return await this.projectsService.save(project);
    }

    @Patch(':project')
    async patch(@RequestObjectDecorator('project') project: Project, @Body(new ValidatorPipe()) data: ProjectDto): Promise<Project> {
        const mergedProject = {...project, ...data};
        return await this.projectsService.save(mergedProject);
    }

    @Delete(':project')
    async delete(@RequestObjectDecorator('project') project: Project): Promise<null> {
        await this.projectsService.delete(project);
        return;
    }
}