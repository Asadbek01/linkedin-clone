import { Row, Col } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { BiWorld } from "react-icons/bi"
import { parseISO, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths  } from "date-fns"

const SingleSearchResult = ({ data, type }) => {

    const navigate = useNavigate()
    const diffInM = differenceInMinutes(new Date(), parseISO(data.createdAt))
    const diffInH = differenceInHours(new Date(), parseISO(data.createdAt))
    const diffInD = differenceInDays(new Date(), parseISO(data.createdAt))
    const diffInW = differenceInWeeks(new Date(), parseISO(data.createdAt))
    const diffInMo = differenceInMonths(new Date(), parseISO(data.createdAt))

    return (
        <Row className='single-list-item my-1 py-3'>
            <Col xs='1'>
                <img src={type === 'profile' ? data.image : data.user.image} className='profile-image-posts' alt="" />
            </Col>
            <Col xs='9'>
                <Link to={`/profile/${data._id}`} className='text-dark'><h6 className='mb-0'>{type === 'profile' ? data.name : data.user.name} {type === 'profile' ? data.surname : data.user.surname} &#8226; <span className='text-muted font-weight-normal'>Following</span></h6></Link>
                <p className='reduced-text mb-0'>{type === 'profile' ? data.bio : data.user.bio}</p>
                { type === 'profile' ? 
                    <p className='text-muted reduced-text mb-0'>{data.area}</p> : 
                    <p className='text-muted reduced-text mb-0'>{diffInM < 60 ? diffInM + 'm' : diffInH < 24 ? diffInH + 'h' : diffInD < 7 ? diffInD + 'd' : diffInW  < 4 ? diffInW + 'w' : diffInMo + 'mo'} &#8226; <BiWorld /></p>
                }
            </Col>
            <Col xs='2'>
                <button onClick={() => 
                    type === 'profile' ? navigate(`/profile/${data._id}`) : navigate(`/post/${data._id}`)
                } className='button main-btn-outline mt-3 ml-2'>{ type === 'profile' ? 'Connect' : 'View Post' }</button>
            </Col>
            { type === 'posts' &&
                <Col xs='12' className='mt-3 ml-2'>
                    { data.text}
                </Col>
            }
        </Row>
    )
}

export default SingleSearchResult