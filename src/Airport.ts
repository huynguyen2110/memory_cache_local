import {IMemoryCache} from "~/IMemoryCache";
import airports from "~/airports.json";

export class Airport {
  private memoryCache: IMemoryCache;
  private TTL = 2;
  constructor(memoryCache: IMemoryCache) {
    this.memoryCache = memoryCache
  }
  getAirport(code: string) {
    const keyAirPort = `airport_${code}`
    const isHasKey = this.memoryCache.checkHasKey(keyAirPort)

    if(isHasKey) {
      return this.memoryCache.get(keyAirPort)
    }
    const airportName = (airports as Record<string, string>)[code];

    if (!airportName) {
      return null;
    }

    const airportInfo = { code, name: airportName };
    this.memoryCache.add(keyAirPort, airportInfo, this.TTL);
    return airportInfo;
  }
}
