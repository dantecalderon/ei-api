import {IsOptional, IsString, Length} from 'class-validator';

export class TaskDto {

    @IsString()
    @Length(1, 100)
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly status: string;
}