import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Container,
  OverlayTrigger, Tooltip
} from "react-bootstrap";
import { BsPlayBtnFill } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { useState, setState } from "react";
import { BiWorld } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHistogram } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";


const HomeCreatePost = () => {
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState("");
  const [selectedFile, setSelectedFile] = useState(null)
  const [show, setShow] = useState(true)

  const showAddPost = () => setAddPost(true);
  const closeAddPost = () => setAddPost(false);

const onFileChange = (e)=>{
    console.log(e)
    setSelectedFile(e.target.files[0])}



  const addPostFunction = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts`,
        {
          method: "POST",
          body: JSON.stringify({
            text: post,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        if(selectedFile !==null){
            addImage(data._id)
        }
        // setPost(data);
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };


const addImage = async (id)=>{
   
     let fd = new FormData();
     fd.append("post", selectedFile);
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "POST",
          body: fd,
          headers: {
          Authorization: process.env.REACT_APP_TOKEN,
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
      <Row className="profile-sub-section pt-3 ">
        <Col xs={2}>
          <Card.Img
            src="https://via.placeholder.com/150"
            className="sidebar-profile-images ml-2"
          />
        </Col>
        <Col xs={10}>
          <div className="d-flex justify-content-between">
            <Button
              onClick={showAddPost}
              className="button second-btn-outline"
              style={{
                marginTop: "10px",
                paddingLeft: "10px",
                paddingRight: "270px",
                paddingTop: "10px",
                paddingBottom: "10px",
                textAlign: "left",
              }}
            >
              Start a post
            </Button>
          </div>
        </Col>

        <Col>
          <Card className="mb-1 mt-2 profile-cards">
            <Card.Body>
              <Card.Text className="text-muted mt-2">
                <div className="d-flex mt-2">
                  <div className="d-flex mr-4">
                    <AiOutlinePicture
                      style={{
                        marginRight: "15",
                        color: "#70b5f9",
                        fontWeight: "bold",
                        fontSize: "25",
                      }}
                    />
                    <p>Photo</p>
                  </div>
                  <div className="d-flex mr-4">
                    <BsPlayBtnFill
                      style={{
                        marginRight: "15",
                        color: "#7fc15e",
                        fontWeight: "bold",
                        fontSize: "25",
                      }}
                    />
                    <p>Video</p>
                  </div>
                  <div className="d-flex mr-4">
                    <BsCalendar2Date
                      style={{
                        marginRight: "15",
                        color: "#e7a33e",
                        fontWeight: "bold",
                        fontSize: "20",
                      }}
                    />
                    <p>Event</p>
                  </div>
                  <div className="d-flex mr-4">
                    <RiArticleLine
                      style={{
                        marginRight: "15",
                        color: "#fc9295",
                        fontWeight: "bold",
                        fontSize: "23",
                      }}
                    />
                    <p>Write article</p>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={addPost} onHide={closeAddPost}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addPostFunction}>
            <Form.Group>
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
                  <Button
                    variant="success"
                    type="submit"
                    className="button second-btn-outline"
                  >
                    <BiWorld className="mr-2" />
                    Anyone
                    <IoMdArrowDropdown className="mr-2" />
                  </Button>
                </div>
              </div>
              <Form.Control
                as="textarea"
                placeholder="What do you want to talk about?"
                value={post}
                style={{ height: "200px" }}
                onChange={(e) => setPost(e.target.value)}
              />
            </Form.Group>

            {!show && (
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            )}
            {show && (
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-${"top"}`}>add a picture</Tooltip>
                }
              >
                <Button variant="light" style={{ padding: "0" }}>
                  <AiOutlinePicture
                    onClick={(e) => {
                      setShow(!show);
                      console.log(show);
                    }}
                    style={{
                      marginRight: "15",
                      color: "gray",
                      fontWeight: "bold",
                      fontSize: "20",
                    }}
                  />
                </Button>
              </OverlayTrigger>
            )}

            <OverlayTrigger
              key={"top"}
              placement={"top"}
              overlay={<Tooltip id={`tooltip-${"top"}`}>add a video</Tooltip>}
            >
              <Button variant="light" style={{ padding: "0" }}>
                <BsPlayBtnFill
                  style={{
                    marginRight: "15",
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: "20",
                  }}
                />
              </Button>
            </OverlayTrigger>

            <IoDocumentText
              style={{
                marginRight: "15",
                color: "gray",
                fontWeight: "bold",
                fontSize: "20",
              }}
            />
            <MdWork
              style={{
                marginRight: "15",
                color: "gray",
                fontWeight: "bold",
                fontSize: "20",
              }}
            />

            <HiBadgeCheck
              style={{
                marginRight: "15",
                color: "gray",
                fontWeight: "bold",
                fontSize: "20",
              }}
            />
            <GiHistogram
              style={{
                marginRight: "15",
                color: "gray",
                fontWeight: "bold",
                fontSize: "20",
              }}
            />
            <BsThreeDots
              style={{
                marginRight: "15",
                color: "gray",
                fontWeight: "bold",
                fontSize: "20",
              }}
            />

            <Button
              variant="success"
              type="submit"
              className="button second-btn-outline"
              style={{ fontSize: "12px", marginRight: "25px" }}
            >
              <BsChatTextFill className="mr-2" />
              Anyone
            </Button>

            <Button
              variant="success"
              type="submit"
              className="button second-btn-outline"
              onClick={addPostFunction}
            >
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HomeCreatePost;
