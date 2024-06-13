import React, { useContext} from 'react'
import './FoodItem.css'
import {food_list} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
            {
                !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src="../src/assets/plus.png" alt="" />: <div className='food-item-counter'>
                  <img className='removeItm' onClick={()=>removeFromCart(id)} src="../src/assets/delete.png" alt="" />
                  <p>{cartItems[id]}</p>
                  <img className='addItm' onClick={()=>addToCart(id)}src="../src/assets/add.png" alt="" />
                </div>
            }
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={food_list.rating_stars} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'><b>₹</b>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
