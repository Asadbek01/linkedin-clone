import {React} from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {Button} from  'react-bootstrap'

export default function HomeSideBarFooter() {
    const date = new Date().getFullYear();
    
    return (
        <>
    
        <section className="feedpagefooter">
            <div className="px-4">
                <Button variant="link">About</Button>
                <Button variant="link">Accessibility</Button>
 
               <Button variant="link">Help Center</Button>
                <Button variant="link">Privacy &amp; Terms</Button>
                <Button variant="link">Ad Choices</Button>
                <Button variant="link">Advertising</Button>
                <Button variant="link">Business Services</Button>
                <Button variant="link">Get the LinkedIn app</Button>
                <Button variant="link">More</Button>
            </div>
            <div className="pt-3">
                <div  className="logo" > Linked <BsLinkedin/> </div>
                <Button variant="link" className="corp">Linked Corporation © {date}</Button>
            </div>
        </section>


        </>
    )
}
