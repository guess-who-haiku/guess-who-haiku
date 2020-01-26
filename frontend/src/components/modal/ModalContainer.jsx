

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators } from 'store/modal/actions';
import Modal from './Modal';

const mapStateToProps = state => ({
  modal: state.ui.modal,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(Creators.closeModal())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Modal)
);

