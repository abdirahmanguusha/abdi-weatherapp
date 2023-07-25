import React from 'react'
import cloud from "../images/WeatherIcons.gif"

export default function Error() {
  return (
    <div className="error__container">
    <div className="error__error">
      <h1>ERROR  ⚠️  occurred</h1>
      <img src={cloud} alt='cloud'/>
    </div>
    <div className="text__error">
   < p>Location Access Permition Denied!</p>
      <p>Please allow the location and reload the page!</p>
    </div>
  </div>
  )
}
