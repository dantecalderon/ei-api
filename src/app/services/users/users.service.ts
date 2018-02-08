import {Component, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import * as sha1 from 'sha1';

import {User} from '../../entity/user.entity';

@Component()
export class UsersService {
    constructor(@Inject('UserRepositoryToken') private readonly repository: Repository<User>) {}

    public async existsByUsername(username: string): Promise<boolean> {
        return await this.repository.count({username}) > 0;
    }

    public async findOneByUsernameAndPassword(username: string, pass: string): Promise<User> {
        const password = sha1(pass);
        return await this.repository.findOne({username, password});
    }

    public async save(user: User): Promise<User> {
        return await this.repository.save(user);
    }
}
