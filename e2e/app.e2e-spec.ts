import { HowtoimplementitPage } from './app.po';

describe('howtoimplementit App', () => {
  let page: HowtoimplementitPage;

  beforeEach(() => {
    page = new HowtoimplementitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
