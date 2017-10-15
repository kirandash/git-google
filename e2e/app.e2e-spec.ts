import { GitGooglePage } from './app.po';

describe('git-google App', () => {
  let page: GitGooglePage;

  beforeEach(() => {
    page = new GitGooglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to gg!');
  });
});
