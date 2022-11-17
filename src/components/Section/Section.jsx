import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
