import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {ProjectsController} from './projects.controller';
import {expect} from 'chai';

describe('ProjectsController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        ProjectsController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: ProjectsController;
  beforeEach(() => {
    controller = module.get(ProjectsController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
