import {PipeTransform, Pipe, UnprocessableEntityException} from '@nestjs/common';
import {ArgumentMetadata} from '@nestjs/common/interfaces/pipe-transform.interface';
import {classToPlain, plainToClass} from 'class-transformer';
import {validate} from 'class-validator';

@Pipe()
export class ValidatorPipe implements PipeTransform<any> {
    constructor(private readonly group?) {}

    async transform(value, metadata: ArgumentMetadata) {
        const {metatype} = metadata;
        const object = plainToClass(metatype, value);
        const errors = await validate(object, {groups: this.group});

        if (errors.length > 0) {
            throw new UnprocessableEntityException(errors);
        }

        return classToPlain(object);
    }
}