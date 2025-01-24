import { HeaderContainer } from "./styled";
import { Timer, Scroll } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <span><img src={logo} alt="" /></span>
            <nav>
                <NavLink to="/">
                    <Timer size={24} />
                </NavLink>

                <NavLink to="/history">
                    <Scroll size={24} />
                </NavLink>

            </nav>
        </HeaderContainer>
    )
}

