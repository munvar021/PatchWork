import styled, { css } from 'styled-components';

export const FeatureCardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['inView'].includes(prop)
})`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  ${({ inView }) => inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

export const FeatureTitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

export const FeatureDescriptionStyled = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;
