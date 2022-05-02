import {useState} from 'react'
import {firestore} from '../firebase'

import {useFormInput} from '../components/hooks';



function CreatePost() {
    // using hooks so that we can manipulate what user is typing easily
    // const [title,setTitle] = useFormInput(""); this cant be used since useFormInput returns an object instead of an array that useState or any basic hook does
    
    const title = useFormInput("");
    const content= useFormInput("");
    const subTitle = useFormInput("");



   function handleSubmit  (event){
        // first we will prevent default submit so that page does not perform a reload
        event.preventDefault();
        
        
        
        
        // checking if on submitiing we get everything as we wanted
        console.log("recieved the following data");
        console.log("title",title);
        console.log("Subtitle",subTitle);
        console.log("content",content);


        // submitting to the firebase . even if posts as a collection doesnt exist , it will create a collection called post and then add the data
        firestore.collection('posts').add({
            title: title.value,
            subtitle: subTitle.value,
            content : content.value,
            createdAt : new Date()
        });
                  
        

        
        }
        
    return (
      <div className="create-post">
           <h1>Create Post</h1>
           <form onSubmit={handleSubmit}>
               <div className="form-field">
                   <label>Title</label>
                   {/* <input value={title} onChange={(event) =>{
                       setTitle(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}/> 
                   
                the above is replaced since with the help of custom hook we can do the same thing with the help of spread operator
                
                more explaination in book*/}
                <input {...title} />
                {/* {...title} works as value={title} onChange={(event) =>{
                       setTitle(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}
                   
                   since we have set the custom hook in that way
                   
                   */}


               </div>
               <div className="form-field">
                   <label>Sub Title</label>
                   {/* <input value={subTitle} onChange={(event) =>{
                       setSubTitle(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}/> */}
                   <input {...subTitle} />
               </div>
               <div className="form-field">
                   <label>Content</label>
                   {/* Using text area since content will be over  a large area */}
                   {/* <textarea value={content} onChange={(event) =>{
                       setContent(event.target.value);
                    //    event.target.value is anything that user types in in the text area
                   }}></textarea> */}
                   <textarea {...content} />
               </div>
               <button className="create-post-btn">Create Post</button>
           </form>
      </div>
    );
  }
  
  export default CreatePost;