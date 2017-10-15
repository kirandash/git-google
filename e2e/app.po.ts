import { browser, by, element } from 'protractor';

export class GitGooglePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gg-root h1')).getText();
  }
}
