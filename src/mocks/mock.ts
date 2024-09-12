// src/mocks/mock.ts
import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get(
    'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist',
    (req, res, ctx) => {
      return res(ctx.json([
        {
          id: 1,
          title: 'Sample Song 1',
          artist: 'Artist 1',
          duration: '3:45',
          imageUrl: 'https://example.com/cover1.jpg',
        },
        {
          id: 2,
          title: 'Sample Song 2',
          artist: 'Artist 2',
          duration: '4:15',
          imageUrl: 'https://example.com/cover2.jpg',
        },
      ]));
    }
  ),
];

export const server = setupServer(...handlers);
