import React from "react";
import { Link } from "react-router-dom";

class Test extends React.Component{
    render(){
        return(
            <>
                <div><Link to='/'>Back to base</Link></div>
                Test is ready
            </>
        );
    }
}

export default Test;