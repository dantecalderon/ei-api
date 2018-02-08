import {IsOptional, IsString, Length} from 'class-validator';

export class TaskDto {

    @IsString()
    @Length(2, 100)
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly status: string;
}