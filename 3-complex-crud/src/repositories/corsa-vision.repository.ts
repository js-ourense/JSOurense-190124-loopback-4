import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CorsaVision} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CorsaVisionRepository extends DefaultCrudRepository<
  CorsaVision,
  typeof CorsaVision.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(CorsaVision, dataSource);
  }
}
