import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
import { parseISO, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths  } from "date-fns"
import { BiWorld } from "react-icons/bi";
import { useState } from 'react'

const SinglePost = ({ post, handleEdit }) => {

    const diffInM = differenceInMinutes(new Date(), parseISO(post.createdAt))
    const diffInH = differenceInHours(new Date(), parseISO(post.createdAt))
    const diffInD = differenceInDays(new Date(), parseISO(post.createdAt))
    const diffInW = differenceInWeeks(new Date(), parseISO(post.createdAt))
    const diffInMo = differenceInMonths(new Date(), parseISO(post.createdAt))
    const [liked, setLiked] = useState(false)

    return (
        <div className="profile-sub-section p-2 my-2">
            <Row className='pl-3 mb-2 justify-content-between mr-3 mt-2'>
                <div className="d-flex w-75">
                    <img src={post.user.image} className='profile-image-posts' alt="" />
                    <div className="d-flex flex-column w-75 ml-2">
                        <Link to={`/profile/${post.user._id}`} className='text-dark'><h6 className='mb-0'>{post.user.name} {post.user.surname} &#8226; <span className='text-muted font-weight-normal'>Following</span></h6></Link>
                        <p className='text-muted reduced-text mb-0'>{post.user.bio}</p>
                        <p className='text-muted mb-0'>{diffInM < 60 ? diffInM + 'm' : diffInH < 24 ? diffInH + 'h' : diffInD < 7 ? diffInD + 'd' : diffInW  < 4 ? diffInW + 'w' : diffInMo + 'mo'} &#8226; <BiWorld /></p>
                    </div>
                </div>
                <i className='bi bi-three-dots' onClick={() => handleEdit(post._id)}></i>
            </Row>
            <p className='pl-2 mt-2 mb-2'>{post.text}</p>
            { post.image &&  <img src={post.image} className='w-100'/> }
            <hr className='my-1' />
            <Row className='text-muted post-actions justify-content-center'>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded' onClick={() => setLiked(!liked)}>
                    <i className={liked ? 'bi bi-hand-thumbs-up-fill text-primary' : 'bi bi-hand-thumbs-up'}></i>
                    <p className={liked ? 'mb-0 ml-2 text-primary' : 'mb-0 ml-2'}>{liked ? 'Liked' : 'Like'}</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-chat-right-text'></i>
                    <p className='mb-0 ml-2'>Comment</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-arrow-90deg-right'></i>
                    <p className='mb-0 ml-2'>Share</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-send'></i>
                    <p className='mb-0 ml-2'>Send</p>
                </Col>
            </Row>

        </div>
    )
}

export default SinglePost