import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-light text-center text-white'>
            <div className='p-4 pb-0'>
                <section className='mb-4 d-flex justify-content-center'>
                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaFacebook />
                    </div>

                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaTwitter />

                    </div>

                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaGoogle />
                    </div>
                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaInstagram />
                    </div>

                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaLinkedin />
                    </div>

                    <div
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333', borderRadius: '10px', padding: '4px' }}
                        href='#!'
                        role='button'
                    >
                        <FaGithub />
                    </div>
                </section>


                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https:/'>
                        Husain Ahmed
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Footer;