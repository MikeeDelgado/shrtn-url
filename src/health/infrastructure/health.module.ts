import { Module } from '@nestjs/common';
import { HealthController } from '../infrastructure/controllers/health.controller';

import { HealthService } from '../application/health.service';
@Module({
	imports: [],
	controllers: [HealthController],
	providers: [HealthService],
})
export class HealthModule {}
