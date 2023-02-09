import React from "react";

export default class Passobj extends React.Component{
    render(){
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Depertment</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.location.info.empid}</td>
                            <td>{this.props.location.info.empname}</td>
                            <td>{this.props.location.info.loc}</td>
                            <td>{this.props.location.info.dept}</td>
                            <td>{this.props.location.info.email}</td>

                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}