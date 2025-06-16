import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = ({ homeRef, onBuyAccountClick, scrollToSection, refs }) => {
  return (
    <div className="services-section">
      <Container className="py-5 h-100">
        <Row className="content-row">
          {/* Left Side */}
          <Col md={7}>
            <h1 className="tiktokshop-title">TikTok Shop</h1>
            <h2 className="tiktokshop-title-2 mt-4">Account Monetization </h2>
            <p className="lead mt-3">
              We help creators monetize faster with trusted tools and audience growth services.
            </p>
            <p className="small-text mb-4">
  <span style={{ color: '#198754' }}>Secure, real users.</span>{' '}
  <span style={{ color: '#dc3545' }}>Fast delivery. 100% satisfaction guaranteed.</span>
</p>

            <div className="text-start">
              <Button
                variant="danger"
                className="get-started-btn"
                onClick={() => scrollToSection(refs.homeRef)}
              >
                Get Started
              </Button>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={5}>
            <Card className="sale-offer-box text-white">
              <Card.Body>
                <h4>Buy TikTok Accounts</h4>
                <p>🚀 Secure Your TikTok Account Today  70% Discount for a Limited Time!</p>
                <p>✅ All Countries TikTok Accounts Available UK, UAE, USA & More!</p>
                <Button className="custom-btn" onClick={onBuyAccountClick}>
                  Buy TikTok Account
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
