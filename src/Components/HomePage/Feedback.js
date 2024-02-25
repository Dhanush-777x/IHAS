import React, { useState } from 'react';
import Modal from 'react-modal';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const subject = encodeURIComponent('Feedback');
    const body = encodeURIComponent(feedback);

    // Replace recipient@example.com with your desired email address
    const emailAddress = 'dhanushmani1504@gmail.com';
    
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    
    // Here you can implement the logic to submit the feedback to your backend if needed
    console.log("Submitted feedback:", feedback);
    
    // Clear the input after submission if needed
    setFeedback('');
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className='text-gray-800'>Feedback</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Feedback Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '500px',
            height: '300px',
            margin: 'auto',
            borderRadius: '8px',
            border: '1px solid #ccc',
            padding: '20px',
            textAlign: 'center'
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedbackInput mb-4">Enter your feedback:</label>
          <br />
          <textarea
            id="feedbackInput"
            className='p-2 border-black'
            value={feedback}
            onChange={handleInputChange}
            placeholder='Enter feedback here'
            rows={4}
            cols={30}
            required
            style={{ marginBottom: '10px' }}
          />
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
        <button onClick={() => setModalIsOpen(false)} style={{ marginTop: '10px' }}>Close</button>
      </Modal>
    </div>
  );
}

export default Feedback;
