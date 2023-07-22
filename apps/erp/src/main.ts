import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { TransformInterceptor } from 'libs/comm/interceptors/transform.interceptor';
import { AllExceptionsFilter } from 'libs/comm/exceptions/base.exception.filter';
import { HttpExceptionFilter } from 'libs/comm/exceptions/http.exception.filter';

import { generateDocument } from './doc';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 创建文档
  generateDocument(app);

  // 添加热更新
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3000);
}
bootstrap();
