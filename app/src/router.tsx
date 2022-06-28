import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import HomePage from "pages/Home";

const Router = () => {
  return (
  
    <Routes>
      <Route path="/homepage" element={<HomePage/>}/>
    </Routes>
    
  )
}

export default Router