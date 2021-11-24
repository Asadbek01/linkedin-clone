import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Container,
  Dropdown
} from "react-bootstrap";
import { BsPlayBtnFill } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { useState, setState } from "react";

const HomeCreatePost = () => {
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState("");
  


  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);


const addPostFunction = async (e) =>{
    e.preventDefault()
try {  const res = await fetch(
    `https://striveschool-api.herokuapp.com/api/posts`,
    {
      method: "POST",
      body: JSON.stringify({
          "text":post
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_TOKEN,
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    // setPost(data);
    
  } else {
    console.error("fetch failed");
  }
} catch (error) {
  console.error(error);
}

}

  return (
    <Container>
      <Row className="profile-sub-section">
        <Col>
          <Card className="mb-3 profile-cards">
            <div className="d-flex justify-space-between align-items-center">
              <Card.Img
                src="https://via.placeholder.com/150"
                className="sidebar-profile-images ml-2"
              />
              <Card.Body className="p-2">
                <div className="d-flex justify-content-between">
                  <Button
                    onClick={showAddPost}
                    className="button second-btn-outline"
                  >
                    Start a post
                  </Button>
                 
                </div>

                <Card.Text className="text-muted">
                  <AiOutlinePicture
                    style={{
                      marginRight: "15",
                      color: "#70b5f9",
                      fontWeight: "bold",
                      fontSize: "25",
                    }}
                  />
                  <BsPlayBtnFill
                    style={{
                      marginRight: "15",
                      color: "#7fc15e",
                      fontWeight: "bold",
                      fontSize: "25",
                    }}
                  />
                  <BsCalendar2Date
                    style={{
                      marginRight: "15",
                      color: "#e7a33e",
                      fontWeight: "bold",
                      fontSize: "20",
                    }}
                  />
                  <RiArticleLine
                    style={{
                      marginRight: "15",
                      color: "#fc9295",
                      fontWeight: "bold",
                      fontSize: "23",
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </div>
          </Card>{" "}
        </Col>
      </Row>
      <Modal show={addPost} onHide={closeAddPost}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addPostFunction}>
   

            <Form.Group >
              <div className="d-flex justify-content-lg-start mb-4">
                <div style={{ marginRight: "5%" }}>
                  <img
                    src="https://via.placeholder.com/150"
                    className="sidebar-profile-images ml-2"
                    alt="profile image"
                  />
                </div>
                <div>
                  <h5>profile name</h5>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Anyone</Dropdown.Item>
                      <Dropdown.Item href="#">Anyone + Twitter</Dropdown.Item>
                      <Dropdown.Item href="#">Connections only</Dropdown.Item>
                      <Dropdown.Item href="#">Group members</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <Form.Control
                type="text"
                placeholder="What do you want to talk about?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HomeCreatePost;
