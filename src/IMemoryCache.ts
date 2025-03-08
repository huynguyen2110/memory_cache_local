import {Airport} from "~/type";
export interface IMemoryCache {
  add(key: string, value: Airport, ttl?: number): void
  remove(key: string): void
  checkHasKey(key: string): boolean
  get(key: string): Airport | undefined
  clear(): void
  getAllValues(): Airport[]
}
