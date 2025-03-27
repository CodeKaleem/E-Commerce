'use client'
import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import ContactPage from "@/app/Components/Contactus";

const Contact = () => {
    return (
        <div className="home-page">
                <NavBar></NavBar>
                <ContactPage></ContactPage>
                <Footer></Footer>
        </div>
    );
};

export default Contact;