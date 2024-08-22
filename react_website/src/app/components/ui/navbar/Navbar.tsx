import React, { useRef, useState } from 'react';

import './navbar.css';
import { INavbarComponentProps } from './Navbar.interface';

import LogoImage from '@images/logosingle.png'
import DonwloadChromeEx from '@images/download_chrome.png'
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
        <meta name="google-site-verification" content="dFBVdShX6KItmVFhEueKZwrSAjqd9JpIruHr2oFyY5U" />
        <nav className="navbar navbar-expand-lg" style={{width:'100%', position:'fixed',top:'0px'}}>
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={LogoImage} className="" alt="" style={{
                        height: '100px',
                        width: '400px',
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
                            <a className="nav-link click-scroll" href="#hero_section">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#explore_section">Browse Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#timeline_section">How it works</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#faq_section">FAQs</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#contact_section">Contact</a>
                        </li>

                    </ul>

                    <div className="d-none d-lg-block">
                        <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
                    </div>

                    <div className="d-none d-lg-block">
                        <a href="https://chromewebstore.google.com/search/Truth%20Keeper" className="download_chrome_ex" target="_blank" rel="noopener noreferrer">
                            <img src={DonwloadChromeEx} alt="Download Chrome Extension" style={{ width: '230px', height: '70px', marginLeft: '50px' }} />
                        </a>
                    </div>


                </div>
            </div>
        </nav >
    )
}