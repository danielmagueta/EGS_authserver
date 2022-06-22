import React from 'react';
import { Cookies } from 'react-cookie';

class Logout extends React.Component {
     
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        const cookies = new Cookies();
        cookies.remove('name');
        cookies.remove('email');
        cookies.remove('valid');
        cookies.remore('token');
        window.location.href='./';
    }

    render() {
        return(<div class="page-loader"><div class="page-loader__spin"></div></div>)
    }
  }

  export default Logout;