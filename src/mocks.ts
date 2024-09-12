import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

// Define the mock handlers
export const handlers = [
  http.get(
    "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    () => {
      return HttpResponse.json([
        {
          id: 1,
          title: "Test Song 1",
          artist: "Test Artist 1",
          duration: "3:30",
          coverArt: "https://example.com/cover1.jpg"
        },
        {
          id: 2,
          title: "Test Song 2",
          artist: "Test Artist 2",
          duration: "4:15",
          coverArt: "https://example.com/cover2.jpg"
        }
      ]);
    }
  ),
];

export const server = setupServer(...handlers);
