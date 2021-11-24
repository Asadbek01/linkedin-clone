import { Card, ListGroup, List } from "react-bootstrap"
import Image from "../assets/Asadbek.png"
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs"
const HomeLeftSidebar = () => {
    return (
        <>
       
               <Card style={{ width: '20rem' }}>
              <Card.Header  className='text-center'  style={{height: '4rem', }}>
                   <img className='sidebar-image' src={Image} alt="jbdjkb" />
                   </Card.Header>
                   <Card.Title className='text-center mt-5'> Asadbek Azamjonov </Card.Title>
                   <Card.Text className='text-secondary text-center'>
                       <p >Bachelor's degree at Akademia Finansów i Biznesu Vistula</p>
                       </Card.Text>
               <ListGroup variant="flush" className='d-flex'>
                   
                <div classNamed ='d-flex'>
                <p className='pl-3 pt-1 mt-2 text_muted'>Who viewed your profile</p>
                <p className='num_prof'>18</p>
                </div>
                <div classNamed ='d-flex'>
               <p className='pl-3 pt-1 text_muted '>View of your post</p></div>
               <p className='num_post'>30</p>
               </ListGroup>
               <ListGroup variant="flush">
               <div classNamed ='d-flex'>
   
                 <p className='pl-3 pt-1 mt-2  text_muted'>Access exclusive tools & insights</p>
                 <p className='pl-5 pt-1  text-dark'>Try Premium for free</p></div>
               </ListGroup>
               <ListGroup variant='flush'>
               <div className='d-flex'><BsBookmarkFill className='saved'/> <p className='pl-2'> My items</p></div>
               </ListGroup>
             </Card>
          <Card  className="mt-2"style={{ width: '20rem', }}>
          <Card.Body>
            <Card.Title>Recent</Card.Title>
<ListGroup>

 <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>Intership Japan</p> </div>
 <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>React Developer-ReactJS...</p></div>
 <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>Angular, React, Vue, Node, I...</p></div>
 <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>UI/UX User Experience Inter...</p></div>
 <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>iOS Developer Group</p></div>
   {/* </div> */}
    </ListGroup>  
    <Card.Title>Groups</Card.Title>
    <ListGroup>
    <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>Intership Japan</p></div>
    <div className='d-flex'><BsPeopleFill/><p className='text_muted pl-2'>React Developer-ReactJS...</p></div>
    <div className='d-flex'><BsPeopleFill/> <p className='text_muted pl-2'>Angular, React, Vue, Node, I...</p></div>
    </ListGroup>
    <div>
    <a href="" >Events</a> <br />
    <a  href="">Followed Hashtags</a>
    </div>
   
      
          </Card.Body>
    <ListGroup variant='flush'>
     <p className='m-auto p-2' >Discover more</p>
     <div>
       <p className='plus'>+</p>
     </div>
    </ListGroup>
        </Card> 
          </>  
          
        
    )
}

export default HomeLeftSidebar
