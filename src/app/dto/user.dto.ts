import {IsString, Length} from 'class-validator';

export class UserDto {

    @IsString()
    @Length(2, 50)
    readonly username: string;

    @IsString()
    @Length(8, 32)
    readonly password: string;
}