import Card from 'react-bootstrap/Card'
import MyButton from './MyButton'
import { Link } from 'react-router-dom'

const SidebarProfiles = ({ _id, image, name, surname, title}) => {
    return (
      <Link to={`/profile/${_id}`}>
        <Card key={_id} className='mb-3 profile-cards' >
            <div className="d-flex align-items-center">
              <Card.Img src={image} className='sidebar-profile-images ml-2' />
              <Card.Body className='p-2'>
                <Card.Title className='mb-1 text-dark'>{name} {surname}</Card.Title>
                <Card.Text className='text-muted'>{title} </Card.Text>
              </Card.Body>
            </div>
            <MyButton type='button second-btn-outline' text='Connect'/>
          </Card>
        </Link>
    )
}

export default SidebarProfiles