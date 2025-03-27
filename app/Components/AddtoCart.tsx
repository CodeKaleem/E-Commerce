import React from 'react';
import { useRouter } from 'next/router';

const AddToCart: React.FC = () => {
    const router = useRouter();

    const handleCartClick = () => {
        router.push('/pages/cart');
    };

    return (
        <div
            onClick={handleCartClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#27ae60',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <img
                src="https://www.shutterstock.com/image-vector/trolley-icon-vector-illustration-logo-600nw-1660611499.jpg"
                alt="Add to Cart"
                style={{ width: '40px', height: '40px', backgroundColor: 'white' }}
            />
        </div>
    );
};

export default AddToCart;