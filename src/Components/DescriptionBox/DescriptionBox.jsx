import React from 'react'
import'./DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
     <div className="descriptionbox-navigator">
       <div className="descriptionbox-nav-box">Description</div>
       <div className="descriptionbox-nav-box fade">Revivews(150)</div> 
     </div>
     <div className="descriptionbox-descriptioon">
        <p>An e-commerce website is an online platform that facilites buying and saling product in world customers can buy eny  wher
          any time using  the mobile devise or pc using and that consept is help to the customers saving their valuble time and money. 
        </p>
         <p>
            E-commerse website typically display product or servise a detaied descrption,image,prices, and othe prodect details(clour,sizes)
            each product has its own details with relevent infomation.
         </p>
     </div>
    </div>
  )
}

export default DescriptionBox