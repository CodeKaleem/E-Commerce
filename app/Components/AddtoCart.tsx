import React from 'react';
import { useRouter } from 'next/router';

const AddToCart: React.FC = () => {
    const router = useRouter();

    const handleCartClick = () => {
        router.push('/cart'); // Redirect to the cart page
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
                color: '#fff',
                fontSize: '1rem',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <img
                src="https://www.shutterstock.com/shutterstock/videos/1100304697/thumb/12.jpg?ip=x480"
                alt="Add to Cart"
                style={{ width: '40px', height: '40px', backgroundColor: 'white' }}
            />
        </div>
    );
};

export default AddToCart;