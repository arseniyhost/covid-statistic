import React, { FC } from 'react'
import "./Header.css"
import Logo from '../../images/logo.png'
import { BiSearch } from 'react-icons/bi'

interface HeaderProps {
    setValue: (value: string) => void
}

const Header: FC<HeaderProps> = ({ setValue }) => {
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
                    <BiSearch />
                    <input onChange={e => setValue(e.target.value)} type="text" placeholder="Search..." />
                </div>
            </div>
        </header>
    )
}

export default Header
