'use client';
import React from 'react';



const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center', marginTop: '-200px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '400px' }}>
                {/* Social Media Links Section */}
                <div>
                    <h3>Follow Us</h3>
                    <br />
                    <hr />
                    <br />
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a></li>
                        <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>WhatsApp</a></li>
                        <li><a href="mailto:example@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>Gmail</a></li>
                    </ul>
                </div>

                {/* Freelance Links Section */}
                <div>
                    <h3>Freelance Platforms</h3>
                    <br />
                    <hr />
                    <br />  
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>GitHub</a></li>
                        <li><a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Fiverr</a></li>
                        <li><a href="https://upwork.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Upwork</a></li>
                    </ul>
                </div>

                {/* About Us Section */}
                <div>
                    <h3>About Us</h3>
                    <br />
                    <hr />
                    <br />
                    <p>Company Name: E-Commerce Inc.</p>
                    <p>Mobile: +123 456 7890</p>
                    <p>Email: support@ecommerce.com</p>
                    <p>Address: 123 E-Commerce St, Web City</p>
                </div>
            </div>
            <footer className="footer mt-10 py-6 bg-gray-800 text-white text-center">
                <p>&copy; 2025 E-commerce Website. All rights reserved.</p>
            </footer>
        </footer>
    );
};

export default Footer;