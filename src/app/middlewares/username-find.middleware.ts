import {HttpException, HttpStatus, Middleware} from '@nestjs/common';
import {NestMiddleware} from '@nestjs/common/interfaces/middlewares';

import {UsersService} from '../services/users/users.service';

@Middleware()
export class UsernameFindMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) {
    }

    resolve(): (req, res, next) => void {
        return async (req, res, next) => {
            const username = req.body.username;
            const exists = await this.usersService.existsByUsername(username);

            if (exists) {
                throw new HttpException(
                    [
                        {
                            property: 'username',
                            constraints: {exists: 'username already taken'},
                        },
                    ],
                    HttpStatus.UNPROCESSABLE_ENTITY
                );
            }

            next();
        }
    }
}