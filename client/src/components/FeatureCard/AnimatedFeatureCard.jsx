import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FeatureCardContainer,
  FeatureTitleStyled,
  FeatureDescriptionStyled,
} from './AnimatedFeatureCardStyles';

const AnimatedFeatureCard = ({ title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FeatureCardContainer ref={ref} inView={inView}>
      <FeatureTitleStyled>{title}</FeatureTitleStyled>
      <FeatureDescriptionStyled>{description}</FeatureDescriptionStyled>
    </FeatureCardContainer>
  );
};

export default AnimatedFeatureCard;
