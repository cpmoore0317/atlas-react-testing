import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';
import { expect, it, describe } from 'vitest';

describe('SongTitle Component', () => {
  it('renders song title and artist', () => {
    const { container } = render(<SongTitle title="Test Song" artist="Test Artist" />);
    expect(container).toMatchSnapshot();
  });

  it('renders song title without artist', () => {
    const { container } = render(<SongTitle title="Only Title" artist="" />);
    expect(container).toMatchSnapshot();
  });
});
