/*
import React from "react";
import styled from 'styled-components'
import Badged from '@material-ui/core/Badge'
import {NavigateBefore, ShoppingCartOutlined} from '@material-ui/icons'
import { Button, Link } from "@material-ui/core"
import {useNavigate, Navigate} from "react-router"
const Container = styled.div`
    height: 60px;
    background-color: lightgray;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Products = styled.div`
    flex 1;
    display: flex;
    align-items: center;
`
const Order = styled.div`
    flex 1;

`

const LoginCart = styled.div`
    flex 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
    font-size: 15 px:
    cursos: pointer;
    margin-left: 25px;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const SearchInput = styled.input`
    border: none;
`





function Navbar ({handleLoginClick}){
    const SignIn = () => {
        //const navigate = useNavigate();
        console.log("Clicked login")
        //navigate("Login");
        //window.location.href='Login'
        handleLoginClick(); 
    }
    /*
    
    const SignIn = () => {
        // const navigate = useNavigate();
         console.log("Clicked login")
        // navigate("Login");
         //window.open('Components/Login')
         handleLoginClick(); 
     }*/
     /*
    return (
        <Container>
            <Wrapper>
                <Products>
                    Products
                    <SearchContainer>
                    <SearchInput></SearchInput>
                    </SearchContainer>
                </Products>
                <Order>
                    My Orders
                </Order>
                <LoginCart>
                    <Badged>
                       <ShoppingCartOutlined/>
                    </Badged>
                   <MenuItem>
                        Register
                    </MenuItem>
                    <span onClick={SignIn}>Sign In</span>
                    
                </LoginCart>
            

            </Wrapper>
        </Container>
    )
}
export default Navbar
// <Link to="/Componets/Login" className="btn btn-primary">Sign in</Link>
*/