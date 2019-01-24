import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {post, param, requestBody} from '@loopback/rest';
import {CorsaVision} from '../models';
import {UserRepository} from '../repositories';

export class UserCorsaVisionController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users/{idUser}/corsa-visions/', {
    responses: {
      '200': {
        description: 'CorsaVision model instance',
        content: {'application/json': {schema: {'x-ts-type': CorsaVision}}},
      },
    },
  })
  async create(
    @param.path.string('idUser') idUser: string,
    @requestBody() corsaVision: CorsaVision,
  ): Promise<CorsaVision> {
    return await this.userRepository.corsaVisions(idUser).create(corsaVision);
  }
}
