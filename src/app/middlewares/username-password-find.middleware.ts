import {BadRequestException, Middleware} from '@nestjs/common';
import {NestMiddleware} from '@nestjs/common/interfaces/middlewares';

import {UsersService} from '../services/users/users.service';

@Middleware()
export class UsernamePasswordFindMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) {}

    resolve(): (req, res, next) => void {
        return async (req, res, next) => {
            const username = req.body.username;
            const password = req.body.password;
            const user = await this.usersService.findOneByUsernameAndPassword(username, password);

            if (!user) {
                throw new BadRequestException('Invalid credentials');
            }

            req.user = user;

            next();
        }
    }
}