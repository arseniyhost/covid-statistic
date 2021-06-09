import React from 'react'
import "./Header.css"
import Logo from '../../images/logo.png'

const Header = ({ setValue }) => {
    return (
        <header>
            <div className="menu">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <div className="logo-article">
                        statistic
                    </div>
                </div>
                <div className="search">
                    <input onChange={e => setValue(e.target.value)} type="text" placeholder="Search..." />
                </div>
            </div>
        </header>
    )
}

export default Header
