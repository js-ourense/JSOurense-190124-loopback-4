import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'GoogleMapsGeocode',
  connector: 'rest',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        query: {
          address: '{address}',
          key: process.env.MAPS_API_KEY,
        },
        responsePath: '$.results[0].geometry.location',
      },
      functions: {
        geocode: ['address'],
      },
    },
  ],
};

export class GoogleMapsGeocodeDataSource extends juggler.DataSource {
  static dataSourceName = 'GoogleMapsGeocode';

  constructor(
    @inject('datasources.config.GoogleMapsGeocode', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
