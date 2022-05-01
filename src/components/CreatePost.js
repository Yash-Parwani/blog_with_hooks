import {useState} from 'react'
import {firestore} from '..firebase/'



function CreatePost() {
    // using hooks so that we can manipulate what user is typing easily
    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const [subTitle,setSubTitle] = useState();



   function handleSubmit  (event){
        // first we will prevent default submit so that page does not perform a reload
        event.preventDefault();
        
        
        
        
        // checking if on submitiing we get everything as we wanted
        console.log("title",title);
        console.log("Subtitle",subTitle);
        console.log("content",content);


        // submitting to the firebase . even if posts as a collection doesnt exist , it will create a collection called post and then add the data
        firebase.collection('posts').add({
            title,
            subTitle,
            content,
            createdAt : new Date()
        });
                  
        

        
        }
        
    return (
      <div className="CreatePost">
           <h1>Create Post</h1>
           <form onSubmit={handleSubmit}>
               <div className="form-field">
                   <label>Title</label>
                   <input value={title} onChange={(event) =>{
                       setTitle(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}/>
               </div>
               <div className="form-field">
                   <label>Sub Title</label>
                   <input value={subTitle} onChange={(event) =>{
                       setSubTitle(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}/>
               </div>
               <div className="form-field">
                   <label>Content</label>
                   {/* Using text area since content will be over  a large area */}
                   <textarea value={content} onChange={(event) =>{
                       setContent(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}></textarea>
               </div>
               <button className="create-post-btn">Create Post</button>
           </form>
      </div>
    );
  }
  
  export default CreatePost;