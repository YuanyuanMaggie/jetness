import React from 'react';
import './index.css';

const HeaderLeft = () => (
    <div className="header-left font-bold">
        <a href="/" class="relative logo">
            <i class="icon-jet hide-small hide-medium"></i>
            <i class="icon-j hide-large"></i>
        </a>
        <div>
        <a href="/" className="nav-cat hide-small hide-medium">
            Categories
            <span>
                <i class="icon-caret-down ml1 smaller"></i>
            </span>
        </a>
        </div>
    </div>
)

const HeaderMid = () => (
    <div className="header-mid font-bold">
        <div className="search">
            <input type="text" placeholder="Search and start saving..." className="py1 pl2 pr4 h5 search-box hide-small hide-medium"/>
            <input type="text" placeholder="Search" className="py1 pl2 pr4 h5 search-box hide-large"/>
            <div class="icon icon-search h4 i-search"></div>
        </div>
        <div className="search-below hide-small hide-medium">
            <div>
                <a href="https://jet.com/promotions"><span className="pr3 small">Promotions</span></a>
                <a href="https://jet.com/why-shop-jet"><span className="pr3 small">Why Shop Jet</span></a>
                <a href="https://jet.com/why-shop-jet"><span className="pr3 small">24/7 Help<i class="icon-caret-down ml1 smaller"></i></span></a>
            </div>
            <div>
                <a href="https://jet.com/account"><span className="pr3 small">Account <i class="icon-caret-down ml1 smaller"></i></span></a>
                <a href="https://jet.com/account/favorites"><span className="pr3 small">My Faves</span></a>
                <a href="https://jet.com/account/reorder"><span className="pr3 small">Easy Reorder</span></a>
            </div>
        </div>
    </div>
)

const HeaderRight = () => (
    <div className="header-right font-bold">
        <div className="free hide-small hide-medium">Free Shipping Over $35*</div>
        <div>
            <i className="icon-cart-empty empty"></i>
            <span className="pl1 hide-small hide-medium">Cart</span>
        </div>
    </div>
)

const Header = () => (
    <div className="header">
        <HeaderLeft />
        <HeaderMid/>
        <HeaderRight/>
    </div>
)

export default Header;