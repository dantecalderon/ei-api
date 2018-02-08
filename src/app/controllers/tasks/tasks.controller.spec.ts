import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';

import {TasksController} from './tasks.controller';

describe('TasksController', () => {
    let module: TestingModule;
    beforeEach(() => {
        return Test.createTestingModule({
            controllers: [
                TasksController
            ]
        }).compile()
            .then(compiledModule => module = compiledModule);
    });

    let controller: TasksController;
    beforeEach(() => {
        controller = module.get(TasksController);
    });

    it('should exist', () => {
        expect(controller).to.exist;
    });
});
