import React from 'react';

const Nav = () => {
    return (
        <nav className='flex justify-between'>
            <div>Image</div>
            <ul className='flex gap-10 text-end text-Dark-grayish-blue'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    );
};

export default Nav;