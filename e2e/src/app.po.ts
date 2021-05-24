import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getParaText(): Promise<string> {
    return element(by.tagName('p')).getText();
  }

  async isHeadrerPresent():Promise<Boolean> {
    var header = element(by.tagName('app-header'))
    return header.isPresent()
  }

  async isRouterPresent():Promise<Boolean> {
    var router = element(by.tagName('router-outlet'))
    return router.isPresent()
  }

  async getLoginLink():Promise<string> {
    return element(by.css('[routerLink="login"]')).getText()
  }

  async clickLoginLink() {
    element(by.css('[routerLink="login"]')).click()
    await browser.sleep(5000)
    element(by.id('username')).sendKeys('admin')
    element(by.id('password')).sendKeys('password')
    // element(by.css('[value="Sign In"]')).click()
    await browser.sleep(5000)
    // return browser.getCurrentUrl()
  }

  async clickSignIn(){
    element(by.css('[value="Sign In"]')).click()
  }
}
