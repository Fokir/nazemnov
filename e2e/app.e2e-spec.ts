import { NazemnovPage } from './app.po';

describe('nazemnov App', () => {
  let page: NazemnovPage;

  beforeEach(() => {
    page = new NazemnovPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
