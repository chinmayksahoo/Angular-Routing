import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', async () => {
  //   await page.navigateTo();
  //   expect(await page.getTitleText()).toEqual('RouteDemo app is running!');
  // });

  it('should display paragraph with sidebar as text',async() => {
    await page.navigateTo();
    expect(await page.getParaText()).toEqual('Sidebar')
  });

  it('should contain app-header',async() => {
    await page.navigateTo();
    expect(await page.isHeadrerPresent()).toBeTruthy()
  });

  it('should contain a router outlet',async() => {
    await page.navigateTo();
    expect(await page.isRouterPresent()).toBeTruthy()
  });

  it('should contain a login router link',async() => {
    await page.navigateTo();
    expect(await page.getLoginLink()).toEqual('Login')
  });

  it('when clicked on login link & Signed In should route to Dashboard',async() => {
    await page.navigateTo();
    await page.clickLoginLink()
    await browser.sleep(2000)
    expect(browser.getCurrentUrl()).toContain("http://localhost:4200/login");
    await page.clickSignIn()
    await browser.sleep(2000)
    await page.clickSignIn()
    await browser.sleep(2000)
    expect(browser.getCurrentUrl()).toContain("http://localhost:4200/dashboard");
    await browser.sleep(2000)

    //Create a mock object of service/any object & it's functions
    //spyon()
    //jasmin.spy()
    //Hot Observables
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
