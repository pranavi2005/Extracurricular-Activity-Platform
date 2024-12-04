// src/Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Welcome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
      </header>
      <h1 style={styles.mainHeading}>Extracurricular Activity Platform</h1>
      <h2 style={styles.caption}>Explore. Engage. Excel.</h2>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <p style={styles.descriptionText}>
            Extracurricular activity platform is a vibrant community of students passionate about exploring interests beyond academics.
            Our club provides a platform for members to discover new talents, develop skills, and build lifelong connections.
            Join us to unleash your creativity, challenge yourself, and make unforgettable memories.
          </p>
        </div>
      </div>
      {/* Image Slider Section */}
      {/* <div style={styles.sliderContainer}>
        <Slider {...settings}>
          <div style={styles.slide}>
            <img src="/images/image1.jpg" alt="Image 1" style={styles.slideImage} />
          </div>
          <div style={styles.slide}>
            <img src="/images/image2.jpg" alt="Image 2" style={styles.slideImage} />
          </div>
          <div style={styles.slide}>
            <img src="/images/image3.jpg" alt="Image 3" style={styles.slideImage} />
          </div>
          <div style={styles.slide}>
            <img src="/images/image4.jpg" alt="Image 4" style={styles.slideImage} />
          </div>
          <div style={styles.slide}>
            <img src="/images/image5.jpg" alt="Image 5" style={styles.slideImage} />
          </div>
          <div style={styles.slide}>
            <img src="/images/image6.jpg" alt="Image 6" style={styles.slideImage} />
          </div>
        </Slider>
      </div> */}
      {/* Contact Details Section */}
      <div style={styles.contactDetailsSection}>
        <h3 style={styles.contactHeading}>Contact Us</h3>
        <div style={styles.contactDetails}>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <span style={styles.contactText}>extracurricular.active@gmail.com</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} />
            <span style={styles.contactText}>+91 98765 43210</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            <span style={styles.contactText}>@extracurricular_activities</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: 'url("/images/welcome.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'overlay',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    padding: '10px 20px',
    top: '20px',
    right: '20px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  textContainer: {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'left',
  },
  mainHeading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
  },
  caption: {
    fontSize: '1.5rem',
    color: '#ddd',
    margin: '5px 0',
  },
  descriptionText: {
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.6',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  // sliderContainer: {
  //   marginTop: '40px',
  // },
  // slide: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  // slideImage: {
  //   width: '80%',
  //   height: 'auto',
  //   borderRadius: '10px',
  // },
  contactDetailsSection: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '20px auto',
  },
  contactHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  contactText: {
    fontSize: '1rem',
    color: '#fff',
  },
};

export default Welcome;
