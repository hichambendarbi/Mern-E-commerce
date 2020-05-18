import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SideApp = () => {
  const date = new Date();
  return (
  <Sidebar>
    <SidebarHeader>
      <UserAvatar>
        <label ></label>
        <img
          alt="avatar"
          src="https://gravatar.com/avatar/28286631ce8385ff2b6b39f9a8d18aaa?s=80&amp;d=https://static.codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
          width="40"
          height="40"
        />
      </UserAvatar>
      <UserInfo>
        <div>Session info</div>
        <div>Utilisateur Status</div>
        <div>date : {date.toString()}</div>
      </UserInfo>
    </SidebarHeader>
    <SideList>
      <ListTitle>
        <Nav to="/admin/mohammed/Dashboard">Dashboard</Nav>
      </ListTitle>
      <ListTitle>
        <Nav to="/admin/mohammed/staff/list-all-employers">Personelles</Nav>
      </ListTitle>
      <ListTitle>
        <Nav to="/admin/mohammed/gardes/list-all">Garde</Nav>
      </ListTitle>
      <ListTitle>
        <Nav to="/admin/mohammed/tickets/list-all">Tickets</Nav>
      </ListTitle>
      <ListTitle>
        <Nav to="/admin/mohammed/settings/">Parameters</Nav>
      </ListTitle>
    </SideList>
  </Sidebar>
)};

const Sidebar = styled.div`
  width: 250px;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;

  @media (max-width: 700px) {
    display: none;
  }

  transition: width 0.3s ease-in-out;
`;

const SidebarHeader = styled.header`
  display: flex;
  flex-direction: row;
  color: white;
  margin: 15px 0 0 5px;
`;

const UserAvatar = styled.div`
  height: 40px;
  flex: 0 0 30%;
`;

const UserInfo = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const ListTitle = styled.h2`
  color: white;
  border-bottom: 1px solid gray;
`;

const SideList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Item = styled.li`
  flex: 1 1 100%;
  height: 50px;
  color: white;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Nav = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;
