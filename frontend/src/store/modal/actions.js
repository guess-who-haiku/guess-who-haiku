import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  openModal: ['modal', 'haikuId'],
  closeModal: null,
}, { prefix: '[MODAL] ' })