import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Set up a mock server with the handlers
export const server = setupServer(...handlers);
