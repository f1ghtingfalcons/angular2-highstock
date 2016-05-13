export class Angular2HighstockPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-highstock-app h1')).getText();
  }
}
