import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/item'
import new_collections from '../Assets/new_collections'



const NewCollections = () => {

  return (
    <div className='newCollections' >
     <h1>NEW COLLECTIONS</h1>
     <hr/>
     <div className="collections">
     {new_collections.map((item,i)=>{
        return<Item key={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     })}
     </div>
    </div>
  )
}

export default NewCollections