import React from 'react';
import Bill from './Bill';


function Header() {
    return (
        <div className ="container">
            <div className ='row bg-danger p-4 mt-4' >
                <div className="col-md-6 mx-auto text-center"> 
                <Bill />
              
                </div>
            </div>
        </div>
    )
}

export default Header
