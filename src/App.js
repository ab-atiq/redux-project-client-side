import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SingUp/SignUp";
import PrivetRoute from "./Component/Login/PrivetRoute/PrivetRoute";
import About from "./Component/About/About";

import Product from "./Component/Product/Product";
import Booking from "./Component/Booking/Booking/Booking";
import AddService from "./Component/AddService/AddService";
import Payment from "./Component/Payment/Payment";
import ManageOrder from "./Component/ManageOrder/ManageOrder";
import NotFound from "./Component/NotFound/NotFound";
import Review from "./Component/Review/Review";
import Admin from "./Component/Admin/Admin";
import AdminRoute from "./Component/Login/AdminRoute/AdminRoute";
import ContactUs from "./Component/ContactUs/ContactUs";


function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/booking/:BookingId" element={<PrivetRoute><Booking /></PrivetRoute>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactUs></ContactUs>} />
            <Route path="/addService" element={<AdminRoute> <AddService /> </AdminRoute>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/manage" element={<ManageOrder />} />
            <Route path="/review" element={<Review />} />
            <Route path="/admin" element={<AdminRoute> <Admin /> </AdminRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route path="invoices" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
