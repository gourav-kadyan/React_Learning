import React, { useState } from 'react'
import"./img.css"

const ImageSlider = () => {

    const [change, setChange] = useState(0);

    const images = [
     "./1.jpg",
     "./2.jpg", 
     "./3.jpg",
     "./5.jpg",
     "./10.jpg"];

     const incre = () =>{
        setChange((change+1)%images.length)
     }

     const decre = () => {
        setChange(change === 0?images.length-1:change-1);
     }

  return (
    <div>
        <div>
            <img src={images[change]} className='img' />
        </div>
        <button onClick={decre} >Previous</button>
        <button onClick={incre} >Next</button>
    </div>
  )
}

export default ImageSlider

