import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  openModal: ['modal'],
  closeModal: null,
}, { prefix: '[MODAL] ' })