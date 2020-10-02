import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HealthService } from '../../application/health.service';

@Controller('/health')
export class HealthController {
	constructor(private readonly healthService: HealthService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	getHealth(): string {
		return this.healthService.getHealth();
	}
}
