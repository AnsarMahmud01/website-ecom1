import './Header.css'
import { FaLocationArrow } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs'
import { BsFillCartFill } from 'react-icons/bs'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <header className='header-wrap inner hidden-sm hidden-xs footer'>
            <div className="header-top">
                <div className="container-1">
                    <div className="row">
                        <div className="col-md-4 site-identity">
                            <h2 className='img-responsive logo'>BICICYCLE AI</h2>
                            <span className='title'>Қазақстандағы спорт тауарларының желісі</span>
                        </div>
                        <div className="col-md-8 flex-end">
                            <div className="city-choose">
                                <div className="dropper">
                                    <a href="" className='dropdown-toogle forms_in'>
                                        <FaLocationArrow />
                                        <span className='grey'>Сіздің қалаңыз:</span>
                                        Алматы
                                    </a>
                                </div>
                            </div>
                            <div className="phone">
                                <BsWhatsapp />
                                <a href="" className="the-phone">7 707 238 47 26</a>
                                <span className='worktime'>с 09:00 до 20:00, ПН-ВС</span>
                                <span className='forms_in grey order-calling'>Қоңырауды сұрау</span>
                            </div>
                            <div className="cart-block">
                                <a href="hacky_href">
                                    {/* <div className="informater">
                                        <BsFillCartFill />
                                        <span id="cart-total">
                                            <span className='my_cart_count'></span>
                                        </span>
                                    </div>
                                    <span className='grey'>
                                        В корзине (
                                        <span my_cart_count>0</span>
                                        )
                                    </span>
                                    <span>
                                        <span className='cart_total_sum'>0</span>тг
                                    </span> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id='main-menu' className='navbar'>
                <div className='container-1'>
                    <div className="row">
                        <div className="col-md-9">
                            <ul className='nav'>
                                {/* //                     <Link to="/">Дүкен</Link>
//                     <Link to="/orders">Тапсырыстар</Link>
//                     <Link to="/city">Қалалық</Link>
//                     <Link to="/mountain">Тау</Link>
//                     <Link to="/login">Тіркеу</Link> */}
                                <li>
                                    <Link to="/">Дүкен</Link>
                                </li>
                                <li>
                                    <Link to="/orders">Тапсырыстар</Link>
                                </li>
                                <li>
                                    <Link to="/city">Қалалық</Link>
                                </li>
                                <li>
                                    <Link to="/mountain">Тау</Link>
                                </li>
                                <li>
                                    <Link to="/login">Тіркеу</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Footer