import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from '../mocks/server';
import '@testing-library/jest-dom';

// Start the MSW server before all tests
beforeAll(() => server.listen());

// Reset any request handlers that are declared in a test
afterEach(() => server.resetHandlers());

// Stop the MSW server after all tests
afterAll(() => server.close());
