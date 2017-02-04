import { ListDetailsExamplePage } from './app.po';

describe('list-details-example App', function() {
  let page: ListDetailsExamplePage;

  beforeEach(() => {
    page = new ListDetailsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
