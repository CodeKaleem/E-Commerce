'use client'
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../Components/NavBar";
import Image1 from "../../Components/PImage";
import Footer from "../../Components/Footer";
import Product from "../Product/page";
import AboutUs from "@/app/Components/Aboutus";

const Home = () => {
    return (
        <div className="home-page">
                <NavBar></NavBar>
                <Image1></Image1>
                <Product></Product>
                <AboutUs></AboutUs>
                <Footer></Footer>
        </div>
    );
};

export default Home;