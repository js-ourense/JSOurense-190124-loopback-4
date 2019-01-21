import {Client, expect} from '@loopback/testlab';
import {HelloWorldApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloWorldController', () => {
  let app: HelloWorldApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /hello', async () => {
    const res = await client.get('/hello?name=JSOurense').expect(200);
    expect(res.body.message).to.containEql('Hello, JSOurense');
  });
});
