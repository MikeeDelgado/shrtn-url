import { Module } from '@nestjs/common';
import { HealthModule } from './api/health/infrastructure/health.module';

@Module({
	imports: [HealthModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
