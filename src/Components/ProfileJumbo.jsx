import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import { useLocation, Link } from "react-router-dom"
import MyButton from "./MyButton"
import { BsLinkedin } from "react-icons/bs"
import Form from "react-bootstrap/Form"

const ProfileJumbo = ({ data, handleShowModal, setDetailsChanged }) => {
  const location = useLocation()
  const path = location.pathname

  const [contactModal, setContactModal] = useState(false)
  const closeContactModal = () => setContactModal(false)
  const showContactModal = () => setContactModal(true)

  const [imageModal, setImageModal] = useState(false)
  const closeImageModal = () => setImageModal(false)
  const showImageModal = () => setImageModal(true)

  const [profileImage, setProfileImage] = useState(null)

  const updateProfilePic = async () => {
    const formData = new FormData()
    formData.append("profile", profileImage)
    console.log(formData)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (response.ok) {
        setDetailsChanged(count => count + 1)
      } else {
        console.error("something went wrong")
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (profileImage !== null) {
      updateProfilePic()
      closeImageModal()
    }
  }, [profileImage])

  return (
    <>
      {data && (
        <div className="profile-jumbo">
          <div className="d-flex justify-content-between">
            <img
              src={data.image}
              alt=""
              className="profile-image ml-4 mt-5"
              onClick={path === '/profile' && showImageModal }
            />
            <i className="bi bi-camera-fill bg-white mr-3 mt-4 pl-1"></i>
          </div>
          <div className="myDetails">
            <Row className="px-4 mt-2 pt-5 details-row">
              <Col xs="11" className="pb-3">
                <h3 className="mb-1">
                  {data.name} {data.surname}
                </h3>
                <p className="mb-1 reduced-text">{data.bio}</p>
                <p className="text-muted mb-1">
                  {data.area} &#8226;{" "}
                  <span className="text-link" onClick={showContactModal}>
                    Contact Info
                  </span>{" "}
                </p>
                <p className="text-link mb-2">500+ connections</p>
                { path === '/' ? (
                  <>
                    <MyButton type="button main-btn mr-2" text="Open to" />
                    <MyButton type="button second-btn-outline mr-2" text="Add Section" />
                    <MyButton type="button second-btn-outline mr-2" text="More" />
                  </>
                ) : <MyButton type="button main-btn-outline mr-2" text="Follow" />
              }
              </Col>
              { path === '/profile' && <i className="bi bi-pencil p-2" onClick={handleShowModal}></i> }
            </Row>
          </div>
          <Modal show={contactModal} onHide={closeContactModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {data.name} {data.surname}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="my-2">
                <Col xs="1">
                  <BsLinkedin size="25px" />
                </Col>
                <Col xs="11">
                  <h5>Your Profile</h5>
                  <Link to="/profile">localhost:3000/profile</Link>
                </Col>
              </Row>
              <Row className="my-2">
                <Col xs="1">
                  <BsLinkedin size="25px" />
                </Col>
                <Col xs="11">
                  <h5>Email</h5>
                  <Link to="/profile">{data.email}</Link>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>

          <Modal show={imageModal} onHide={closeImageModal}>
            <Modal.Header closeButton>
              <Modal.Title>Profile Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <img src={data.image} className="modalImage" alt="" />
            </Modal.Body>
            <Modal.Footer>
              <Form>
                <Form.Group className="mb-3 text-center">
                  <Form.Label>Profile Picture
                  <Form.Control
                    type="file"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    style={ { display: 'none' } }
                  />
                  </Form.Label>
                </Form.Group>
              </Form>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}

export default ProfileJumbo
