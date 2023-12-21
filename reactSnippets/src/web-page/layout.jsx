import React, { useState } from 'react'

const Layout = () => {
    const [isNav, setIsNav] = useState(false)


    return (
        <React.Fragment>
            <main>
                <div className="custom-container">
                    <div className="custom-card">
                        <h3 class="custom-font">Responsive Nav Bar</h3>
                        <nav class="nav">
                            <input type="checkbox" id="nav-check" />
                            <div class="nav-header">
                                <div class="nav-title">
                                    Logo
                                </div>
                            </div>
                            <ul class="nav-list desktopMenu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div class={`nav-list mobileMenu ${isNav && `menuActive`}`} >
                                <div class="innerMenuMobile">
                                    <button class="closeButton burger-toggle">
                                        x
                                    </button>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="burgerMenu burger-toggle" onClick={() => { setIsNav(!isNav) }}>
                                <label for="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>
                        </nav>

                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Layout