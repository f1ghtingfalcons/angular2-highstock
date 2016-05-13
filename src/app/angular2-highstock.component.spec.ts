import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2HighstockAppComponent } from '../app/angular2-highstock.component';

beforeEachProviders(() => [Angular2HighstockAppComponent]);

describe('App: Angular2Highstock', () => {
  it('should create the app',
      inject([Angular2HighstockAppComponent], (app: Angular2HighstockAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-highstock works!\'',
      inject([Angular2HighstockAppComponent], (app: Angular2HighstockAppComponent) => {
    expect(app.title).toEqual('angular2-highstock works!');
  }));
});
