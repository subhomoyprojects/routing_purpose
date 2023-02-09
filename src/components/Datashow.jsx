import React from "react";

export default class Datashow extends React.Component{
    render(){
        return(
            <>
                <ul>
                    <li>Id: {this.props.location.uid}</li>
                    <li>Id: {this.props.location.unm}</li>
                    <li>Id: {this.props.location.uemail}</li>
                </ul>
            </>
        );
    }
}