/**
 * Simple in-memory rate limiter.
 * Production: swap the store for Upstash Redis (@upstash/ratelimit).
 *
 * Allows `limit` requests per `windowMs` milliseconds per identifier (IP).
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Prune expired entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) store.delete(key);
  }
}, 5 * 60 * 1000);

interface RateLimitOptions {
  limit?: number;      // max requests
  windowMs?: number;  // window in ms
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(
  identifier: string,
  { limit = 5, windowMs = 60_000 }: RateLimitOptions = {}
): RateLimitResult {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || entry.resetAt < now) {
    // First request or window expired — reset
    const newEntry: RateLimitEntry = { count: 1, resetAt: now + windowMs };
    store.set(identifier, newEntry);
    return { success: true, remaining: limit - 1, resetAt: newEntry.resetAt };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { success: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}
