import React from "react";

export default class Passobj extends React.Component{
    state = {
        tempid: null,
        tempname: '',
        temploc: '',
        tempdept: '',
        tempemail: ''
    }

    componentWillMount(){
        // this call props validation when you page refresh the data will vanish that's why it use for
        if(!this.props.location.info){
            alert('Sorry no props recieve')
        }
        else{
            this.setState({
                tempid: this.props.location.info.empid,
                tempname: this.props.location.info.empname,
                temploc: this.props.location.info.loc,
                tempdept: this.props.location.info.dept,
                tempemail: this.props.location.info.email
            });
        }
    }

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
                            <td>{this.state.tempid}</td>
                            <td>{this.state.tempname}</td>
                            <td>{this.state.temploc}</td>
                            <td>{this.state.tempdept}</td>
                            <td>{this.state.tempemail}</td>

                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}