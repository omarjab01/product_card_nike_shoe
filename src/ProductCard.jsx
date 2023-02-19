import React from 'react'
import shoe from './shoe.png'

const ProductCard = () => {
  return (
    <div className='container_product_card'>
        <div className='product_card'>
            <div className='top_card'>
                {/* img, price */}
                <img src={shoe} className="product_image"/>
                <span className='product_price'>€ 455</span>
            </div>
            <div className='bottom_card'>
                {/* name, desc, cta */}
                <div className='product_name'>
                    <h6>Nike</h6>
                    <h4>Air Jordan 1 Retro</h4>
                </div>
                <div className='product_description'>
                    <p>The extremely popular Air Jordan 1 shoes are the best-selling Air Jordans in the history of the brand, not to mention the success that the versions dedicated to Michael Jordan's career have had.</p>
                </div>
                <button type="button" className='cta_add_to_cart'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard