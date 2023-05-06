import React, { useState } from 'react'

const Accordian = () => {

    const [ see, setSee ] = useState(false);

    const show = () => {
        setSee(!see);
    }

  return (
    <div>
        <h1 onClick={show} >Accordian</h1>
        {see && (
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure repudiandae accusantium tenetur consequuntur eaque reprehenderit. Minus error modi explicabo pariatur incidunt repudiandae qui quam recusandae accusamus quisquam ad, obcaecati laboriosam?</p>
        ) }
    </div>
  )
}

export default Accordian