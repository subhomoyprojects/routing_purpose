import React from "react";

export default class Fetchval extends React.Component{
    render(){
        return(
            <>
                <p>Fetchval runing</p>
                {/* this 'userid' belongs to a variable */}
                <p>Id is : {this.props.match.params.userid}</p>
            </>
        );
    }
}