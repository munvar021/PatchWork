import styled from 'styled-components';
import theme from '../../../styles/theme';
import { motion } from 'framer-motion';

export const CitizenHomeContainer = styled.div`
  padding: 20px;
  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 10px;
  }
`;

export const AnimatedSection = styled(motion.div)`
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassmorphism.webkitBackdropFilter};
  border-radius: ${({ theme }) => theme.glassmorphism.borderRadius};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export const TaskTitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media ${({ theme }) => theme.responsive.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 5px;
  }
`;

export const TaskStatus = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ isCompleted }) => (isCompleted ? theme.colors.success : theme.colors.action)};

  @media ${({ theme }) => theme.responsive.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const WelcomeBanner = styled(motion.div)`
  background-image: url('/image1.png'); /* Placeholder image */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 40px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    margin-bottom: 15px;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 10px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    opacity: 0.9;
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 40px 20px;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 20px 15px;
    margin-bottom: 20px;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

export const QuickActions = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media ${({ theme }) => theme.responsive.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const QuickActionButton = styled(motion.button)`
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassmorphism.webkitBackdropFilter};
  border-radius: ${({ theme }) => theme.glassmorphism.borderRadius};
  border: ${({ theme }) => theme.glassmorphism.border};
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.accent};
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    gap: 8px;

    svg {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;

export const LiveIssueFeedContainer = styled(AnimatedSection)`
  .carousel-root {
    display: flex;
    justify-content: center;
  }

  .carousel .slide {
    background: none;
    padding: 0 5px;
  }

  .carousel.carousel-slider .control-arrow {
    display: none; // Hide arrows
  }
`;

export const IssueCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 20px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 320px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h4 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 10px;
    max-width: 100%;

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.small};
      margin-bottom: 10px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      gap: 5px;
    }
  }
`;

export const InsightsContainer = styled(AnimatedSection)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media ${({ theme }) => theme.responsive.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const InsightCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.2);
  }

  h4 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 15px;

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

export const TestimonialsContainer = styled.div`
  .carousel-root {
    display: flex;
    justify-content: center;
  }

  .carousel .slide {
    background: none;
    padding: 0 5px;
  }

  .carousel.carousel-slider .control-arrow {
    display: none; // Hide arrows
  }
`;

export const TestimonialCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  max-width: 600px;
  margin: auto;

  p {
    font-style: italic;
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  span {
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    color: ${({ theme }) => theme.colors.accent};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 15px;

    p {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

export const HelpSupportContainer = styled(AnimatedSection)`
  text-align: center;
  margin-bottom: 0;

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 20px;
  }

  button {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.accent};
    border: none;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: pointer;
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.small};
      margin-bottom: 15px;
    }

    button {
      padding: 10px 20px;
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;
