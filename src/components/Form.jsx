import React, { useState } from 'react';
import './components/App.scss'

const Form = () =>{
    return(

        <form onSubmit="">
            <div className="main-wrapper">
                <div className="forms">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
                
                <div className="forms">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="forms">
                <button>Submit</button>
                </div>
            </div>            
        </form >
    );
}
export default Form;