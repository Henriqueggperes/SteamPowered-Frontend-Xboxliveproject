import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import HomePage from "pages/Home";
import GameManage from "pages/GameManage";
import Register from "pages/Register";
import Profiles from "pages/Profiles";
import EditProfile from "pages/EditProfile";
import CreateProfile from "pages/CreateProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profiles" element={<Profiles/>}/>
      <Route path="/create/profile" element={<CreateProfile/>}/>
      <Route path="/edit/profile/:id" element={<EditProfile/>}/>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/admin" element={<GameManage />} />
    </Routes>
  );
};

export default Router;
