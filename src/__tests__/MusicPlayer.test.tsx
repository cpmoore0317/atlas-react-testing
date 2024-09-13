// src/__tests__/MusicPlayer.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import MusicPlayer from '../MusicPlayer';
import usePlaylistData from '../hooks/usePlaylistData';

// Mock the usePlaylistData hook
vi.mock('../hooks/usePlaylistData', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('MusicPlayer Component', () => {
  test('renders MusicPlayer component', () => {
    // Mock the playlist data hook
    (usePlaylistData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
    });

    render(<MusicPlayer />);
    
    // Use regex for flexible matching (case-insensitive)
    expect(screen.getByText(/unknown title/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', () => {
    // Mock the playlist data hook to simulate loading state
    (usePlaylistData as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
    });

    render(<MusicPlayer />);
    
    // Assert that the loading state is displayed
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('toggles play/pause functionality', () => {
    // Mock the playlist data hook
    (usePlaylistData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
    });

    render(<MusicPlayer />);
    
    // Find the play/pause button by its accessible role and name
    const playPauseButton = screen.getByRole('button', { name: /play/i });
    fireEvent.click(playPauseButton);
    // After clicking, the button text should switch to "Pause"
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
  });

  test('goes to the next and previous songs correctly', () => {
    // Mock the playlist data hook
    (usePlaylistData as jest.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Song 1' },
        { id: 2, title: 'Song 2' },
        { id: 3, title: 'Song 3' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);
    
    // Find and click the "Next" button
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    // Assert that the currently playing song is "Song 2"
    expect(screen.getByText(/song 2/i)).toBeInTheDocument();

    // Find and click the "Previous" button
    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);
    // Assert that the currently playing song is "Song 1"
    expect(screen.getByText(/song 1/i)).toBeInTheDocument();
  });

  test('selecting a song from the playlist updates currently playing', () => {
    // Mock the playlist data hook
    (usePlaylistData as jest.Mock).mockReturnValue({
      data: [
        { id: 1, title: 'Song 1' },
        { id: 2, title: 'Song 2' },
        { id: 3, title: 'Song 3' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);
    
    // Find and click on a song title to select it
    const songItem = screen.getByText(/song 2/i);
    fireEvent.click(songItem);
    // Assert that the currently playing song is "Song 2"
    expect(screen.getByText(/song 2/i)).toBeInTheDocument();
  });
});
