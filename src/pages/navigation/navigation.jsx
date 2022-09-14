import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar, NavLink } from "react-bootstrap";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXSquare } from 'react-icons/bs';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function isOnPage(path) {
    return window.location.pathname === path;
}

function BarMenu() {
    return (
        <Nav className="justify-content-end" style={{ width: "50%" }}>
            <div className="flex-container">
                {(!isOnPage("/home") && !isOnPage("/")) &&
                    <Nav.Link className="plant-nav-links" href="/home">Home</Nav.Link>
                }
                <Nav.Link className="plant-nav-links" href="/shop">Shop</Nav.Link>
                <Nav.Link className="plant-nav-links" href="/cart">Cart</Nav.Link>
                <Nav.Link className="plant-nav-links" href="/rewards">Rewards</Nav.Link>
                <Nav.Link className="plant-nav-links" href="/about">About Us</Nav.Link>
            </div>
        </Nav>
    );
}

// function menuIcon() {
//     return linksOut ? 
//         (<BsXSquare className='icon-button' size={35} style={{marginRight:"1rem"}}/>) :
//         (<GiHamburgerMenu className='icon-button' size={35} style={{marginRight:"1rem"}}/>);
// }

function HamburgerMenu() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {        
        function toggleNav() {
            setShowMobileNav(!showMobileNav);
            document.getElementById("mobileNav").style.width =
                showMobileNav ? "0%" : "100%";
        }

        document.getElementById("mobileMenuButton").addEventListener("click", toggleNav);

    }, [showMobileNav]);
    
    return (
        <>
            <button className="button navbar-button" id="mobileMenuButton">
                {showMobileNav && (<BsXSquare className='icon-button' size={35} style={{marginRight:"1rem"}}/>)}
                {!showMobileNav && (<GiHamburgerMenu className='icon-button' size={35} style={{marginRight:"1rem"}}/>)}
            </button>
            <div className="overlay" id="mobileNav">
                <div className="overlay-content">
                <Nav className="plant-nav-links">
                    {(!isOnPage("/home") && !isOnPage("/")) &&
                        <Nav.Link className="plant-nav-links" href="/home">Home</Nav.Link>
                    }
                    <Nav.Link className="plant-nav-links" href="/shop">Shop</Nav.Link>
                    <Nav.Link className="plant-nav-links" href="/cart">Cart</Nav.Link>
                    <Nav.Link className="plant-nav-links" href="/rewards">Rewards</Nav.Link>
                    <Nav.Link className="plant-nav-links" href="/about">About Us</Nav.Link>
                </Nav>
                </div>
            </div>
        </>
    );
}


export default function Navigation() {
    const [isSmall, setIsSmall] = useState(false);
    
    useEffect(() => {
        function handleResize() {
            setIsSmall(window.innerWidth < 1000);
        }

        handleResize();
        window.addEventListener('resize', handleResize);
    });

    return (
        <>
        <Navbar className="navbar-plant" expand="lg">
            <span className="plant-title">
                <NavLink href="/home"> Plant Shoppe </NavLink>
            </span>
            {!isSmall && <BarMenu />}
            {isSmall && <HamburgerMenu />}
        </Navbar>
        </>
    )
}