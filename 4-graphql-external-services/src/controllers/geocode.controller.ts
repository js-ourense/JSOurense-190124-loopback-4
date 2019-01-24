import {get, param} from '@loopback/rest';
import {GeoPoint, GeoCodeService} from '../services';
import {serviceProxy} from '@loopback/service-proxy';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class GeocodeController {
  constructor(
    @serviceProxy('GoogleMapsGeocode')
    private readonly geoCodeService: GeoCodeService,
  ) {}

  @get('/geocode', {
    responses: {
      '200': {
        description: 'Geocode address',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': GeoPoint}},
          },
        },
      },
    },
  })
  async geocode(@param.query.string('address') address: string) {
    return this.geoCodeService.geocode(address);
  }
}
