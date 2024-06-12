import { Redis } from "@upstash/redis";

export const db : Redis = new Redis({
    token: process.env.UPSTASH_REDIS_REST_TOKEN! as string,
    url: process.env.UPSTASH_REDIS_REST_URL! as string
})