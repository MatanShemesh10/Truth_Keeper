import React, { useRef, useState } from 'react';

import './navbar.css';
import { INavbarComponentProps } from './Navbar.interface';

import LogoImage from '@images/logosingle.png'
import { preformOnDelay } from '@/app/handlers/perform-on-delay';

export const Navbar: React.FC<INavbarComponentProps> = () => {
    const [isMenuOpen, setMenu] = useState<'true' | 'false' | 'pending'>('false');
    const menuContainerRef = useRef<HTMLDivElement | null>(null)
    const menuContainerButtonRef = useRef<HTMLButtonElement>(null)

    const handleDropdownMenu = () => {
        const currentStatus = isMenuOpen;

        preformOnDelay(() => {

            setMenu(() => isMenuOpen === 'false' ? 'true' : 'false');

            if (menuContainerRef.current !== null && menuContainerButtonRef.current !== null) {
                if (currentStatus === 'false') {
                    menuContainerRef.current.className = 'navbar-collapse collapse'


                }
                else if (currentStatus === 'true') {
                    menuContainerRef.current.style.height = 'navbar-collapse show'


                }
            }

        }, 100);

        if (menuContainerRef.current !== null && menuContainerButtonRef.current !== null) {
            if (currentStatus === 'false') {
                menuContainerRef.current.style.height = '398px'
                menuContainerButtonRef.current.className = 'navbar-toggler collapsed'
            }
            else if (currentStatus === 'true') {
                menuContainerButtonRef.current.className = 'navbar-toggler'
                menuContainerRef.current.style.height = ''
            }
            else {

            }
            menuContainerRef.current.style.height = 'navbar-collapse collapsing'
        }

        setMenu(() => 'pending');
    }



    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={LogoImage} className="" alt="" style={{
                        height: '100px',
                        display: 'inline-flex',
                    }} />

                </a>

                <div className="d-lg-none ms-auto me-4">
                    <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                </div>

                <button ref={menuContainerButtonRef} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isMenuOpen === 'true' ? 'true' : 'false'} aria-label="Toggle navigation" onClick={handleDropdownMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div ref={menuContainerRef} className={`collapse navbar-collapse ${isMenuOpen === 'true' ? 'show' : isMenuOpen === 'pending' ? 'collapsing' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-lg-5 me-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">Browse Topics</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">How it works</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">FAQs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">Contact</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#" id="navbarLightDropdownMenuLink"
                                role="button" data-bs-toggle="dropdown"
                                aria-expanded={isMenuOpen === 'pending' ? 'false' : 'true'}
                            >
                                Pages
                            </a>

                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                <li><a className="dropdown-item" href="topics-listing.html">Topics Listing</a></li>

                                <li><a className="dropdown-item" href="contact.html">Contact Form</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-none d-lg-block">
                        <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                    </div>
                </div>
            </div>
        </nav >
    )
}