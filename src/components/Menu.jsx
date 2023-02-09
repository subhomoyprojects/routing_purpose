import React from "react";
import { Link} from "react-router-dom";

export default class Menu extends React.Component{
    state = {
        id:10,
        name:'Subhomoy',
        email:'s@s.com',
        empdata: {empid:10,empname: "Adi",loc: 'kolkata', dept: 'software', email: 'sp@gamil.com'}
    }

    render(){
        return(
            <>
                <ul className="navigation">
                    <li><Link to='/test'>Test</Link></li>
                    <li><Link to={{pathname:"/fetchval/"+this.state.id}}>Fetchval</Link></li>
                    <li><Link to={{pathname:"/datashow",uid:this.state.id,unm:this.state.name,uemail:this.state.email}}>Datashow</Link></li>
                    <li><Link to={{pathname:"/passobj",info:this.state.empdata}}>Pass Object</Link></li>
                </ul>
            </>
        );
    }
}