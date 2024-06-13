 import React, { useContext } from 'react'
 import './ProductDisplay.css'
 import star_icon from "../Assets/star_icon.png";
 import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

 const ProductDisplay = (props) => {
    {console.log('dis',props)}

    const { product } = props;
    const{addToCart} = useContext(ShopContext);
   return (
         <div className='productdisplay'>
            <div className="productdisplay-left">
                 <div className="productdisplay-img-list">
                     <img src={product.image} alt="" />
                     <img src={product.image} alt="" />
                     <img src={product.image} alt="" />
                     <img src={product.image} alt="" />
                     
                 </div>
                 <div className="productdisplay-img">
                     <img className='productdisplay-main-img' src={product.image} alt="" />
                 </div>
             </div>
             <div className="productdisplay-right">
                 <h1>{product.name}</h1>
                 <div className="productdisplay-right-stars">
                     <img src={star_icon} alt="" />
                     <img src={star_icon} alt="" />
                     <img src={star_icon} alt="" />
                     <img src={star_icon} alt="" />
                     <img src={star_dull_icon} alt="" />
                   <p>(150)</p>
               </div>
                <div className="productdisplay-right-prices"> 
                     <div className="productdisplay-right-price-old">${product.old_price}</div>                 
                     <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                     Elevate your wardrobe with our Classic Striped Button-Up Shirt. Crafted from premium cotton fabric, this shirt offers both style and comfort.
                     The timeless stripe pattern adds a sophisticated touch, making it suitable for various occasions, from casual outings to formal events.
                    The button-up design allows for easy dressing, while the pointed collar adds a polished look.
                    Pair it with jeans for a relaxed vibe or dress it up with tailored trousers for a smart ensemble.
                    Available in multiple sizes and colors, this versatile shirt is a must-have staple for any wardrobe.
                </div>
                 <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                     <div className="productdisplay-right-sizes">
                         <div>S</div>                      
                         <div>M</div>
                         <div>L</div>
                         <div>XL</div>
                         <div>XXL</div>
                         <p>(150)</p>
                   </div>
                </div>
                 <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
                 <p className='productdisplay-right-category'><span>Category:</span> Women, T-shirt, CropTop</p>               
                 <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
     )
 }

 export default ProductDisplay;
