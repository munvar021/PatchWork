import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn, slideInFromLeft } from "../../../animations/animations";

export const HomePageContainer = styled.div`
  padding: 40px;
  text-align: center;
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-radius: ${({ theme }) => theme.glassmorphism.borderRadius};
  border: ${({ theme }) => theme.glassmorphism.border};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  animation: ${fadeIn} 1s ease-out;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  animation: ${fadeIn} 1.6s ease-out;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

export const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin-top: 30px;
  animation: ${fadeIn} 1.4s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const CarouselContainer = styled.div`
  margin: 0 auto; /* Center the carousel */
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  animation: ${slideInFromLeft} 1s ease-out;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;



export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: ${({ theme }) => theme.glassmorphism.background};
  backdrop-filter: ${({ theme }) => theme.glassmorphism.backdropFilter};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
`;

export const SlideTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 10px;
`;

export const SlideDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 15px;
`;

export const SlideButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background: ${({ theme }) => theme.gradients.button};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

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
    font-size: 1.1rem;
    padding: 10px;
    bottom: 20px;
    opacity: 1;
  }
`;

export const HowItWorksSection = styled.div`
  padding: 40px 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const MoreFeaturesSection = styled.div`
  padding: 40px 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;
