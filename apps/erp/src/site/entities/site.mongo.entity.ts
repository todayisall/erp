import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
  ObjectId,
} from 'typeorm';

export enum PAGE_TYPE {
  'pc' = 0, // pc
  'mobile' = 1, // mobile
  'weapp' = 2, // 小程序
}

export enum STATUS_TYPE {
  'activated' = 0, // 未激活
  'inactive' = 1, // 激活
  'deleted' = 2, // 删除
}

export enum API_TYPE {
  'swagger' = 0,
}

@Entity()
export class Site {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  url: string;

  @Column({ default: null })
  currentVersion: string;

  // 设备类型
  @Column()
  type: PAGE_TYPE;

  // site 状态
  @Column({ default: STATUS_TYPE.inactive })
  status: STATUS_TYPE;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @UpdateDateColumn({ default: null })
  appointmentUp: string;

  @UpdateDateColumn({ default: null })
  appointmentDown: string;
}
