import { render, waitFor } from '@testing-library/react';
import usePlaylistData from '../hooks/usePlaylistData';
import { expect, it, describe } from 'vitest';

const TestComponent = () => {
  const { data, loading } = usePlaylistData();
  return (
    <div>
      <div data-testid="loading">{loading ? 'Loading...' : 'Loaded'}</div>
      <div data-testid="data">{data.length}</div>
    </div>
  );
};

describe('usePlaylistData Hook', () => {
  it('fetches playlist data and updates state', async () => {
    // Render the test component that uses the hook
    const { getByTestId } = render(<TestComponent />);

    // Wait for the loading state to disappear
    await waitFor(() => expect(getByTestId('loading')).toHaveTextContent('Loaded'));

    // Check that data has been populated correctly
    expect(getByTestId('data')).toHaveTextContent('2'); // Adjust based on your mock data length
  });
});
