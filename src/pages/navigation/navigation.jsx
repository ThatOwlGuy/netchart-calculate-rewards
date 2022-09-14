import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar, NavLink } from "react-bootstrap";
import { GiHamburgerMenu } from 'react-icons/gi';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function isOnPage(path) {
    return window.location.pathname === path;
}

function BarMenu() {
    return (
        <Nav className="plant-nav-links">
            {(!isOnPage("/home") && !isOnPage("/")) &&
                <Nav.Link className="plant-nav-links" href="/home">Home</Nav.Link>
            }
            <Nav.Link className="plant-nav-links" href="/shop">Shop</Nav.Link>
            <Nav.Link className="plant-nav-links" href="/cart">Cart</Nav.Link>
            <Nav.Link className="plant-nav-links" href="/rewards">Rewards</Nav.Link>
            <Nav.Link className="plant-nav-links" href="/about">About Us</Nav.Link>
        </Nav>
    );
}

function HamburgerMenu() {

    return (
        <>
            <button className="button navbar-button" onClick={toggleNav}>
                <GiHamburgerMenu className='icon-button' size={35}/>
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

function toggleNav() {
    let barOut = document.getElementById("mobileNav").style.width === "100%";
    if (barOut) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
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