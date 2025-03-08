import {IMemoryCache} from '~/IMemoryCache'
import {MemoryCache as MemoryCacheNode} from 'memory-cache-node'
import {Airport} from "~/type";

export class MemoryCache implements IMemoryCache {
  private memoryCache: MemoryCacheNode<string, Airport>

  constructor(itemsExpirationCheckIntervalInSecs = 1, maxItemCount: number = 1000) {
    this.memoryCache = new MemoryCacheNode<string, Airport>(itemsExpirationCheckIntervalInSecs, maxItemCount)
  }

  add(key: string, value: Airport, ttl?: number) {
    if (ttl) {
      this.memoryCache.storeExpiringItem(key, value, ttl)
    } else {
      this.memoryCache.storePermanentItem(key, value);
    }
  }

  remove(key: string) {
    this.memoryCache.removeItem(key)
  }

  checkHasKey(key: string): boolean {
    return this.memoryCache.hasItem(key)
  }

  get(key: string): Airport | undefined {
    return this.memoryCache.retrieveItemValue(key)
  }

  clear() {
    this.memoryCache.clear()
  }

  getAllValues(): Airport[] {
    return this.memoryCache.getValues();
  }
}
