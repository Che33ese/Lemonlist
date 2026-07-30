import test from 'node:test';
import assert from 'node:assert/strict';

import { getLevelVideoLink } from '../js/util.js';

test('prefers verification when present', () => {
  const level = {
    verification: 'https://www.youtube.com/watch?v=abc123',
    showcase: 'https://www.youtube.com/watch?v=showcase',
  };

  assert.equal(getLevelVideoLink(level), 'https://www.youtube.com/watch?v=abc123');
});

test('falls back to showcase when verification is missing', () => {
  const level = {
    showcase: 'https://www.youtube.com/watch?v=showcase',
  };

  assert.equal(getLevelVideoLink(level), 'https://www.youtube.com/watch?v=showcase');
});

test('returns showcase when explicitly requested', () => {
  const level = {
    verification: 'https://www.youtube.com/watch?v=abc123',
    showcase: 'https://www.youtube.com/watch?v=showcase',
  };

  assert.equal(getLevelVideoLink(level, { preferShowcase: true }), 'https://www.youtube.com/watch?v=showcase');
});
