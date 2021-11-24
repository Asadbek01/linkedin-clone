import { useState, useEffect } from 'react'
import SinglePost from './SinglePost'
import SkeletonPost from './SkeletonPost'
import MyButton from './MyButton'

const HomeViewPost = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [randomNumber, setRandomNumber] = useState(0)

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts', {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setPosts(data)
                setRandomNumber(Math.floor(Math.random() * (data.length - 100)))
                setIsLoading(false)
                console.log(data)
            } else {    
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, [])

    return (
        <>
        {
            isLoading && 
            [1, 2, 3, 4].map(number => <SkeletonPost key={number}/> )
        }
        {
            posts &&
                posts.slice(posts.length - 25, posts.length).reverse().map(post => <SinglePost post={post} /> )
        }
        { posts && <div className="d-flex justify-content-center mt-3"><button className='button main-btn-outline' onClick={() => alert('works')} >Show More </button></div> }
        </>
    )
}

export default HomeViewPost