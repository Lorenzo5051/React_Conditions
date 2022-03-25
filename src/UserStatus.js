import React, { Component } from 'react';
 
class UserStatus extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
  
   render() {
    if (this.state.isLoggedIn) {
        return (
            <div>
                Bienvenido Usuario
            </div>
        )
    } else {
        return (
            <div>
                Iniciar Sesión
            </div>
        )

   }
}
}
 
export default UserStatus;