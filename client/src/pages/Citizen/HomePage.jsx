import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MapView from "./MapView";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useAuth } from "../../context/AuthContext";
import { fadeIn, slideInFromLeft } from "../../animations/animations";

const HomePageContainer = styled.div`
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

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
  line-height: 1.6;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  animation: ${fadeIn} 1.6s ease-out;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

const CtaButton = styled(Link)`
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

const CarouselContainer = styled.div`
  margin: 0 auto; /* Center the carousel */
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  animation: ${slideInFromLeft} 1s ease-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleReportIssueClick = () => {
    if (isLoggedIn) {
      navigate("/report");
    } else {
      navigate("/login");
    }
  };

  return (
    <HomePageContainer>
      <CarouselContainer>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          <div>
            <CarouselImage src="/image1.png" alt="Community Action 1" />
            <p className="legend">Working together for a better community.</p>
          </div>
          <div>
            <CarouselImage src="/image2.png" alt="Issue Resolution 2" />
            <p className="legend">Issues resolved efficiently.</p>
          </div>
          <div>
            <CarouselImage src="/image3.png" alt="Local Impact 3" />
            <p className="legend">Making a real difference locally.</p>
          </div>
        </Carousel>
      </CarouselContainer>

      <Title>Welcome to PatchWork</Title>
      <Subtitle>
        Your community platform for reporting and resolving local issues
        efficiently. Help us build a better neighborhood by reporting problems,
        tracking their resolution, and seeing the positive impact of collective
        action.
      </Subtitle>

      <CtaButton as="button" onClick={handleReportIssueClick}>
        Report an Issue Now
      </CtaButton>

      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>Easy Reporting</FeatureTitle>
          <FeatureDescription>
            Quickly submit issues with detailed descriptions, photos, and
            precise locations.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Transparent Tracking</FeatureTitle>
          <FeatureDescription>
            Monitor the status of your reports in real-time, from submission to
            resolution.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Community Impact</FeatureTitle>
          <FeatureDescription>
            See how your reports contribute to improving public spaces and
            services.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Dedicated Support</FeatureTitle>
          <FeatureDescription>
            Our team of technicians is committed to addressing and resolving
            your reported issues promptly.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Data-Driven Insights</FeatureTitle>
          <FeatureDescription>
            Administrators gain valuable analytics to identify trends and
            optimize resource allocation.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Secure & Private</FeatureTitle>
          <FeatureDescription>
            Your data and reports are handled with the utmost care and privacy.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>

      <Title>Live Issue Map</Title>
      <Subtitle>
        Explore reported issues in your area and see what's being addressed.
      </Subtitle>
      <MapView />
    </HomePageContainer>
  );
};

export default HomePage;
