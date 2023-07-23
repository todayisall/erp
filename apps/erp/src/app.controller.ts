import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from 'libs/comm/exceptions/business.exception';

@Controller({
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
