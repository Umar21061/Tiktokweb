import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Refund.css';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';

const Refund = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        paymentMethod: '',
        accountNumber: '',
        orderCategory: '',
        orderQuantity: '',
        totalAmount: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xrblaodr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    paymentMethod: '',
                    accountNumber: '',
                    orderCategory: '',
                    orderQuantity: '',
                    totalAmount: ''
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    return (
        <div className="refund-container">
            <Container className="py-5">
                {/* Back Button */}
                <Row className="align-items-center mb-4">
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

                <h2 className="text-white mb-4 text-center">Refund Request</h2>

                {submitted && (
                    <Alert variant="success" className="text-center">
                        ✅ Your refund request has been submitted.
                    </Alert>
                )}

                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formPaymentMethod">
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                >
                                    <option value="">Select Payment Method</option>
                                    <option>JazzCash</option>
                                    <option>EasyPaisa</option>
                                    <option>Bank Transfer</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formAccountNumber">
                                <Form.Label>Account Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formOrderCategory">
                                <Form.Label>Order Category</Form.Label>
                                <Form.Select
                                    name="orderCategory"
                                    value={formData.orderCategory}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                >
                                    <option value="">Select Order Category</option>
                                    <option value="TikTok Views">TikTok Views</option>
                                    <option value="Likes">TikTok Likes</option>
                                    <option value="Followers">TikTok Followers</option>
                                    <option value="Buy Account">Buy Account</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formOrderQuantity">
                                <Form.Label>Order Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="orderQuantity"
                                    value={formData.orderQuantity}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formTotalAmount">
                                <Form.Label>Total Amount Paid</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="totalAmount"
                                    value={formData.totalAmount}
                                    onChange={handleChange}
                                    required
                                    className="input-style"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="text-center mt-4">
                        <Button variant="light" type="submit">
                            Submit Request
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Refund;
