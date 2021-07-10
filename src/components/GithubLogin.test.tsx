import { render, screen } from '@testing-library/react';
import GithubLogin from './GithubLogin';

describe('GithubLogin Component Test', () => {
  it('render login text', () => {
    render(<GithubLogin />);
    const loginElement = screen.getByText('Github Login');
    expect(loginElement).toBeInTheDocument();
  });
});
