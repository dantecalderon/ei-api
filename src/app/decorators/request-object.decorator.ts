import {createRouteParamDecorator} from '@nestjs/common';

export const RequestObjectDecorator = createRouteParamDecorator((data, req) => req[data]);