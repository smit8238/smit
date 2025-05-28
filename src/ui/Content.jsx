import React from 'react'
import './Home1.css';

export const Content = () => {
  const styles = {
    container: {
      // backgroundColor: '#f7f7f7',
     
      padding: '20px',
    },
  


    tryButton: {
      backgroundColor: '#6f42c1',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    main: {
      marginTop: '40px',
    },
    link: {
      color: '#6f42c1',
      textDecoration: 'underline',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: '5px',
   
      backgroundColor: '#ebd7d7',   border: '2px solid #000000',
    },
    textarea: {
      padding: '10px',
      borderRadius: '5px',
      border: '2px solid #000000',
      height: '100px',
      backgroundColor: '#ebd7d7',
    },
    submitButton: {
      backgroundColor: '#6f42c1',
      color: '#fff',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    footer: {
      marginTop: '40px',
      backgroundColor: '#ebd7d7',
    },
  };
  return(
    <div style={styles.container} >
      
      <main style={styles.main}>
        <h2>Contact us</h2>
        <p>
          Need to get in touch with us? Either fill out the form with your inquiry or find the
          <a href="#department-email" style={styles.link}> department email</a> you'd like to contact below.
        </p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <input type="text" placeholder="First name*" required style={styles.input} />
            <input type="text" placeholder="Last name" style={styles.input} />
          </div>
          <input type="email" placeholder="Email*" required style={styles.input} />
          <textarea placeholder="What can we help you with?" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </main>
      <footer style={styles.footer}>
        {/* Footer content can be added here */}
      </footer>
    </div>
  );
};


  
