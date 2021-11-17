import React from 'react';
import {connect} from 'react-redux';
import { register } from '../../actions/index';
import {Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'


class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status:'',
        }        
    }

    registerSubmit(){
        const userName = this._username.value;
        const password = this._password.value;
        if(userName !== '' || password !== ""){
            // alert(`username is ${userName}, password is ${password}`)
            alert('Your credentials are recorded')
            const data ={
                userName: userName,
                password: password,
                status: 'login'
            }
            this.props.register(data);
            this.setState({status: 'login'})

        }else{
            alert(`please fill in all the details`)
        }
        
    }

    render(){
        return(
        <div style={{width: '20vw', margin:'0 auto'}}>
            <form>

            {(this.state.status === 'login'&& <Redirect to="/" /> )}

                <h1>Register Here</h1>
                <p>Name</p>
                <input type='text' placeholder='Your name here'  ref={(a)=> this._username = a} />
                <p>Password</p>
                <input type='password' placeholder='Your password here'  ref={(b)=> this._password = b} />
                <button style={{display:'block', marginTop:'20px'}} onClick = {() => this.registerSubmit()}>
                <Link to="/home"  style={{textDecoration:'none'}}>
                    Submit
                </Link>
                </button> 
            </form>           
        </div>)
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
    register: register,
};

// 

export default connect(mapStateToProps,mapDispatchToProps)(Register);

// export default Register