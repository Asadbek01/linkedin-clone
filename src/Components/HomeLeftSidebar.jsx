import { Card, ListGroup, List } from 'react-bootstrap';
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { useState } from 'react'
const HomeLeftSidebar = ({ data }) => {
  const [show, setShow] = useState(false)

  return (
    <>

      <Card>
        <Card.Header className='text-center' style={{ height: '3rem', }}>
          <img className='profile-image-posts' src={data?.image} alt="" />
        </Card.Header>
        <Card.Title className='text-center mt-5'>{data?.name} {data?.surname}</Card.Title>
        <Card.Text className='text-secondary text-center'>
          <p >Bachelor's degree at Akademia Finansów i Biznesu Vistula</p>
        </Card.Text>
        <ListGroup>

          <div classNamed='d-flex'>
            <p className='pl-3 pt-1 mt-2 text_muted'>Who viewed your profile</p>
            <p className='num_prof'>154</p>
          </div>
          <div classNamed='d-flex'>
            <p className='pl-3 pt-1 text_muted '>View of your post</p></div>
          <p className='num_post'>140</p>
        </ListGroup>
        <ListGroup variant="flush">
          <div classNamed='d-flex'>

            <p className='pl-3 pt-1 mt-2  text_muted'>Access exclusive tools & insights</p>
            <p className='pl-5 pt-1  text-dark'>Try Premium for free</p></div>
        </ListGroup>
        <ListGroup variant='flush'>
          <div className='d-flex'><BsBookmarkFill className='saved' /> <p className='pl-2'> My items</p></div>
        </ListGroup>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>Recent</Card.Title>
          <ListGroup>

            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>Intership Japan</p> </div>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>React Developer-ReactJS...</p></div>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>Angular, React, Vue, Node, I...</p></div>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>UI/UX User Experience Inter...</p></div>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>iOS Developer Group</p></div>
          </ListGroup>
          <Card.Title>Groups</Card.Title>
          <ListGroup>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>Intership Japan</p></div>
            <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>React Developer-ReactJS...</p></div>
            <div className='d-flex'><BsPeopleFill /> <p className='text_muted pl-2'>Angular, React, Vue, Node, I...</p></div>
          </ListGroup>

          {!show && (
            <p className=" text-center"> <button className="outline button Showmore" type="button" onClick={() => setShow(true)}>
              Show More
              <i class="bi bi-caret-down "></i>
            </button>
            </p>
          )}

          {show && (
            <>
              <ListGroup>
                <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>Intership Japan</p></div>
                <div className='d-flex'><BsPeopleFill /><p className='text_muted pl-2'>React Developer-ReactJS...</p></div>
                <div className='d-flex'><BsPeopleFill /> <p className='text_muted pl-2'>Angular, React, Vue, Node, I...</p></div>
              </ListGroup>
              <p className=" text-center">

                <button
                  className="outline button Showless"
                  type="button"
                  onClick={() => setShow(false)}
                >
                  Show Less <i class="bi bi-caret-up"></i>
                </button>
              </p>
            </>
          )}
          <div>
            <a href="" >Events</a> <br />
            <a href="">Followed Hashtags</a>
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
