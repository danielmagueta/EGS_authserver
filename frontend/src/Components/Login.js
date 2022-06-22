import { wait } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  refreshPage = ()=>{
    window.location.reload();  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  login = async(e) => {
    e.preventDefault();
    
    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
    //setTimeout(this.props.context.login(username, password), 3000)
      .then((loggedIn) => {
        //setTimeout(this.props.context.login(username, password), 3000)
        let token = localStorage.getItem("token")
        console.log("LoggedIn value",token)
        if ( !loggedIn || token == null) {

         // this.setState({ error: "Invalid Credentails" });
        }

      })
  };

  render() {
    //console.log(this.props.context.user)
    return !this.props.context.user ? (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.login.bind(this)}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Username: </label>
                <input
                  className="input"
                  type="username"
                  name="username"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button //onClick={this.refreshPage}
                  className="button is-primary is-outlined is-pulled-right"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default withContext(Login);


/*
export default function Login(isShowLogin){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        if((username == "") & (password == "")){
            return;
        }else{
            axios
            .post("http://localhost:8080/authenticate", {
            username: username,
            password: password,
            })
            .then(function (response) {
            console.log(response.data.token, "response.data.token");
            if (response.data.token) {
                const cookies = new Cookies();
                cookies.set('name', response.name);
                cookies.set('email', response.email);
                cookies.set('token', response.data.token);
          
                //setToken(response.data.token);
                navigate("/");
            }
            })
            .catch(function (error) {
            console.log(error, "error");
            });

        }
    }
    return (
        <div className={`${!isShowLogin? "active:":""}show`} >
        <h1>Login page</h1>
        <div style={{ marginTop: 30 }}>
          <div>
            <form>
              <label style={{ marginRight: 10 }}>Input Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />

              <label style={{ marginRight: 10 }}>Input Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          </div>
        
      </div>
    </div>
    )
}
/*
  <div className={`${!isShowLogin? "active:":""}show`} style={{ minHeight: 800, marginTop: 30 }}>
        <h1>Login page</h1>
        <div style={{ marginTop: 30 }}>
            {fetchToken() ? (
            <p>you are logged in</p>
            ) : (
          <div>
            <form>
              <label style={{ marginRight: 10 }}>Input Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />

              <label style={{ marginRight: 10 }}>Input Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>

    style={{ minHeight: 800, marginTop: 30 }}
*/