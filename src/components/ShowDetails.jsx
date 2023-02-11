import React from "react";

export default class ShowDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            city: ''
        }
    }
    render(){
        return(
            <>
                <form>
                    <label>Username: <input type="text" placeholder="Username" /></label>
                    <label>Email: <input type="text" placeholder="Email" /></label>
                    <label>City: 
                        <select>
                            <option value='Kolkata'>Kolkata</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Pune'>Pune</option>
                        </select>
                    </label>
                </form>
                <table>
                    <tr>
                        
                    </tr>
                </table>
            </>
        );
    }
}