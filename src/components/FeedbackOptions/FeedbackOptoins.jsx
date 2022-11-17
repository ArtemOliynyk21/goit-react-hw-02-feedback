import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(propName => (
        <Button key={propName} onClick={() => onLeaveFeedback(propName)}>
          {propName}
        </Button>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
