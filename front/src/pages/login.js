import React, { Component } from 'react';
import api from '../services/api';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {login: '', password: '', statement: []};
        this.fetchedId = 0;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async showList(){
        const response = await api.post('list', { id : this.fetchedId});
        this.setState({ statement: response.data });

    }

    generateTransaction(event){
        api.post('add-transaction', { id : this.fetchedId})
            .then(() => this.showList());   
        event.preventDefault();
    }

    handleChange(event){
        if(event.target.id === 'user'){
            this.setState({login: event.target.value});
        } else {
            this.setState({password: event.target.value});
        }
    }

    handleSubmit(event){
        if(this.state.login === ''){
            alert('Please insert your username');
        } else if(this.state.password === '') {
            alert('Please insert your password');
        } else {
            api.post('login', this.state)
                .then(response => {  
                    alert('Logged In!');
                    this.fetchedId = response.data;
                    this.showList();
                })
        }
        event.preventDefault();
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User:
                        <input type="text" login={this.state.login} onChange={this.handleChange} id="user" placeholder="User"/>
                    </label>
                    <label>
                        Password:
                        <input type="password"  password={this.state.password} onChange={this.handleChange} id="password" placeholder="Password"/>
                    </label>
                    <input type="submit" login="Submit"/>
                </form>
   
                <button type="button" onClick={this.generateTransaction.bind(this)}>Generate Random Transaction</button>
                <section id="post-list">
                    { this.state.statement.map(post => (
                        <article>
                            <header>
                                <div className="statement">
                                    <p className="money-destiny">{post.money_destiny}</p>
                                    <p className="type-payment">{post.type_payment}</p>
                                    <p>{post.money_transaction}</p>
                                </div>
                            </header>
                        </article>
                    ))}

                </section>
            </div>
        );
    }
    
}

export default Login;