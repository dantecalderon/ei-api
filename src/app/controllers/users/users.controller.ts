import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {plainToClass} from 'class-transformer';

import {UserDto} from '../../dto/user.dto';
import {User} from '../../entity/user.entity';
import {ValidatorPipe} from '../../pipes/validator/validator.pipe';
import {UsersService} from '../../services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    @HttpCode(201)
    async post(@Body(new ValidatorPipe()) userData: UserDto): Promise<null> {
        const user = plainToClass(User, userData)
        await this.usersService.save(user);
        return;
    }
}
