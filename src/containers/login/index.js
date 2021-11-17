import React from 'react';
// import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import {login} from '../../actions/index'
import {Redirect} from 'react-router-dom'


class Login extends React.Component{
    // aku try
    constructor(props){
        super(props);
        this.state = {
            status:'',
        }        
    }

    loginSubmit(){
        const userName = this._username.value;
        const password = this._password.value;
        if(userName !== '' || password !== ""){
            // alert(`username is ${userName}, password is ${password}`)
            const logindata ={
                userName: userName,
                password: password
            }
            console.log('logininput',logindata)
            // console.log('state kita', this.props.userData)
            let flag = 0;
            let userRegData = this.props.userData 
            for(let i=0; i< userRegData.length; i++){
                if(userName === userRegData[i].userName && password === userRegData[i].password){                    
                    flag = 1;
                }                
            }
            if(flag === 1){
                alert('the credentials are true. Please wait while get redirected to the home page')
                this.setState({status: 'login'})
                console.log(this.state)
            }else{
                alert('the credentials are wrong, please login again')
                this.setState({status: 'wrong'})
            }
            



            // <Link to="/register">Submit</Link>              
        }else{
            alert(`please fill in`)
        }
    }
    render(){
        return(
        <div style={{width: '20vw', margin:'0 auto'}}>
            <form>
                {/* {(this.state.status === 'login'? <Redirect to="/home" /> : <Redirect to="/register" />)} */}
                {(this.state.status === 'login'&& <Redirect to="/home" /> )}
                {(this.state.status === 'wrong'&& <Redirect to="/" /> )}

                <h1>Login Here</h1>
                <p>Name</p>
                <input type='text' placeholder='Your name here' ref={(a)=> this._username = a} />
                <p>Password</p>
                <input type='password' placeholder='Your password here' ref={(b)=> this._password = b}/>
                <button style={{display:'block', marginTop:'20px'}}  onClick = {() => this.loginSubmit()}>                
                Submit
                </button> 
            </form>           
        </div>)
    }
}

const mapStateToProps = (state) => ({
    userData: state.register.data
});

// const mapDispatchToProps = {
//     login: login,
// };

const mapDispatchToProps = {
    // login: login,
};

// 

export default connect(mapStateToProps,mapDispatchToProps)(Login);
