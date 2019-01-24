import {Entity, model, property} from '@loopback/repository';

@model()
export class Prize extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  corsaVisionsNeeded: number;


  constructor(data?: Partial<Prize>) {
    super(data);
  }
}
