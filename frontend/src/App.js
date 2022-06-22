import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Context from "./Context";
import { Cookies } from 'react-cookie';

import Cart from './Components/Cart';
import Products from './Components/Products';
import Orders from './Components/Orders';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
      token:{},
      orders: []

    };
    this.login = this.login.bind(this);
    this.routerRef = React.createRef();
  }
  async componentDidMount() {
    const cookies = new Cookies();
    cookies.remove('name');
    cookies.remove('token');
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");
    let token = localStorage.getItem("token");
    
    console.log(" Here token",token)
    console.log("user", user)
    //var data = `Bearer `+JSON.parse(token)
    //console.log(data)
    const axios = require('axios');
    //axios.defaults.headers.common["Authorization"] = token
    /*
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8000/api/inventory/costumer/searchItem',
      timeout: 5000,
      headers: {
        //Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    axiosInstance.get()
      .catch(err => {
        console.log(err.request._header)
      })*/
    var orders = []
    /*
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };*/
    //XMLHttpRequest.setRequestHeader("Authorization", "Bearer ${token}")
    //axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
    /*
    var products = await axios.get('http://localhost:8000/api/inventory/costumer/searchItem', {
    headers: { 
      //Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
      
      //'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTY1NTg0MDgyOCwiaWF0IjoxNjU1ODA0ODI4fQ.RyCtBrQdTAHpVdq95VN7Ums5HK9nIhSE3ezeGwZP6xQ`
    }, 
    crossDomain: true,
    
    })
    /*
    var orders = await axios.get('http://localhost:8001/api/packages', {
    headers: { 
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer '+JSON.parse(token)
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTY1NTc1NzE5NywiaWF0IjoxNjU1NzIxMTk3fQ.gyGF7eE5GR8PTkaAPiGw6yn9cXIyXKP2Qn7p-QKCPm8`
    }, 
    
    })
    console.log("Orders". orders)
    */
    let uri = "http://leandro-backend.k3s/api/inventory/costumer/searchItem/";
let req = {
  method: "GET",
  //mode: "no-cors",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    //'Access-Control-Request-Method': 'GET',
    //'Access-Control-Request-Headers': 'origin, x-requested-with',
    //'Origin': 'localhost:3000',
    // leandro-backend.k3s
    'Host':'leandro-backend.k3s:8000',
    'authorization': 'Bearer '+token,
    'Cache-Control': 'no-cache'      
  }
};

fetch(uri, req)
  .then(response => response.json())
  .then(responseJson => {
    this.setState({products:responseJson})
  console.log("ResponseAxis::" + JSON.stringify(responseJson));
    console.log("ResponseAxis::" + JSON.stringify(responseJson));
    //alert("ResponseAxis::" +JSON.stringify(responseJson));
  })
  .catch(error => {
    console.log("Error::" + JSON.stringify(error));
  }); 
  let uri2 = "http://transportes-beira-mar.k3s/api/packages/";
  let config = {
    method: "GET",
    //mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'origin, x-requested-with',
      //'Origin': 'localhost:3000',
      //'Host':'transportes-beira-mar.k3s:8000',
      'authorization': 'Bearer '+token,
      'Cache-Control': 'no-cache'      
    }
  };
  fetch(uri2, config)
  .then(response => response.json())
  .then(responseJson => {
    this.setState({orders:responseJson})
  console.log("ResponseAxis::" + JSON.stringify(responseJson));
    console.log("ResponseAxis::" + JSON.stringify(responseJson));
    //alert("ResponseAxis::" +JSON.stringify(responseJson));
  })
  .catch(error => {
    console.log("Error::" + JSON.stringify(error));
  }); 
    user = user;
    cart = cart? JSON.parse(cart) : {};

    //this.setState({ user,  products: products.data, cart, orders: orders.data });
    this.setState({ user,  cart, orders: orders.data });
  }

  login = async(username, password) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "username": username,
      "password": password
      // "password": password.endoce()
    });
    // http://danimag-authserver.k3s
    var config = {
      method: 'post',
      url: 'http://danimag-authserver.k3s/authenticate',

      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      //console.log("JWT Decode"+jwt_decode(JSON.stringify(response.data)))
      console.log(JSON.stringify(response.data['jwt']));
      if(response.status === 200) {

      //const token = JSON.stringify(response.data['jwt'])
      const token = response.data['jwt']
      localStorage.setItem("token", token);
      console.log("Token",token)
      const user = {
        username
      }

      localStorage.setItem("user", username);

      this.sate.user=user

      return true;
    } else {
      return false;
    }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  

    addToCart = cartItem => {
      let cart = this.state.cart;
      if (cart[cartItem.id]) {
        cart[cartItem.id].amount += cartItem.amount;
      } else {
        cart[cartItem.id] = cartItem;
      }
      if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
        cart[cartItem.id].amount = cart[cartItem.id].product.stock;

      }
      console.log("Cart size", cart[cartItem.id].amount)
      localStorage.setItem("cartSize", JSON.stringify(cart[cartItem.id].amount));
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("cartItem", cartItem.id)
      this.setState({ cart });
    };
    removeFromCart = cartItemId => {
      let cart = this.state.cart;
      delete cart[cartItemId];
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    };
    checkout = async(cartItemId)=>{
      let cart = this.state.cart;
      let cartID = localStorage.getItem("cartItem")
      let cartAmount = localStorage.getItem("cartSize")
      console.log("this cart", cart)
      console.log("Amount,", cartAmount) 
      
      let productAmount = cart[cartID].product.stock
      console.log("productAmount",productAmount)
      //var items = parseInt(cartAmmount,10).toString
      let token = localStorage.getItem("token");
      let user = localStorage.getItem("user");
      //let items = JSON.stringify(cart.id)
      //let client = JSON.parse(user)
      console.log("User", user)
      let data = JSON.stringify({
        "client": user,
        "origin": "WareHousePChincha",
        "destination": "Armazém Central",
        "items": cartAmount,
      });

      const axios = require('axios');

      let config = {
        method: 'post',
        url: 'http://transportes-beira-mar.k3s/api/package',
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${token}`
        },
        data : data
      };
      var updateStock = productAmount - cartAmount
      let config2 = {
        method: 'put',
        url: 'http://leandro-backend.k3s/api/inventory/admin/Item'+cartID+'?stock='+updateStock,
        headers: { 
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${token}`
        },

      }


      axios(config)
      .then((response) => {
          console.log(JSON.stringify(response.data));
          axios(config2)
          .then((response)=> {
            console.log(JSON.stringify(response.data));
          })
          .catch((error)=>{
            console.log(error)
          });
      })
      .catch((error) => {
          console.log(error);
      });
      delete cart[cartID];
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    }




  render(){

  return (
    <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          checkout: this.checkout,
          clearCart: this.clearCart
        }}
      >
    <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">PChincha</b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/products" className="navbar-item">
                  Products
                </Link>
                <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(this.state.cart).length }
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                ) : (
                  
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link> 

                
                )}
                {!this.state.user ? (
                  <div >
                  SignIn to View your
                  </div>
                ) : (
                  
                  <Link to="/orders" className="navbar-item">
                  Orders
                </Link>

                
                )}
                
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/products" component={Products} />
              <Route exatc path="/orders" component={Orders}/>
            </Switch>
          </div>
        </Router>
    </Context.Provider>
  );
  }
}



