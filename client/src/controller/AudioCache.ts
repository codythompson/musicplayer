const CACHE_NAME:string = "AUDIO_CACHE"

export class AudioCache {
  private static async open():Promise<Cache> {
    return await caches.open(CACHE_NAME)
  }

  static async debug(): Promise<void> {
    const url1:string = "https://blobshroom.s3-us-west-2.amazonaws.com/assets/audio/mp3/king_james_vr.mp3"
    try {
      await AudioCache.add(url1)
    }
    catch(e) {
      console.error("caching error")
      console.log(e)
    }
  }

  static async has(url:string): Promise<boolean> {
    const cache:Cache = await AudioCache.open()
    const keys:readonly Request[] = await cache.keys()
    for (let req of keys) {
      if (req.url === url) {
        return true
      }
    }
    return false
  }

  static async add(url:string): Promise<void> {
    const alreadyCached = await AudioCache.has(url)
    if (!alreadyCached) {
      const cache = await AudioCache.open()
      try {
        const result = await cache.keys(url)
        console.log(result)
        await cache.add(url)
      }
      catch (e) {
        console.error("caching error")
        console.log(e)
      }
    } else {
      console.warn("Already cached: ", url)
    }
  }
}
