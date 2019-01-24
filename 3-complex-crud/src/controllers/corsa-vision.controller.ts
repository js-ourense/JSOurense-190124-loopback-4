import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CorsaVision} from '../models';
import {CorsaVisionRepository} from '../repositories';

export class CorsaVisionController {
  constructor(
    @repository(CorsaVisionRepository)
    public corsaVisionRepository: CorsaVisionRepository,
  ) {}

  @post('/corsa-visions', {
    responses: {
      '200': {
        description: 'CorsaVision model instance',
        content: {'application/json': {schema: {'x-ts-type': CorsaVision}}},
      },
    },
  })
  async create(@requestBody() corsaVision: CorsaVision): Promise<CorsaVision> {
    return await this.corsaVisionRepository.create(corsaVision);
  }

  @get('/corsa-visions/count', {
    responses: {
      '200': {
        description: 'CorsaVision model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CorsaVision)) where?: Where,
  ): Promise<Count> {
    return await this.corsaVisionRepository.count(where);
  }

  @get('/corsa-visions', {
    responses: {
      '200': {
        description: 'Array of CorsaVision model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CorsaVision}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CorsaVision))
    filter?: Filter,
  ): Promise<CorsaVision[]> {
    console.log('filter', filter);
    return await this.corsaVisionRepository.find(filter);
  }

  @patch('/corsa-visions', {
    responses: {
      '200': {
        description: 'CorsaVision PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() corsaVision: CorsaVision,
    @param.query.object('where', getWhereSchemaFor(CorsaVision)) where?: Where,
  ): Promise<Count> {
    return await this.corsaVisionRepository.updateAll(corsaVision, where);
  }

  @get('/corsa-visions/{id}', {
    responses: {
      '200': {
        description: 'CorsaVision model instance',
        content: {'application/json': {schema: {'x-ts-type': CorsaVision}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CorsaVision> {
    return await this.corsaVisionRepository.findById(id);
  }

  @patch('/corsa-visions/{id}', {
    responses: {
      '204': {
        description: 'CorsaVision PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() corsaVision: CorsaVision,
  ): Promise<void> {
    await this.corsaVisionRepository.updateById(id, corsaVision);
  }

  @put('/corsa-visions/{id}', {
    responses: {
      '204': {
        description: 'CorsaVision PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() corsaVision: CorsaVision,
  ): Promise<void> {
    await this.corsaVisionRepository.replaceById(id, corsaVision);
  }

  @del('/corsa-visions/{id}', {
    responses: {
      '204': {
        description: 'CorsaVision DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.corsaVisionRepository.deleteById(id);
  }
}
