import NavLinks from "./NavLinks";
import '../../App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseO } from 'react-icons/cg'
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className='hamburger'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgCloseO className='hamburger'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className='mobileNavigation'>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

        </nav>

    )
}

export default MobileNavigation;