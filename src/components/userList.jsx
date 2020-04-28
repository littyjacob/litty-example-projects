import React, { Component } from 'react';
import action from '../action';
import { connect } from "react-redux";
import history from '../config/history'

class ListItems extends React.Component {
    
    state = {
        name: ''
    }

    componentDidMount = () => {
        this.props.listUsers();
    }

    clear = () => {
        this.props.listUsers();
    }

    search = () => {
        this.props.search({name:this.state.name});
    }

    render() {
        const { userLists } = this.props;
        return (
            <div className="mt-5"> 
                <h2>Users</h2>
                <div className="mt-5 mb-5">
                    <input type="text" name="name" onChange={(e)=> this.setState({name: e.target.value})} value= {this.state.name}/> &nbsp;
                    <button onClick={()=> this.search()}>Search</button> &nbsp; 
                    <button onClick={()=> this.clear()}>Clear</button>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userLists.length && userLists.map((user, i) => {
                            return <tr key={i} onClick={() => history.push(`/userDetail/${user.id}`)}>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.company.name}
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLists: state.reducer.lists,
    };
};

export default connect(mapStateToProps, {
    ...action
})(ListItems);