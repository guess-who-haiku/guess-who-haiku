import React, { memo } from 'react'
import { UserAvatar, DLink, DNavLink } from './Navbar.styled';

export const ProtectedLinks = memo(({ currentUser, logout }) => (<>
  <DNavLink to="/haikus">My Haikus</DNavLink>
  <DNavLink to="/challenges">My Challenges</DNavLink>
  <DLink alignLeft bold>
    <UserAvatar avatarUrl={currentUser.avatar} />
    {currentUser.username}
  </DLink>
  <DLink onClick={logout}>Logout</DLink>
</>))

export const AuthLinks = memo(({ openModal }) => (<>
  <DLink onClick={() => openModal('signup')} alignLeft>Signup</DLink>
  <DLink onClick={() => openModal('login')}>Login</DLink>
</>))

export const NeutralLinks = memo(({ resetBuilder }) => (<>
  <DNavLink to="/" exact onClick={() => resetBuilder()}>Create Haiku</DNavLink>
  <DNavLink to="/scoreboard">Scoreboard</DNavLink>
  <DNavLink to="/about">About</DNavLink>
</>))

