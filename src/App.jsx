import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BlogEnglish from "./pages/BlogEnglish"
import BlogDev from "./pages/BlogDev"
import BlogPost from "./pages/BlogPost"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-english" element={<BlogEnglish />} />
          <Route path="/blog-dev" element={<BlogDev />} />
          <Route path="/blog/post" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App