import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="loginCont">
                
                <List style={{ borderTopStyle: 'none !important' }}>
                    <img 
                        src={require('../logo.jpg')} 
                        alt="logo"
                        style={{
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '20px'
                        }} 
                    />

                    <form>
                        <input type="text" placeholder="username" style={loginInput} />
                        <input type="password" placeholder="password" style={loginInput} />
                        <button style={loginSubmit}><Link style={{ color: 'white' }} to="/main">Submit</Link></button>
                    </form>
                </List>
            </div>
        )
    }
}

const loginInput = {
    width: '100%',
    padding: '10px',
    marginBottom: '5px',
    border: '1px #ccc solid',
    borderRadius: '4px'
}
const loginSubmit = {
    width: '100%',
    padding: '10px',
    marginBottom: '5px',
    border: '1px #F1C40F solid',
    borderRadius: '4px',
    color: 'white',
    background: '#F1C40F',
    fontWeight:'bold',
    marginTop: '20px'
}

export default Login
