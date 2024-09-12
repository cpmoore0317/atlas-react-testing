import '@testing-library/jest-dom/vitest';
import { server } from './mocks/mock';
import { afterAll, beforeAll, afterEach } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());