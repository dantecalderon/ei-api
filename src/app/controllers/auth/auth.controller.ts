import {Controller, Post} from '@nestjs/common';

import {RequestObjectDecorator} from '../../decorators/request-object.decorator';
import {User} from '../../entity/user.entity';
import {AuthService} from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('token')
    public async post(@RequestObjectDecorator('user') user: User): Promise<any>  {
        return await this.authService.createToken(user.id, user.username);
    }
}