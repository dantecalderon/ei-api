import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';

import {AuthController} from './auth.controller';

describe('AuthController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        AuthController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: AuthController;
  beforeEach(() => {
    controller = module.get(AuthController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
