import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        fetch("http://localhost:4000/category")
        .then(response => response.json())
        .then(data => {
            setCategories(data);
        })
    },[])
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="category">
                <button onClick={() => setToggle(!toggle)} className="btn ml-auto">
                    Categories 
                    <svg className="ml-2 bi bi-border-width" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div className={toggle?"categories active": "categories"}>
                    {
                        categories.map((category) => <Link to="/">{category}</Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;