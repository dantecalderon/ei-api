import {ForbiddenException, HttpException, Middleware, NestMiddleware} from '@nestjs/common';
import * as passport from 'passport';

@Middleware()
export class JwtMiddleware implements NestMiddleware {
    resolve() {
        return async (req, res, next) => {
            return await passport.authenticate('jwt', {session: false}, (err, user, info) => {
                if (err) {
                    next(new HttpException(err, 401));
                } else if(!user) {
                    next(new ForbiddenException());
                } else {
                    req.user = user;
                    next();
                }
            })(req, res, next);
        }
    }
}