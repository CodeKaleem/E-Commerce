'use client';
import React, { use } from "react";

const CartPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Your Cart</h1>
            <div style={styles.cartItemsContainer}>
                {/* Example Cart Item */}
                <div style={styles.cartItem}>
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Product"
                        style={styles.productImage}
                    />
                    <div style={styles.productDetails}>
                        <h2 style={styles.productName}>Product Name</h2>
                        <p style={styles.productPrice}>$99.99</p>
                    </div>
                    <div style={styles.quantityContainer}>
                        <button style={styles.quantityButton}>-</button>
                        <span style={styles.quantity}>1</span>
                        <button style={styles.quantityButton}>+</button>
                    </div>
                    <button style={styles.removeButton}>Remove</button>
                </div>
                {/* Add more cart items here */}
            </div>
            <div style={styles.summaryContainer}>
                <h2 style={styles.summaryHeader}>Order Summary</h2>
                <div style={styles.summaryRow}>
                    <span>Subtotal:</span>
                    <span>$99.99</span>
                </div>
                <div style={styles.summaryRow}>
                    <span>Tax:</span>
                    <span>$5.00</span>
                </div>
                <div style={styles.summaryRow}>
                    <span>Total:</span>
                    <span>$104.99</span>
                </div>
                <button style={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
    },
    header: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#333",
    },
    cartItemsContainer: {
        width: "80%",
        maxWidth: "800px",
        marginBottom: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        boxSizing: "border-box",
    },
    cartItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "15px",
        borderBottom: "1px solid #ddd",
        paddingBottom: "10px",
    },
    productImage: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    productDetails: {
        flex: 1,
        marginLeft: "20px",
    },
    productName: {
        fontSize: "1.2rem",
        marginBottom: "5px",
        color: "#333",
    },
    productPrice: {
        fontSize: "1rem",
        color: "#666",
    },
    quantityContainer: {
        display: "flex",
        alignItems: "center",
    },
    quantityButton: {
        padding: "5px 10px",
        fontSize: "1rem",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "4px",
    },
    quantity: {
        margin: "0 10px",
        fontSize: "1rem",
    },
    removeButton: {
        padding: "5px 10px",
        fontSize: "0.9rem",
        color: "#fff",
        backgroundColor: "#e74c3c",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    summaryContainer: {
        width: "80%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        boxSizing: "border-box",
    },
    summaryHeader: {
        fontSize: "1.5rem",
        marginBottom: "15px",
        color: "#333",
    },
    summaryRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        fontSize: "1rem",
        color: "#666",
    },
    checkoutButton: {
        width: "100%",
        padding: "10px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#27ae60",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default CartPage;