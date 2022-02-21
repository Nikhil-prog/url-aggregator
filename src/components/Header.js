import React from 'react';
import { useParams } from 'react-router-dom';

function Header() {
    const { username } = useParams();
    return (
        <div className='flex flex-column align-items-center h-min-screen h-screen'>
            <div className='pt-6 flex top-auto justify-content-center' >
                <a href='/'>
                    <img src="/images/logo.png" style={{ height: "5rem", width: "6rem" }} alt='' />
                </a>
            </div>
            <div className='align-content-end'>
                <h4 className='flex align-items-center justify-content-center'>URL aggregator</h4>
            </div>
            <div className='flex flex-wrap flex-row align-content-end '>
                <h4>@</h4>
                <h4>{username}</h4>
            </div>
        </div>
    );
}

export default Header;