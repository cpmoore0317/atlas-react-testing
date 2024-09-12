import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';
import { expect, it, describe } from 'vitest';

describe('CoverArt Component', () => {
  it('renders with image URL', () => {
    const { container } = render(
      <CoverArt imageUrl="https://example.com/cover.jpg" altText="Cover Art" />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders without image URL (fallback)', () => {
    const { container } = render(
      <CoverArt imageUrl="" altText="Cover Art" />
    );
    expect(container).toMatchSnapshot();
  });
});
