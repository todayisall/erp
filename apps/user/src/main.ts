import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { VersioningType } from '@nestjs/common';
import { TransformInterceptor } from 'libs/comm/interceptors/transform.interceptor';
import { AllExceptionsFilter } from 'libs/comm/exceptions/base.exception.filter';
import { HttpExceptionFilter } from 'libs/comm/exceptions/http.exception.filter';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 创建文档
  generateDocument(app);

  await app.listen(3001);
}
bootstrap();
