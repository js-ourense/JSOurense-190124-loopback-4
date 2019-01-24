import {Entity, model, property} from '@loopback/repository';

@model()
export class Redeem extends Entity {
  @property({
    type: 'date',
    default: Date.now,
  })
  date?: Date;

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  constructor(data?: Partial<Redeem>) {
    super(data);
  }
}
