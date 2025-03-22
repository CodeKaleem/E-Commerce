'use client'
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar/page";
import Image1 from "../Image1/page";
import Footer from "../Footer/page";
import Product from "../Product/page";

const Home = () => {
    return (
        <div className="home-page">
                <NavBar></NavBar>
                <Image1></Image1>
                <Product></Product>
                <Footer></Footer>
        </div>
    );
};

export default Home;