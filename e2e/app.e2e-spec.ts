import { LcboAngularV2Page } from './app.po';

describe('lcbo-angular-v2 App', function() {
  let page: LcboAngularV2Page;

  beforeEach(() => {
    page = new LcboAngularV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
