import { Test, TestingModule } from '@nestjs/testing';
import { Deber2Controller } from './deber_2.controller';

describe('Deber2Controller', () => {
  let controller: Deber2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Deber2Controller],
    }).compile();

    controller = module.get<Deber2Controller>(Deber2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
