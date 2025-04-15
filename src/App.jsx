import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookMarked,setBookMarked]=useState([]);
  const[readingCount,setReadingCount]=useState(0);


  const handleBookMark=(blog)=>{
    setBookMarked([...bookMarked,blog]); 
  }

  const handleMarkAsRead=(time,id)=>{
    const newTime=readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookmark(id);
    
  }
  // console.log(readingCount);

  const handleRemoveFromBookmark=(id)=>{
    const remainingBookMark=bookMarked.filter((mark)=>mark.id!==id);
    setBookMarked(remainingBookMark);
    
  }
  
 

  return (
    <>
      
      <Navbar></Navbar>
      

      <div className="main-container flex text-center bg-gray-50">
        <div className="left-container w-[70%] mt-10">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] border-2 bg-gray-100 mt-10">
          <div className='border-b-2 p-2 font-semibold'>
            <h1>Reading Time: {readingCount} Minutes</h1>
            <h3>Bookmark Count: {bookMarked.length}</h3>
          </div>
          
                {
                  bookMarked.map((marked)=><p className='bg-gray-200 m-3 p-3 font-semibold shadow-2xl'>{marked.title}</p>)
                }
         
        </div>
      </div>
      
    </>
  )
}

export default App
