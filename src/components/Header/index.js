import React from 'react'
import './index.scss'
import logo from '../../img/logo-white.png'
import { AnimatedButton } from '../index'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} alt="logo" />
            </div>

            <div class="header__text-box">
                <h1 className="heading__primary">
                    <span className="heading__primary--main">Outdoors</span>
                    <span className="heading__primary--sub">is where life happens</span>
                </h1>
                <AnimatedButton />
            </div>
        </div>
    )
}

export default Header