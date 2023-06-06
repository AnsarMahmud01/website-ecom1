import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, ratings, price, discount, new2} = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Бағасы: ${price}</p>
                <p>Өндіруші: {seller}</p>
                <p>Рейтинг: {ratings} Жұлдыздар</p>
                <h3 style={{color: "red", paddingTop: "15px"}}> {discount}</h3>
                <h3 style={{float: 'right', marginRight:"20px", color: 'darkgreen', position:"relative", bottom:"470px"}}>{new2}</h3>
                {/* <h3>{new}</h3> */}
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Себетке қосу
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;