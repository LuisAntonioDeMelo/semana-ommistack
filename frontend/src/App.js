import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api'


function App() {
  const [email,setEmail] = useState('');

 async function handleSubmit(event){
    event.preventDefault();
    console.log(email);

    const res = await api.post('/sessions',{ email });

    const { _id } = res.data;
    console.log(res);
    console.log(_id);

    localStorage.setItem('user',_id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      <div className="content">
        <p> Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">E-mail *</label>
        <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        <button type="submit" className="btn" >Entrar</button>
      </form>
      </div>
    </div>
  );
}

export default App;
