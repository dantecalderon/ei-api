import {Component} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Component()
export class AuthService {
    async createToken(id: string, username: string) {
        const expiresIn = 60 * 60, secretOrKey = 'secret';
        const user = {id, username};
        const token = jwt.sign(user, secretOrKey, {expiresIn});
        return {
            expires_in: expiresIn,
            access_token: token,
        };
    }

    validateUser() {
        return true;
    }
}
