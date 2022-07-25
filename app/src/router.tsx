import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import HomePage from "pages/Home";
import GameManage from "pages/GameManage";
import Register from "pages/Register";
import Profiles from "pages/Profiles";
import CreateEditProfile from "pages/CreateEditProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profiles" element={<Profiles/>}/>
      <Route path="/create/profile" element={<CreateEditProfile/>}/>
      <Route path="/edit/profile/:id" element={<CreateEditProfile/>}/>
      <Route path="/homepage/profile/:id" element={<HomePage />} />
      <Route path="/admin" element={<GameManage />} />
    </Routes>
  );
};

export default Router;
