import React from 'react'
import Buttons from "./Buttons"


const Buttonlist = () => {

  const buttonlistname = ["All", "Cricket", "Game", "News", "java script", "Live", "Website", "Demo", "Indian Music", "Drama"]
  return (
    <>
    {buttonlistname.map((item,index) => <Buttons key={index} item={item} />)}
    </>
  )

}
export default Buttonlist