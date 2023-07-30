import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private departmentService: DepartmentService,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    try {
      const dep = await this.departmentService.findOne(
        createUserDto.departmentId,
      );
      return this.userRepository.save({
        ...createUserDto,
        department: dep,
      });
    } catch (error) {
      Logger.error(error);
    }
  }

  findAll() {
    return this.userRepository.find({ relations: ['department'] });
  }

  findOne(id: number) {
    try {
      return this.userRepository.findOneBy({ id: id });
    } catch (error) {
      Logger.error(error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
