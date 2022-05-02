import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

// importing firestore

import { firestore } from "../firebase"
function Home() {
  // storing the posts fetched from firestore in useState
  const [posts, setPosts] = useState([])
  // the initial value of posts is an empty array since in the initial state , there will be no post


  /* calling fetch from firestore 
   where will we do it?
  as we had studied it will be done in Component did Mount and if changes take place we have to do it again in Component did Update
   in react hook we have to useEffect
   */
  // we are passing empty array so that it works as Component did Mount and does not make repeated calls to firebase to fetch data

  // agar nahi paas karte hai , toh repeatedly updates hote rahenge
  useEffect(() => {
    // using get method to fetch all posts
    firestore.collection('posts').get().then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id, // documents data does not have id so we have to grab it seperately as we have done over here
          ...doc.data()
        }

      });
      // checking if posts  are there
      console.log("console logging posts fetched from firebase", posts);

      // now setting the fetched posts in the setPosts so that we can see them in home
      setPosts(posts);

    });
  }, [])
  return (
    <div className="home">
      <h1>Tech-Blog</h1>
      <div id="blog-by">Yash</div>
      {/* looping over posts stored in state which are fetched from firestore/firebase */}

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
        
          {/* Adding a Link so that we can link each post to post detail */}
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;