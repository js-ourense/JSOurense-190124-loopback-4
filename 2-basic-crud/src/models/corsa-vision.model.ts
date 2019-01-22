import {Entity, model, property, DateType} from '@loopback/repository';

@model()
export class CorsaVision extends Entity {
  @property({
    id: true,
    type: 'string',
  })
  id: string;

  @property({
    type: 'date',
    required: true,
    default: Date.now,
  })
  visionDate: Date;

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<CorsaVision>) {
    super(data);
  }
}
