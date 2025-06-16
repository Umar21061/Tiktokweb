import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const HomePage = () => {
  const [formData, setFormData] = useState({
    category: '',
    quantity: '',
    amount: 0,
    email: '',
    transactionId: '',
    link: '',
    paymentMethod: '',
    paymentDetails: '',
    paymentSuccess: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const paymentInfoMap = {
    jazzcash: 'Till ID No [891491495]',
    bank: 'IBAN PK05MEZN0098540104587685',
  };

  const calculateAmount = (cat, qty) => {
    let amt = 0;
    const q = parseInt(qty, 10);
    if (!cat || isNaN(q)) return 0;

    switch (cat) {
      case 'followers':
        amt = (q / 1000) * 500;
        break;
      case 'views':
        amt = (q / 1000) * 20;
        break;
      case 'likes':
        amt = (q / 1000) * 100;
        break;
      case 'followers_advanced':
        amt = (q / 1000) * 1200;
        break;
      case 'views_advanced':
        amt = (q / 1000) * 50;
        break;
      case 'likes_advanced':
        amt = (q / 1000) * 250;
        break;
      default:
        amt = 0;
    }

    return Math.ceil(amt);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedForm = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    };

    if (name === 'quantity' || name === 'category') {
      const newQuantity = name === 'quantity' ? value : formData.quantity;
      const newCategory = name === 'category' ? value : formData.category;
      updatedForm.amount = calculateAmount(newCategory, newQuantity);
    }

    setFormData(updatedForm);
  };

  const handlePaymentChange = (e) => {
    const method = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: method,
      paymentDetails: paymentInfoMap[method] || '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSubmitted(false);

    const payload = {
      _replyto: formData.email,
      email: formData.email,
      message: `
📦 New TikTok Service Request

📋 Category: ${formData.category}
🔢 Quantity: ${formData.quantity}
🔗 Link: ${formData.link}
💰 Amount: PKR ${formData.amount}

💳 Payment Method: ${formData.paymentMethod}
🏦 Payment Details: ${formData.paymentDetails}
🧾 Transaction ID: ${formData.transactionId}
✅ Payment Success: ${formData.paymentSuccess ? 'Yes' : 'No'}
      `,
    };

    try {
      const response = await fetch('https://formspree.io/f/mwpbobva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          category: '',
          quantity: '',
          amount: 0,
          email: '',
          transactionId: '',
          link: '',
          paymentMethod: '',
          paymentDetails: '',
          paymentSuccess: false,
        });
      } else {
        setError('There was an error. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('There was an error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="home-section form-container">
      <Container className="py-5">
          <Row className="align-items-center mb-3">
          <Col className="text-end">
            <Button
              onClick={() => window.location.href = '/'}
              style={{
                backgroundColor: '#c82333',
                border: '1px solid white',
                color: 'white',
              }}
            >
              Back
            </Button>
             
          </Col>
        </Row>
        <h2 className="text-white mb-4">Submit Your TikTok Service Request</h2>
       

        {submitting && (
          <Alert variant="info" className="text-center">
            ⏳ Your order is processing...
          </Alert>
        )}
        {submitted && (
          <Alert variant="success" className="text-center">
            ✅ Thank you, your order has been submitted successfully.
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="text-center">
            ⚠️ {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit} autoComplete="off">
          {/* Row 1: Category and Quantity */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-select input-style"
                >
                  <option value="">Select Category</option>
                  <option value="followers">TikTok Followers</option>
                  <option value="views">TikTok Views</option>
                  <option value="likes">TikTok Likes</option>
                  <option value="followers_advanced">TikTok Followers [Non Drop, Instant Start, Real Audience]</option>
                  <option value="views_advanced">TikTok Views [Non Drop, Instant Start, Real Audience]</option>
                  <option value="likes_advanced">TikTok Likes [Non Drop, Instant Start, Real Audience]</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 2: Amount and Link */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAmount">
                <Form.Label>Total Amount (PKR)</Form.Label>
                <Form.Control
                  type="text"
                  name="amount"
                  value={formData.amount}
                  readOnly
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formLink">
                <Form.Label>Please enter your link here</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 3: Email and Payment Method */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handlePaymentChange}
                  required
                  className="form-select input-style"
                >
                  <option value="">Select Payment Method</option>
                  <option value="jazzcash">JazzCash</option>
                  <option value="bank">Meezan Bank</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Row 4: Payment Details and Transaction ID */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formPaymentDetails">
                <Form.Label>Payment Details</Form.Label>
                <Form.Control
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  readOnly
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formTransactionId">
                <Form.Label>Transaction ID</Form.Label>
                <Form.Control
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="form-control input-style"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 5: Checkbox and Button */}
          <Row className="mb-4">
            <Col md={6} className="d-flex align-items-center pt-2">
              <Form.Check
                type="checkbox"
                name="paymentSuccess"
                label="Payment Successful"
                onChange={handleChange}
                checked={formData.paymentSuccess}
                required
                className="text-white"
              />
            </Col>

           
          </Row>
          <Row>
           <Col md={7} className="text-end">
              <Button variant="light" type="submit">
                Submit Request
              </Button>
            </Col>
            </Row>
        </Form>
      </Container>
    </div>
  );
};

export default HomePage;
