import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '..//Components/NewCollections/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Item from '../Components/Item/item'


const Shop = () => {
  return ( 
    <div>
     <Hero/> 
    <Popular/>
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
     <Item/> 
     </div>
   );
}
 
export default Shop;
