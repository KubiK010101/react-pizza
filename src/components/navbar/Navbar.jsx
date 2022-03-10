import React from 'react';
import { Button } from '../button';
import { Search } from '../search';
import styles from './Navbar.module.scss';
import Logos from '../../img/LOGOS.svg';
import CartButton from '../button/CartButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={`${styles['navbar']}`}>
             <div className="container mx-auto">
            <div className="flex flex-row items-center content-between">
                <div className="basis-2/12">
                    {/* <img src="img/Logos.png" alt="logo" /> */}
                    <Link to="/">
                        <img src={Logos} alt="LOGO" className={`${styles['navbar__logo']}`} />
                    </Link>
                </div>
                <div className="basis-5/12">
                    <Search/>
                </div>
                <div className="basis-2/12">
                    <p className={`${styles['navbar__contacts']}`}>
                          Контакты:
                    </p>
                    <span className={`${styles['navbar__number']}`}>
                         +7 (917) 510-57-59
                    </span>
                </div>
                <div className='basis-3/12'>
                    <CartButton>В корзину </CartButton>
                </div>
            </div>
        </div>
        </div>
       
    );
}

export default Navbar;
