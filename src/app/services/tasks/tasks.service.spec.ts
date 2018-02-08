import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {TasksService} from './tasks.service';
import {expect} from 'chai';

describe('TasksService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        TasksService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: TasksService;
  beforeEach(() => {
    service = module.get(TasksService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
