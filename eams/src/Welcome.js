// src/Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function Welcome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Move 1 image at a time
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
        <div style={styles.text}>
          <p style={styles.description}>
            Extracurricular activity platform is a vibrant community of students passionate about exploring interests beyond academics.
            Our club provides a platform for members to discover new talents, develop skills, and build lifelong connections.
            Join us to unleash your creativity, challenge yourself, and make unforgettable memories.
          </p>
        </div>
      </div>

      {/* Image Slider Section */}
      <div style={styles.sliderContainer}>
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
          {/* Add more images as needed */}
        </Slider>
      </div>

      {/* Contact Us Section */}
      <div style={styles.contactUsSection}>
        <h3 style={styles.contactUsHeading}>Contact Us</h3>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input type="text" id="name" name="name" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="message" style={styles.textarea} required></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
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
    backgroundImage: 'url("/images/welcome-dashboard.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    backgroundBlendMode: 'overlay',
    position: 'relative', // Needed for absolute positioning of header
  },
  header: {
    position: 'absolute',
    padding: '10px 20px',
    top: '20px', // Distance from the top
    right: '20px', // Distance from the right
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  text: {
    width: '100%',  // Set to full width of the container
    paddingLeft: '20px',  // Optional padding for text
    paddingRight: '20px', // Optional padding for text
    textAlign: 'left', // Align text to the left
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
  description: {
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.6',
    margin: '20px 0',
    paddingBottom: '20px',
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
  sliderContainer: {
    marginTop: '40px',  // Space between content and slider
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
  },
  slideImage: {
    width: '80%',  // Adjust the image width within the slider
    height: 'auto',
    borderRadius: '10px',
  },
  contactUsSection: {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  contactUsHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
    maxWidth: '500px',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '5px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '150px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '500px',
  },
};

export default Welcome;
