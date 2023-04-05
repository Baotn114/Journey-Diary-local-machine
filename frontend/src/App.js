import React from "react";
import Navbar from "./components/NavigationBar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import PostDetails from "./components/PostDetails";
import User from "./pages/User";
import PostCreate from "./pages/PostCreate";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const {user} = useAuthContext();

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={<Posts />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/details/:id" element={<PostDetails />} />
          {user && <Route path="/user" element={<User />} />}
          {user && <Route path="/creation" element={<PostCreate />} />}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
