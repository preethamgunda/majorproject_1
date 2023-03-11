import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Ticket from "./components/Ticket/Ticket";
import BusPass from "./components/Bus Pass/BusPass";
import StudentPass from "./components/Bus Pass/Student/StudentPass";
import AddEditTour from "./pages/AddEditTour";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/bus-pass" element={<BusPass />} />
          <Route path="/employee_pass" element={<StudentPass />} />
          <Route path="/student_pass" element={<AddEditTour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
