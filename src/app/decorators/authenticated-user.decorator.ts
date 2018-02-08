import {createRouteParamDecorator} from '@nestjs/common';
import {plainToClass} from 'class-transformer';

import {User} from '../entity/user.entity';

export const AuthenticatedUserDecorator = createRouteParamDecorator((data, req) => plainToClass(User, {id: req.user.id}));