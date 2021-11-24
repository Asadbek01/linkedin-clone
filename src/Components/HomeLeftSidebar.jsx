import {Card} from 'react-bootstrap';
import Image from '../assets/Asadbek.png'
const HomeLeftSidebar = () => {
    return (
        <Card
        style={{ width: '17rem', height: '10rem', }}
            className="mb-1"
                          >
                   <Card.Header className='text-center'>
                   <img className='sidebar_img' src={Image} alt="jbdjkb" />
                   </Card.Header>
                   <Card.Body className=''>
                       <Card.Title className='text-center'> Asadbek Azamjonov </Card.Title>
                       <Card.Text className='text-secondary text-center'>
                       <p >Bachelor's degree at Akademia Finansów i Biznesu Vistula</p>
                       </Card.Text>
                   </Card.Body>
               </Card>
    )
}

export default HomeLeftSidebar