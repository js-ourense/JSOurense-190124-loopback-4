import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class CorsaVision extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'date',
    default: Date.now,
  })
  date?: Date;

  @property({
    type: 'string',
  })
  comment?: string;

  @property({
    type: 'string',
  })
  model?: string;

  @property({
    type: 'object',
  })
  coordinates?: {
    lat: number;
    lng: number;
  };

  @property({
    type: 'string',
  })
  address?: string;

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<CorsaVision>) {
    super(data);
  }
}
