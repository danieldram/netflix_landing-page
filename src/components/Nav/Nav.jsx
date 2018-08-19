import React from 'react';

import styled, { css } from 'styled-components';

import netflixlogo from './img/newlogo.svg';

const Nav = styled.nav`
    height: 90px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* Netflix logo */
    img {
        width: 167px;
        
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 0 0 0 3%;
    }
`;

const Button = styled.button`
    color: white;
    cursor: pointer;
    background-color: #222;
    line-height: normal;
    margin: 30px 3% 0 0;
    padding: 7px 17px;
    font-weight: 100;
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;

    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #555;
    }
`;

const nav = () => {
    return (
      <Nav>
        <a href={"/"} className="logo">
            <img src={netflixlogo} alt="Netflix Logo" />
        </a>
        <Button right>Sign In</Button>
      </Nav>
    )
}

export default nav;