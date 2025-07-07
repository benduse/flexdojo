import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the FlexDojo title', () => {
    render(<Header />);
    expect(screen.getByText('FlexDojo')).toBeInTheDocument();
  });
  
  it('displays the tagline', () => {
    render(<Header />);
    expect(screen.getByText('Train. Build. Flex')).toBeInTheDocument();
  });
});