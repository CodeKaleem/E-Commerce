'use client'
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../../Components/NavBar";
import Image1 from "../../Components/PImage";
import Footer from "../../Components/Footer";
import Product from "../../Components/Product";
import AboutUs from "@/app/Components/Aboutus";
import MoreProducts from "@/app/Components/MoreProducts";

const Products = () => {
    return (
        <div className="home-page">
                <NavBar></NavBar>
                <MoreProducts></MoreProducts>
                <Footer></Footer>
        </div>
    );
};

export default Products;