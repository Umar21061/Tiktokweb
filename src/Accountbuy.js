import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accountbuy.css';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';

const Skill = () => {
    const [formData, setFormData] = useState({
        country: '',
        accountType: '',
        followersRange: '',
        gifterLevel: '',
        email: '',
        transactionId: '',
        paymentSuccess: false,
        paymentMethod: '',
        paymentDetails: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const paymentInfoMap = {
        jazzcash: 'Till ID No [891491495]',
        bank: 'PK05MEZN0098540104587685'
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePaymentChange = (e) => {
        const method = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            paymentMethod: method,
            paymentDetails: paymentInfoMap[method] || ''
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
📦 New TikTok Account Purchase Request

🌍 Country: ${formData.country}
👤 Account Type: ${formData.accountType}
📈 Followers: ${formData.followersRange || 'N/A'}
🎁 Gifter Level: ${formData.gifterLevel || 'N/A'}

💳 Payment Method: ${formData.paymentMethod}
🏦 Payment Details: ${formData.paymentDetails}
🧾 Transaction ID: ${formData.transactionId}
✅ Payment Success: ${formData.paymentSuccess ? 'Yes' : 'No'}
            `
        };

        try {
            const response = await fetch('https://formspree.io/f/mwpbobva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    country: '',
                    accountType: '',
                    followersRange: '',
                    gifterLevel: '',
                    email: '',
                    transactionId: '',
                    paymentSuccess: false,
                    paymentMethod: '',
                    paymentDetails: ''
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

    const reloadHomePage = () => {
        window.location.href = '/';
    };

    return (
        <div className="skill-section form-container">
            <Container className="py-5">
                <Row className="align-items-center mb-4 flex-column flex-sm-row">
  {/* Buttons row for small screens */}
  <Col xs={12} className="d-sm-none text-end mb-2">
    <div className="button-group-custom">
      <Button
        className="me-2"
        style={{
          backgroundColor: '#c82333',
          border: '1px solid white',
          color: 'white',
        }}
        onClick={reloadHomePage}
      >
        Back
      </Button>
      <Button
        style={{
          backgroundColor: '#c82333',
          border: '1px solid white',
          color: 'white',
        }}
        onClick={reloadHomePage}
      >
        New Order
      </Button>
    </div>
  </Col>

  {/* Title centered on small screens, left-aligned on larger */}
  <Col xs={12} sm={9} className="text-center text-sm-start">
    <h2 className="text-white mb-0">Buy TikTok Account</h2>
  </Col>

  {/* Buttons on right for desktop only */}
  <Col sm className="d-none d-sm-block text-end">
    <div className="button-group-custom">
      <Button
        className="me-2"
        style={{
          backgroundColor: '#c82333',
          border: '1px solid white',
          color: 'white',
        }}
        onClick={reloadHomePage}
      >
        Back
      </Button>
      <Button
        style={{
          backgroundColor: '#c82333',
          border: '1px solid white',
          color: 'white',
        }}
        onClick={reloadHomePage}
      >
        New Order
      </Button>
    </div>
  </Col>
</Row>


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
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formCountry">
                                <Form.Label>Choose Country</Form.Label>
                                <Form.Select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="form-select input-style"
                                >
                                    <option value="">Select a country</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>UAE</option>
                                    <option>India</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formAccountType">
                                <Form.Label>Account Type</Form.Label>
                                <Form.Select
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleChange}
                                    required
                                    className="form-select input-style"
                                >
                                    <option value="">Select type</option>
                                    <option>New</option>
                                    <option>Used</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {formData.accountType === 'Used' && (
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formFollowersRange">
                                    <Form.Label>Followers</Form.Label>
                                    <Form.Select
                                        name="followersRange"
                                        value={formData.followersRange}
                                        onChange={handleChange}
                                        required
                                        className="form-select input-style"
                                    >
                                        <option value="">Please select followers</option>
                                        <option>1000 to 5000</option>
                                        <option>5000 to 10000</option>
                                        <option>10000+</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGifterLevel">
                                    <Form.Label>Gifter Level</Form.Label>
                                    <Form.Select
                                        name="gifterLevel"
                                        value={formData.gifterLevel}
                                        onChange={handleChange}
                                        required
                                        className="form-select input-style"
                                    >
                                        <option value="">Select Gifter Level</option>
                                        <option>1-10</option>
                                        <option>10-20</option>
                                        <option>20+</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    )}

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
                                    <option value="">Please select your payment method</option>
                                    <option value="jazzcash">JazzCash</option>
                                    <option value="bank">Meezan Bank</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

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

                    <Row className="mb-3">
                        <Col md={6} className="d-flex align-items-center pt-4">
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

                   <div className="submit-btn-wrapper mt-4">
  <Button variant="light" type="submit">
    Submit Request
  </Button>
</div>

                </Form>
            </Container>
        </div>
    );
};

export default Skill;
