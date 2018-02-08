import {createRouteParamDecorator} from '@nestjs/common';

export const AuthenticatedUserIdDecorator = createRouteParamDecorator((data, req) => req.user.id);