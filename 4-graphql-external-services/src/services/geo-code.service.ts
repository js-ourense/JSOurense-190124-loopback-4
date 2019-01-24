import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {GoogleMapsGeocodeDataSource} from '../datasources';

export interface GeoPointSpecification {
  lat: number;
  lng: number;
}

export interface GeoCodeService {
  geocode(address: string): Promise<GeoPointSpecification[]>;
}

export class GeoPoint implements GeoPointSpecification {
  lat: number;
  lng: number;

  constructor(data: Partial<GeoPointSpecification>) {
    Object.assign(this, data);
  }
}

export class GeoCodeServiceProvider implements Provider<GeoCodeService> {
  constructor(
    // GoogleMapsGeocode must match the name property in the datasource json file
    @inject('datasources.GoogleMapsGeocode')
    protected dataSource: GoogleMapsGeocodeDataSource = new GoogleMapsGeocodeDataSource(),
  ) {}

  value(): Promise<GeoCodeService> {
    return getService(this.dataSource);
  }
}
