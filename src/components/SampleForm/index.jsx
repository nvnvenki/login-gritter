import React, { Component } from 'react'

export default class SampleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: "images/neutral.png",
            email: "",
            password: "",
            type: "password"
        };
    }

    onFocus(e) {
        if(e.currentTarget.name == "email") {
            this.setState({currentImg: "images/active.png"});
        } else if(e.currentTarget.name == "password") {
            this.setState({currentImg: "images/shy.png"});         
        }
    }

    onChange(e) {
        const maxLength = e.currentTarget.maxLength;
        if(e.currentTarget.name == "email") {
            if (e.currentTarget.value.length < maxLength / 4) {
                this.setState({currentImg: "images/active.png"});
            } else if (e.currentTarget.value.length < maxLength / 2) {
                this.setState({currentImg: "images/ecstatic.png"});
            } else if (e.currentTarget.value.length > maxLength / 2) {
                this.setState({currentImg: "images/right.png"});
            }
        }
        this.setState({[e.currentTarget.name] : e.currentTarget.value});
    }

    onClick(e) {
        this.setState({type: e.currentTarget.checked ? "text" : "password"});
        if(e.currentTarget.checked) {
            this.setState({currentImg: "images/peek.png"});
        } else {
            this.setState({currentImg: "images/shy.png"});
        }
    }

    render() {
        const { currentImg, password, email, type } = this.state;
        return (
            <div>
                <form className="form-signin">
                    <img className="mb-4" src={currentImg} alt="" width="100" height="100" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" 
                        id="inputEmail" 
                        maxLength={16} 
                        className="form-control mb-3 " 
                        name="email" 
                        placeholder="Email address" 
                        onFocus={this.onFocus.bind(this)} 
                        value={email} 
                        onChange={this.onChange.bind(this)} />
                    
                    <label htmlFor="inputPassword" maxLength={16} className="sr-only">Password</label>
                    <input  type={type}
                            id="inputPassword" 
                            className="form-control mb-3 " 
                            name="password"
                            placeholder="Password" 
                            onFocus={this.onFocus.bind(this)} 
                            value={password} 
                            onChange={this.onChange.bind(this)} />
                    
                    <div className="checkbox mb-3">
                        <label>
                            <input 
                                type="checkbox"
                                value="remember-me"
                                onClick={this.onClick.bind(this)} /> Show Password
                        </label>
                    </div>
            
                </form>
            </div>
        )
    }
}
