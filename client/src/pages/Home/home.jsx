import React from "react";
import { useNavigate } from "react-router-dom";
import MapView from "../Citizen/MapView/mapView"; // Adjusted import path for MapView
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useAuth } from "../../context/AuthContext";
import AnimatedFeatureCard from "../../components/FeatureCard/AnimatedFeatureCard";
import {
  HomePageContainer,
  Title,
  Subtitle,
  FeatureGrid,
  CtaButton,
  CarouselContainer,
  CarouselImage,
  HowItWorksSection,
  MoreFeaturesSection,
  SlideContent,
  SlideTitle,
  SlideDescription,
  SlideButton,
  GlobalCarouselStyles,
} from "./homeStyles";

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
        <GlobalCarouselStyles /> {/* Apply global carousel styles */}
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
        >
          <div>
            <CarouselImage
              src="https://assets.telegraphindia.com/telegraph/1cc1271d-257b-478a-b2fc-c862ad8ff27c.jpg"
              alt="Community Action 1"
            />
            <SlideContent>
              <SlideTitle>Empowering Communities</SlideTitle>
              <SlideDescription>
                Report local issues and contribute to a better neighborhood.
              </SlideDescription>
              <SlideButton to="/report">Get Started</SlideButton>
            </SlideContent>
          </div>
          <div>
            <CarouselImage src="/image2.png" alt="Issue Resolution 2" />
            <SlideContent>
              <SlideTitle>Efficient Resolution</SlideTitle>
              <SlideDescription>
                Track progress and see issues resolved by dedicated technicians.
              </SlideDescription>
              <SlideButton to="/myreports">View My Reports</SlideButton>
            </SlideContent>
          </div>
          <div>
            <CarouselImage src="/image3.png" alt="Local Impact 3" />
            <SlideContent>
              <SlideTitle>Transparent & Accountable</SlideTitle>
              <SlideDescription>
                Access analytics and user management for full oversight.
              </SlideDescription>
              <SlideButton to="/admin/dashboard">Admin Dashboard</SlideButton>
            </SlideContent>
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

      <HowItWorksSection>
        <Title>How It Works</Title>
        <Subtitle>
          Simple steps to make a difference in your community.
        </Subtitle>
        <FeatureGrid>
          <AnimatedFeatureCard
            title="1. Report an Issue"
            description="Spot a problem? Easily submit a detailed report with photos and location data."
          />
          <AnimatedFeatureCard
            title="2. Track Progress"
            description="Monitor the status of your reported issues in real-time, from submission to resolution."
          />
          <AnimatedFeatureCard
            title="3. See the Impact"
            description="Witness how your contributions lead to tangible improvements in your neighborhood."
          />
        </FeatureGrid>
      </HowItWorksSection>

      <MoreFeaturesSection>
        <Title>Why Choose PatchWork?</Title>
        <Subtitle>Beyond reporting, we empower communities.</Subtitle>
        <FeatureGrid>
          <AnimatedFeatureCard
            title="Dedicated Support"
            description="Our team of technicians is committed to addressing and resolving your reported issues promptly."
          />
          <AnimatedFeatureCard
            title="Data-Driven Insights"
            description="Administrators gain valuable analytics to identify trends and optimize resource allocation."
          />
          <AnimatedFeatureCard
            title="Secure & Private"
            description="Your data and reports are handled with the utmost care and privacy."
          />
          <AnimatedFeatureCard
            title="Community Engagement"
            description="Connect with local authorities and fellow citizens to foster a proactive community."
          />
          <AnimatedFeatureCard
            title="User-Friendly Interface"
            description="Navigate effortlessly through our intuitive design, making reporting and tracking simple."
          />
          <AnimatedFeatureCard
            title="Real-time Updates"
            description="Receive instant notifications on the progress of your reports and new issues in your area."
          />
        </FeatureGrid>
      </MoreFeaturesSection>

      <Title>Live Issue Map</Title>
      <Subtitle>
        Explore reported issues in your area and see what's being addressed.
      </Subtitle>
      <MapView />
    </HomePageContainer>
  );
};

export default HomePage;
