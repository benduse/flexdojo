import { render, screen } from '@testing-library/react';
import { BeltIndicator } from './BeltIndicator';

describe('BeltIndicator', () => {
  it('renders white belt by default', () => {
    render(<BeltIndicator />);
    expect(screen.getByText('White Belt')).toBeInTheDocument();
  });

  it('displays correct belt label', () => {
    render(<BeltIndicator currentBelt="blue" />);
    expect(screen.getByText('Blue Belt')).toBeInTheDocument();
  });

  it('shows XP progress to next belt', () => {
    render(<BeltIndicator currentBelt="white" xp={50} />);
    expect(screen.getByText('50 XP to next')).toBeInTheDocument();
  });

  it('does not show progress for black belt', () => {
    render(<BeltIndicator currentBelt="black" xp={5000} />);
    expect(screen.queryByText(/XP to next/)).not.toBeInTheDocument();
  });
});