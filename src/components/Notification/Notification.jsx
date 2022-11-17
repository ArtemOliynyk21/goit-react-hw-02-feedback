import React from 'react';
import PropTypes from 'prop-types';
import { Messages } from './Notisication.styled';

export const Notification = ({ message }) => {
  return <Messages>{message}</Messages>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
