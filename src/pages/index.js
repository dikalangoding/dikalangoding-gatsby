import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import Navbar from '../components/Navbar'

export default () => (
    <>
        <Navbar /> 
        <section id="showcase" className="py-5">
            <div className="primary-overlay text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="display-2 mt-5 pt-5">
                                Coming Soon
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
