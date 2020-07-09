import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
function ViewPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const data1 = await fetch('http://localhost:9000/testAPI')
        const Items = await data1.json()
         console.log(Items)
        setPosts(Items)
    }


    return (
        <div className="PostsStyle">
 {/* <userContext.Consumer>
{(value)=>{<Post user={value} />}}
    </userContext.Consumer> */}

            {posts.map(post => (
                <h1 key={post.id}>
                    <Link to={`viewposts/${post.id}`}>
                        {post.Title}
                    </Link>

                </h1>
              

            ))}
         
        </div>
    )

}
export default ViewPosts