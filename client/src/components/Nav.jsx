import React from 'react';

const Nav = () => {
    return (
        <nav style={{ backgroundColor: 'blue', padding: '10px' }}>
            <ul style={{ color: 'white', display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
                <li style={{ margin: '0 10px' }}><a href="/">Home</a></li>
                <li style={{ margin: '0 10px' }}><a href="/about">About Me</a></li>
            </ul>
        </nav>
    );
};

export default Nav;