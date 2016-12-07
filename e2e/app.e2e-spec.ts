import { Ng2KwTelesketchPage } from './app.po';

describe('ng2-kw-telesketch App', function() {
  let page: Ng2KwTelesketchPage;

  beforeEach(() => {
    page = new Ng2KwTelesketchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
