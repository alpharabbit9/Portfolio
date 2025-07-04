import React from 'react';
import ShinyText from '../../components/ui/ShinyText';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center text-center text-cyan-400  text-base-content p-4">
            <ShinyText text=" Copyright © 2025 - All right reserved by Rifat Ahmed" disabled={false} speed={5} className='custom-class text-center' />
        
        </footer >
    );
};

export default Footer;