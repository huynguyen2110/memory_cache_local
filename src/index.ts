import {Airport} from "~/Airport";
import {MemoryCache} from "~/MemoryCache";


const memoryCache = new MemoryCache()
const airport = new Airport(memoryCache)

airport.getAirport("JFK")
setTimeout(() => {
  airport.getAirport("JFK")
}, 5000)


