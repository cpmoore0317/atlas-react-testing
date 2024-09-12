import { http } from 'msw';

export const handlers = [
  http.get('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist', (req, res, ctx) => {
    // Mock response data
    const mockPlaylist = [
      {
        title: 'Song 1',
        artist: 'Artist 1',
        duration: '3:45',
        imageUrl: 'https://example.com/cover1.jpg',
        altText: 'Cover Art 1',
      },
      {
        title: 'Song 2',
        artist: 'Artist 2',
        duration: '4:20',
        imageUrl: 'https://example.com/cover2.jpg',
        altText: 'Cover Art 2',
      },
    ];

    return res(ctx.json(mockPlaylist));
  }),
];
