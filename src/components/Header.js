import React,{useState} from 'react';
import Link from './Link';

const Header = () => {


    return (
        <div className="ui vertical pointing menu"  style={{}}>
           <Link href="/">
             Home
           </Link>
           <Link href="/newrecipe">
             New Recipe
           </Link>
        </div>
    )
}

export default Header;