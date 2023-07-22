import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from 'libs/comm/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';

@Controller({
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    const a: any = {};
    console.log(a.b.c);
    return this.appService.getHello();
  }

  @Get('findBusinessError')
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return this.appService.getHello();
  }

  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }
}
