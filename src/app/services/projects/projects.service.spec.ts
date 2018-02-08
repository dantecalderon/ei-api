import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {ProjectsService} from './projects.service';
import {expect} from 'chai';

describe('ProjectsService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        ProjectsService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: ProjectsService;
  beforeEach(() => {
    service = module.get(ProjectsService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
