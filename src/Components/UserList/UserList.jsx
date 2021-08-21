import React, {Component} from 'react';
import { User } from '../User/User';
import { RandomUserList } from '../../Data/RandomUserList';

import './UserList.css'
import { getUsers } from '../../../src/Services/userService';


// export const UserList = () => {

//     return (
//         <div className='container user-list'>{
//         RandomUserList.map((user, index) =>{
//             return(
//             <User user = {user} key = {index} /> 
        
//             )

//         })

// }
// </div>
//     )
// }

export class UserList extends Component{
    constructor(props){
    super(props);
    this.state = {
        users: [],
    }
    }

    componentDidMount(){
        getUsers()
        .then(users => {this.setState({users})
    });
    }

    render(){
        return (
    <div className='container user-list'>{
        this.state.users.map((user, index) =>{
            return(
        <User user = {user} key = {index} /> 
                    
         )
            
        })
    }
    </div>
        )
}
}