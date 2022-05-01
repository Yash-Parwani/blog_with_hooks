import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import {Navbar, Home, CreatePost ,PostDetail} from './index.js'
function App() {
  return (
    <Router>
      
      <div className="Container">
          <Navbar/>
          <h1>Starting with react web hook</h1>
          <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/post/:postId" element={<PostDetail/>} />
           <Route exact path="/create-post"  element={<CreatePost />}/>
           
         </Routes>
    </div>

    </Router>
    
  );
}

export default App;
