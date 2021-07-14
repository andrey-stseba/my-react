import React, { Component } from 'react'

 class UserList extends Component {
    constructor(props){
        super(props);
    this.state ={
        users:[
            {
                id:1,
                fisrtName:"Tset1",
                lastName:"Testovich1",
            },
            {
                id:1,
                fisrtName:"Tset1",
                lastName:"Testovich1",
            },
            {
                id:1,
                fisrtName:"Tset1",
                lastName:"Testovich1",
            },
            {
                id:1,
                fisrtName:"Tset1",
                lastName:"Testovich1",
            }
        ],
    }}
    mapUser = (user,index) => <li key={index}>ID:"{user.id}"</li>
    render() {
        const{users}=this.state
        return (
            <ul>
               {users.map(this.mapUser)} 
            </ul>
        )
    }
}

export default class UserList 