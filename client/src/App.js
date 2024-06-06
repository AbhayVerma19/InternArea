import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/auth/Register";
import Intern from "./Components/Internships/Intern";
import JobAvl from "./Components/Job/JobAvl";
import JobDetail from "./Components/Job/JobDetail";
import InternDeatil from "./Components/Internships/InternDetail";
import Profile from "./profile/Profile";
import AdminLogin from "./Admin/AdminLogin";
import Adminpanel from "./Admin/Adminpanel";
import ViewAllApplication from "./Admin/ViewAllApplication";
import Postinternships from "./Admin/Postinternships";
import PostJOb from "./Admin/PostJob";
import { useSelector, useDispatch } from "react-redux";
import { selectuser, login, logout } from "./feature/UserSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import DetailApplication from "./Applications/DetailApplication";

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            name: authUser.displayName,
            email: authUser.email,
            phoneNumber: authUser.phoneNumber,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/internship" element={<Intern />} />
        <Route path="/Jobs" element={<JobAvl />} />
        <Route path="/detailJob" element={<JobDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailInternship" element={<InternDeatil />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/postInternship" element={<Postinternships />} />
        <Route path="/postJob" element={<PostJOb />} />
        <Route path="/applications" element={<ViewAllApplication />} />
        <Route path="/detailApplication" element={<DetailApplication />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
