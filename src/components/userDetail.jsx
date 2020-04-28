import React, { useState, useEffect } from "react";
import action from '../action';
import { connect } from "react-redux";
import history from '../config/history'

const UserDetails = (props) => {

    useEffect(() => {
        async function renderCall() {
            await props.listUsers();
        }
        renderCall();
    }, []);
  
        const {users,match:{params:{id}}} = props;
        const user = users.filter(e => e.id == id);

        return (<div>
            <p onClick={()=> history.push('/')}>Back</p>
           { user && user.length &&
           <div>
                <h2>User Detail Page</h2>
                <h5 className="mb-5">Details of {user[0].name}</h5>
                <ul>
                     <li>Name: {user[0].name}</li>
                     <li>Email: {user[0].email}</li>
                     <li>Address: {user[0].address.street}, {user[0].address.suite}, {user[0].address.city}, {user[0].address.zipcode}
                     </li>
                     <li>Phone: {user[0].phone}</li>
                     <li>Website: {user[0].website}</li>
                     <li>Company: {user[0].company.name}</li>
                    
                </ul>
              
            </div>}
            </div> )
}

const mapStateToProps = state => {
    return {
        users: state.reducer.lists ,
    };
};

export default connect(mapStateToProps, {
    ...action
})(UserDetails);