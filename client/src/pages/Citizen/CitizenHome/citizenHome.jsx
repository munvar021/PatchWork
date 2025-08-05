import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMapMarkedAlt,
  faFileAlt,
  faChartLine,
  faLightbulb,
  faHandsHelping,
  faLocationDot,
  faExclamationTriangle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import {
  CitizenHomeContainer,
  WelcomeBanner,
  QuickActions,
  QuickActionButton,
  LiveIssueFeedContainer,
  IssueCard,
  InsightsContainer,
  InsightCard,
  TestimonialsContainer,
  TestimonialCard,
  HelpSupportContainer,
  AnimatedSection,
} from "./citizenHomeStyles";
import { useAuth } from "../../../context/AuthContext";

const CitizenHome = () => {
  const navigate = useNavigate();
  const { userName } = useAuth(); // Assuming userName is available in AuthContext

  const [liveIssues, setLiveIssues] = useState([]);
  const [insights, setInsights] = useState({
    totalIssues: 0,
    resolutionRate: 0,
    avgTimeToFix: "0 days",
  });
  const [testimonials, setTestimonials] = useState([]);
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  // Animation controls for each section
  const welcomeControls = useAnimation();
  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickActionsControls = useAnimation();
  const [quickActionsRef, quickActionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const liveIssueFeedControls = useAnimation();
  const [liveIssueFeedRef, liveIssueFeedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const insightsControls = useAnimation();
  const [insightsRef, insightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonialsControls = useAnimation();
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const helpSupportControls = useAnimation();
  const [helpSupportRef, helpSupportInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        setSlidePercentage(50);
      } else {
        setSlidePercentage(33.33);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (welcomeInView) {
      welcomeControls.start("visible");
    }
  }, [welcomeControls, welcomeInView]);

  useEffect(() => {
    if (quickActionsInView) {
      quickActionsControls.start("visible");
    }
  }, [quickActionsControls, quickActionsInView]);

  useEffect(() => {
    if (liveIssueFeedInView) {
      liveIssueFeedControls.start("visible");
    }
  }, [liveIssueFeedControls, liveIssueFeedInView]);

  useEffect(() => {
    if (insightsInView) {
      insightsControls.start("visible");
    }
  }, [insightsControls, insightsInView]);

  useEffect(() => {
    if (testimonialsInView) {
      testimonialsControls.start("visible");
    }
  }, [testimonialsControls, testimonialsInView]);

  useEffect(() => {
    if (helpSupportInView) {
      helpSupportControls.start("visible");
    }
  }, [helpSupportControls, helpSupportInView]);

  useEffect(() => {
    // Dummy data for Live Issues
    setLiveIssues([
      {
        id: 1,
        location: "Main Street",
        category: "Pothole",
        severity: "High",
        timeReported: "2 hours ago",
      },
      {
        id: 2,
        location: "Elm Avenue",
        category: "Streetlight Out",
        severity: "Medium",
        timeReported: "1 day ago",
      },
      {
        id: 3,
        location: "Central Park",
        category: "Graffiti",
        severity: "Low",
        timeReported: "3 days ago",
      },
      {
        id: 4,
        location: "Oak Street",
        category: "Water Leak",
        severity: "High",
        timeReported: "5 hours ago",
      },
      {
        id: 5,
        location: "Pine Road",
        category: "Illegal Dumping",
        severity: "Medium",
        timeReported: "2 days ago",
      },
    ]);

    // Dummy data for Insights
    setInsights({
      totalIssues: 1250,
      resolutionRate: 92,
      avgTimeToFix: "3.5 days",
    });

    // Dummy data for Testimonials
    setTestimonials([
      {
        id: 1,
        text: "The new reporting system is incredibly easy to use and effective! My issue was resolved within days.",
        author: "Jane Doe",
      },
      {
        id: 2,
        text: "I love how transparent the process is. I can track my report's progress every step of the way.",
        author: "John Smith",
      },
      {
        id: 3,
        text: "Finally, a platform that truly empowers citizens. Our city is becoming a better place thanks to this initiative.",
        author: "Emily White",
      },
    ]);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <CitizenHomeContainer>
      <WelcomeBanner
        ref={welcomeRef}
        initial="hidden"
        animate={welcomeControls}
        variants={fadeIn}
      >
        <div>
          <h1>Empowering citizens to fix cities—one report at a time.</h1>
          <p>
            {getGreeting()}, {userName || "Citizen"}!
          </p>
          <span>Logged in as: Citizen</span>
        </div>
      </WelcomeBanner>

      <QuickActions
        ref={quickActionsRef}
        initial="hidden"
        animate={quickActionsControls}
        variants={fadeIn}
      >
        <QuickActionButton onClick={() => navigate("/report")}>
          <FontAwesomeIcon icon={faPlusCircle} />
          <span>Report an Issue</span>
        </QuickActionButton>
        <QuickActionButton onClick={() => navigate("/map")}>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>View Map</span>
        </QuickActionButton>
        <QuickActionButton onClick={() => navigate("/myreports")}>
          <FontAwesomeIcon icon={faFileAlt} />
          <span>My Reports</span>
        </QuickActionButton>
      </QuickActions>

      <LiveIssueFeedContainer
        ref={liveIssueFeedRef}
        initial="hidden"
        animate={liveIssueFeedControls}
        variants={slideInLeft}
      >
        <h3>Live Issue Feed</h3>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false} // Added to prevent thumb errors
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={slidePercentage}
          emulateTouch={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={false}
        >
          {liveIssues.map((issue) => (
            <IssueCard key={issue.id}>
              <h4>{issue.category}</h4>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Location:{" "}
                <span>{issue.location}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} /> Severity:{" "}
                <span>{issue.severity}</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} /> Reported:{" "}
                <span>{issue.timeReported}</span>
              </p>
            </IssueCard>
          ))}
        </Carousel>
      </LiveIssueFeedContainer>

      <InsightsContainer
        ref={insightsRef}
        initial="hidden"
        animate={insightsControls}
        variants={slideInRight}
      >
        <h3>
          <FontAwesomeIcon icon={faChartLine} /> Insights
        </h3>
        <InsightCard>
          <h4>{insights.totalIssues}</h4>
          <p>Total Issues Submitted</p>
        </InsightCard>
        <InsightCard>
          <h4>{insights.resolutionRate}%</h4>
          <p>Resolution Rate</p>
        </InsightCard>
        <InsightCard>
          <h4>{insights.avgTimeToFix}</h4>
          <p>Avg. Time to Fix</p>
        </InsightCard>
      </InsightsContainer>

      <AnimatedSection
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={fadeIn}
      >
        <TestimonialsContainer>
          <h3>
            <FontAwesomeIcon icon={faLightbulb} /> What Citizens Say
          </h3>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false} // Added to prevent thumb errors
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={false}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <p>"{testimonial.text}"</p>
                <span>- {testimonial.author}</span>
              </TestimonialCard>
            ))}
          </Carousel>
        </TestimonialsContainer>
      </AnimatedSection>

      <HelpSupportContainer
        ref={helpSupportRef}
        initial="hidden"
        animate={helpSupportControls}
        variants={fadeIn}
      >
        <h3>
          <FontAwesomeIcon icon={faHandsHelping} /> Help & Support
        </h3>
        <p>
          Need assistance? Visit our comprehensive Help Center or contact us
          directly.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            toast.info("Help Center link clicked!");
          }}
        >
          Go to Help Center
        </button>
      </HelpSupportContainer>
    </CitizenHomeContainer>
  );
};

export default CitizenHome;
