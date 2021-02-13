import React, { ReactElement, useEffect, useState } from "react"
import { AudioCache } from "../controller/AudioCache"

// async function go() {
//   await AudioCache.debug()
// }

function play(audioEle:HTMLAudioElement) {
  audioEle.play()
}
function pause(audioEle:HTMLAudioElement) {
  audioEle.pause()
}

export function Player(): ReactElement  {
  let [isLoading, setIsLoading] = useState(true)

  let audioEle = new Audio()

  useEffect(()=> {
    console.log("hmmmm")
    AudioCache.debug()
      .then(() => setIsLoading(false))
  })

  if (isLoading) {
    return <h3>loading...</h3>
  }
  else {
    audioEle.src = "https://blobshroom.s3-us-west-2.amazonaws.com/assets/audio/mp3/king_james_vr.mp3"
    return (
      <div>
        <button onClick={play.bind({}, audioEle)}>play</button>
        <button onClick={pause.bind({}, audioEle)}>pause</button>
      </div>
    )
  }
}
