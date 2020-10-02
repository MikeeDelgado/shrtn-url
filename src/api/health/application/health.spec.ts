import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthController', () => {
	let healthService: HealthService;

	beforeEach(async () => {
		const healthModule: TestingModule = await Test.createTestingModule({
			controllers: [],
			providers: [HealthService],
		}).compile();

		healthService = healthModule.get<HealthService>(HealthService);
	});

	describe('root', () => {
		it('should return "Healthy Service"', () => {
			expect(healthService.getHealth()).toBe('Healthy Service');
		});
	});
});
