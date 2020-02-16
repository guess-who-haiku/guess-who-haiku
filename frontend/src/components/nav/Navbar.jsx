import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Session } from 'store/session/actions';
import { Creators as Modal } from 'store/modal/actions';
import { Creators as NewHaiku } from 'store/new_haiku/actions';
import { selectCurrentUser } from 'store/selectors';
import { Header, MenuIcon, Logo, NavLinks } from './Navbar.styled';
import { NeutralLinks, ProtectedLinks, AuthLinks } from './LinkSets'

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(Session.logout());
  const openModal = modal => dispatch(Modal.openModal(modal));
  const resetBuilder = () => dispatch(NewHaiku.resetBuilder());

  const currentUser = useSelector(selectCurrentUser);

  const [navlinksOpen, setNavlinksOpen] = useState(false);
  const toggleNavlinks = () => setNavlinksOpen(prevState => !prevState);

  return (
    <nav>
      <Header>
        <MenuIcon onClick={toggleNavlinks} />
        <Logo onClick={() => resetBuilder()} to='/'/>
      </Header>
      <NavLinks isExpanded={navlinksOpen}>
        <NeutralLinks
          resetBuilder={resetBuilder}
        />
        {currentUser ? (<ProtectedLinks
          currentUser={currentUser}
          logout={logout}
        />) : (<AuthLinks
          openModal={openModal}
        />)}
      </NavLinks>
    </nav>
  );

}

export default Navbar;
