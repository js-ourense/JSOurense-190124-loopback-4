import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {User, CorsaVision} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CorsaVisionRepository} from './corsa-vision.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  public readonly corsaVisions: HasManyRepositoryFactory<
    CorsaVision,
    typeof CorsaVision.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(CorsaVisionRepository)
    protected corsaVisionRepositoryGetter: Getter<CorsaVisionRepository>,
  ) {
    super(User, dataSource);
    this.corsaVisions = this.createHasManyRepositoryFactoryFor(
      'corsaVisions',
      corsaVisionRepositoryGetter,
    );
  }
}
