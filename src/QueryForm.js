import React, { useState } from 'react';
import './QueryForm.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xrblaodr", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="query-form-container py-5">
      <Container>
        <h2 className="text-center text-white mb-4">Have a Complaint or Query?</h2>
        <p className="text-center text-white mb-4">We're here to help. Fill out the form below and we'll get back to you.</p>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      className="input-style"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      className="input-style"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label className="form-label">Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  className="input-style"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="form-label">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  className="input-style"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="light" type="submit" className="submit-btn">
                  Send Message
                </Button>
              </div>
            </Form>
            {status === 'success' && <Alert variant="success" className="mt-3">Your message was sent successfully!</Alert>}
            {status === 'error' && <Alert variant="danger" className="mt-3">Failed to send. Please try again.</Alert>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QueryForm;
