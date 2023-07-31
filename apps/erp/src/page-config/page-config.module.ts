import { Module } from '@nestjs/common';
import { PageConfigService } from './page-config.service';
import { PageConfigController } from './page-config.controller';
import { PageConfig } from './entities/page-config.mongo.entity';

@Module({
  controllers: [PageConfigController],
  providers: [
    PageConfigService,
    {
      provide: 'PAGE_CONFIG_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(PageConfig),
      inject: ['MONGODB_DATA_SOURCE'],
    },
  ],
})
export class PageConfigModule {}
