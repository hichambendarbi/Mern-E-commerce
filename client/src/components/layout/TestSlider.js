import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Image = styled.div`
width: 300px;
height: 100px;
background: red;
transform: all 0.9s;
display: flex;
justify-content: center;
align-items: center;
`

const TestSlider = () => {
    const Img = ['M1', 'M2', 'M3', 'M4', 'M5'];
    const [formData, setFormData] = useState({
        init: Img[0],
        test: 0
    })

    const {init, test} = formData;
    
   var conteur;
   const Len = Img.length;
    const ChangeImage = () => {
          if(conteur===3000 && test<Len) {
            setFormData({
                init: Img[test],
                test: test + 1
              })
      }
      if(test===Len) {
        setFormData({
            init: Img[0],
            test: 0
          })
      }
      console.log(test)
    }

    const onLeft = () => {
            setFormData({
                init: Img[test],
                test: test+1
              })
    }

    setTimeout(()=> ChangeImage(), conteur = 3000)

    return (
        <div>
            <Image>
                {init}
            </Image>
            <button onClick={()=> onLeft()}>Left</button>
        </div>
    )
}

export default TestSlider
