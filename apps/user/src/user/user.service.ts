import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    try {
      return this.userRepository.save(createUserDto);
    } catch (error) {
      Logger.error(error);
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    try {
      return this.userRepository.findOneBy({ id: id });
    } catch (error) {
      Logger.error(error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
