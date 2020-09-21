import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from '../../application/health.service';

describe('HealthController e2e', () => {
	let healthController: HealthController;

	beforeEach(async () => {
		const healthModule: TestingModule = await Test.createTestingModule({
			controllers: [HealthController],
			providers: [HealthService],
		}).compile();

		healthController = healthModule.get<HealthController>(HealthController);
	});

	describe('root', () => {
		it('should return "Healthy Service"', () => {
			expect(healthController.getHealth()).toBe('Healthy Service');
		});
	});
});
