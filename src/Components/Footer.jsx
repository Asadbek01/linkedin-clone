import { Container } from 'react-bootstrap';
import React from 'react';
import {Footerr} from "./Asset/Footerr.css"




const Footer = () => {
    return (
        <>
            <Container className="profile_page footer_Big">
                <div className="d-none d-sm-inline footer_box_1">
                    <img height="25px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
                    <ui>
                        <li>About</li>
                        <li>Accessibility</li>
                        <li>Help Center</li>
                        <li>About</li>
                    </ui>
                    <p>LinkedIn Corporation © 2021</p>
                </div>

                <div className=" d-none d-md-inline footer_box_3">
                    <ui>
                        <li>Talent Solutions</li>
                        <li>Marketing Solutions</li>
                        <li>Advertising</li>
                        <li>Small Business</li>
                    </ui>
                </div>

         

            </Container>

        </>


    )
}

export default Footer