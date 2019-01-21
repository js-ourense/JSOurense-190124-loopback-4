import {
  get,
  RestBindings,
  Request,
  param,
  ParameterObject,
} from '@loopback/rest';
import {inject} from '@loopback/core';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

const helloNameSpec: ParameterObject = {
  name: 'name',
  in: 'query',
  required: true,
};

export class HelloWorldController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private readonly req: Request,
  ) {}

  @get('/hello')
  hello(@param(helloNameSpec) name: string) {
    return {
      message: `Hello, ${name}`,
    };
  }
}
