import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"
function Post({ match }) {
    const id = match.params.id
    const [post, setPost] = useState([])
    //  console.log({ match })
    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        const data1 = await fetch('http://localhost:9000/testAPI')
        const Items = await data1.json()
        console.log(Items)
        setPost(Items[id - 1])
    }
    return (

        <div>
            <h1 className="PostsStyle">{post.Title} 
            </h1> <Link to={`/viewposts/${id}/editpost`}>
                <button>Edit Post</button>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: post.Description}}></div>
          {/* <h2>{post.Description}</h2> */}
            

        </div>
    )


}
export default Post