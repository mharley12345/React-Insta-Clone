import React from 'react';

import CameraLogo from '../assets/igcameralogo.png';
import IGLogo from '../assets/iglogo.png';
import styled from 'styled-components';




const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-around;
  background: red;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 20px;
`;

const InputWrapper = styled.div`
  width: 300px;
  margin:auto;
  margin-left: 6rem;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const IconsWrapper = styled.div`
   width:300px;
   display:flex;
   align-items:center;
`;
const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;
const SocialDiv = styled.div`
  width: 20rem;
  

  
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage alt="instagram camera" src={CameraLogo} />
        <Divider>|</Divider>
        <LogoImage alt="instagram logo" src={IGLogo} />
      </LogoHeader>
      <InputWrapper>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </InputWrapper>
      <IconsWrapper>
        <SocialDiv>
          <i className="far fa-compass" src="https://kit.fontawesome.com/aef825ebc9.js" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-heart" src="https://kit.fontawesome.com/aef825ebc9.js" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-user-circle" src="https://kit.fontawesome.com/aef825ebc9.js" />
        </SocialDiv>
      </IconsWrapper>
    </Header>
  );
};

export default SearchBar;