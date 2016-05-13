import { Angular2HighstockPage } from './app.po';

describe('angular2-highstock App', function() {
  let page: Angular2HighstockPage;

  beforeEach(() => {
    page = new Angular2HighstockPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-highstock works!');
  });
});
