import React from "react";

export default function Home(props){
    const signOut = () =>{
        props.history.push('/login');
    }

    return(
        <div>
            <h1>Dashboard Page</h1>
            <hr/>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
}