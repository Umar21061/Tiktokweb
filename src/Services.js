import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = ({ homeRef, onBuyAccountClick, scrollToSection, refs }) => {
  return (
    <div className="services-section">
      <Helmet>
        <title>TikTok Account Monetization & Shop Services | CreativeXperts</title>
        <meta
          name="description"
          content="Monetize your TikTok account faster with CreativeXperts. Get secure, real-user accounts with fast delivery and guaranteed satisfaction."
        />
        <meta
          name="keywords"
          content="TikTok account monetization, buy TikTok accounts, TikTok shop services, real TikTok users, CreativeXperts, TikTok growth"
        />
        <meta property="og:title" content="TikTok Monetization & Shop | CreativeXperts" />
        <meta
          property="og:description"
          content="Secure your TikTok account today with CreativeXperts. Fast delivery and 70% discount on global TikTok accounts!"
        />
        <meta property="og:url" content="https://www.tiktokcheapeastservices.store/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.tiktokcheapeastservices.store/logo3.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tiktokcheapeastservices.store/" />
      </Helmet>

      <Container className="py-5 h-100">
        <Row className="content-row">
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

          <Col md={5}>
            <Card className="sale-offer-box text-white">
              <Card.Body>
                <h4>Buy TikTok Accounts</h4>
                <p>🚀 Secure Your TikTok Account Today 70% Discount for a Limited Time!</p>
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
