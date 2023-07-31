import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { getConfig } from 'libs/comm/utils';
import { SiteModule } from './site/site.module';
import { PageModule } from './page/page.module';
import { PageConfigModule } from './page-config/page-config.module';
import { DatabaseModule } from 'libs/comm/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    SiteModule,
    PageModule,
    PageConfigModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
