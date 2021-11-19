import React from 'react'
import { connect } from 'react-redux';
import { login, logout } from '../action/loginAction';
import {useNavigate} from 'react-router-dom';

function AuthLogin(props) {
    const navigate = useNavigate();

    function handleLogin(){
        props.login();

        if(props.login){
            navigate("/aulas", { replace: true });
        }
    }

    function handleLogout(){
        props.logout();

        if(props.logout){
            navigate("/", { replace: true });
        }
    }

    return (
        <div>
            {props.log ?
                <button onClick={handleLogout}>Logout</button> :
                <button onClick={handleLogin}>Login</button>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        log: state
    }
}

function mapDispathToProps(dispatch) {
    return {
        login: ()=> dispatch(login()),
        logout: ()=> dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(AuthLogin);