import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn, slideInFromLeft } from "../../animations/animations";

export const HomePageContainer = styled.div`
  padding: ${({ theme }) => theme.padding.large};
  text-align: center;
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  animation: ${fadeIn} 1s ease-out;

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: ${({ theme }) => theme.padding.medium};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    padding: ${({ theme }) => theme.padding.small};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: ${({ theme }) => theme.margin.medium} 0;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.margin.large};
  line-height: 1.6;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.margin.large};
  margin-top: ${({ theme }) => theme.margin.large};
  margin-bottom: ${({ theme }) => theme.margin.large};
  animation: ${fadeIn} 1.6s ease-out;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.padding.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

export const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.margin.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large};
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin-top: ${({ theme }) => theme.margin.large};
  animation: ${fadeIn} 1.4s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.padding.small}
      ${({ theme }) => theme.padding.medium};
  }
`;

export const CarouselContainer = styled.div`
  margin: 0 auto; /* Center the carousel */
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  animation: ${slideInFromLeft} 1s ease-out;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;

  @media ${({ theme }) => theme.responsive.tablet} {
    height: 400px;
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    height: 300px;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
`;

export const SlideTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.margin.small};

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const SlideDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => theme.margin.medium} 0;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const SlideButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.padding.small}
    ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin: ${({ theme }) => theme.margin.medium} 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Override default carousel styles
export const GlobalCarouselStyles = styled.div`
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    opacity: 0.6;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .carousel .control-dots {
    margin: ${({ theme }) => theme.margin.medium} 0;
  }

  .carousel .control-dots .dot {
    background: ${({ theme }) => theme.colors.textSecondary};
    box-shadow: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.textSecondary};
    margin: 0 5px;
    transition: all 0.3s ease;

    &.selected {
      background: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      transform: scale(1.2);
    }

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  .carousel .legend {
    background: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.padding.small};
    bottom: 20px;
    opacity: 1;
  }
`;

export const HowItWorksSection = styled.div`
  padding: ${({ theme }) => theme.padding.large}
    ${({ theme }) => theme.padding.medium};
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin: ${({ theme }) => theme.margin.large} 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const MoreFeaturesSection = styled.div`
  padding: ${({ theme }) => theme.padding.large}
    ${({ theme }) => theme.padding.medium};
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin: ${({ theme }) => theme.margin.large} 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;
