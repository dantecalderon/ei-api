import {Exclude, Expose} from 'class-transformer';
import {IsString, Length} from 'class-validator';

@Exclude()
export class ProjectDto {

    @IsString()
    @Length(2, 30)
    @Expose()
    readonly name: string;
}