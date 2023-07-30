import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'libs/comm/database/database.module';
import { UserProviders } from './user.providers';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [DatabaseModule, DepartmentModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
