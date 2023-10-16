import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './Login';


const Admin=()=> {
  const State ={
    adminDb : {
    email:"abc",
    password:123

}}
  const onsubmit=(eml ,psw)=>{
  (eml===this.adminDb.email && psw===this.adminDb.password);
  }
 
  
    return (
        <div>
          {onsubmit?(
          <h1>admin ok</h1> 
          ):(
            <Navigate to='/login' replace />
          )}
        </div>
    
    

      
    );
}

export default Admin;