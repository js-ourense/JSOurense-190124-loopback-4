import {Entity, model, property, hasMany} from '@loopback/repository';
import {CorsaVision} from './corsa-vision.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
    hidden: true,
  })
  secondName: string;

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    default: Date.now,
  })
  createDate?: Date;

  @hasMany(() => CorsaVision)
  corsaVisions?: CorsaVision[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}
