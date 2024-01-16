import React, { useState } from 'react'
import Header from '../components/header'
import Popup from '../components/popup'
import IsoMorphicEffect from '../components/isoMorphicEffect'
import CustomButton from '../components/customButton'
import Accordian from '../components/accordian'

const Layout = () => {

    return (
        <React.Fragment>
            <main>
                <div className="custom-container">
                    <div className="flexContainer">

                        <div className="custom-card">
                            <h3 className="custom-font">Responsive Nav Bar</h3>
                            <Header />
                        </div>
                        <div className="custom-card">
                            <h3 className="custom-font">Popup</h3>
                            <Popup />
                        </div>
                        <div className="custom-card">
                            <h3 className="custom-font">Button Component</h3>
                            <CustomButton label={'Component Button'}/>
                        </div>
                        <div className="custom-card">
                            <h3 className="custom-font">Accordian</h3>
                            <Accordian/>
                        </div>
                        <div className="custom-card">
                            <h3 className="custom-font">Iso Morphic UseEffect</h3>
                            <IsoMorphicEffect />
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Layout
