import React from 'react';
import './Promotion.css';
import { Helmet } from 'react-helmet';

import logo3 from './images/logo3.jpg';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Promotion = () => {
  const features = [
    'Organic Audience',
    'Viral Marketing',
    '100% Organic Traffic',
    'Increase Followers',
    'Increase Likes',
    'Increase Views',
    'Real and Active Users'
  ];

  return (
    <div className="promotion-container text-white">
      <Helmet>
  <title>TikTok Organic Promotion | Real & Active Users</title>
  <meta
    name="description"
    content="Promote your TikTok account organically with real, active users. Get likes, views, and followers using our viral marketing strategies in Pakistan."
  />
  <meta
    name="keywords"
    content="TikTok promotion, organic TikTok followers, real TikTok users, increase TikTok views, TikTok marketing Pakistan"
  />
  <meta property="og:title" content="TikTok Organic Promotion" />
  <meta
    property="og:description"
    content="Boost your TikTok engagement with 100% organic traffic and active users. Start your promotion now."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.tiktokcheapeastservices.store/" />
  <meta property="og:image" content="https://www.tiktokcheapeastservices.store/logo3.jpg" />
  <link rel="canonical" href="https://www.tiktokcheapeastservices.store/" />
</Helmet>

      <div className="container-fluid">
        <div className="row">
          {/* Left Side Image and Order Text */}
          <div className="col-md-6 d-flex flex-column align-items-center text-center">
            <img src={logo3} alt="Promotion Logo" className="img-fluid promo-img" />
            <h4 className="order-now-text mt-3 text-success">Order Now</h4>
          </div>

          {/* Right Side Text with offset */}
          <div className="col-md-5 offset-md-1 promotion-text text-start d-flex flex-column justify-content-between">
            <div>
              <div className="promotion-heading mb-4">
                <h1 className="text-white">ORGANIC</h1>
                <h1>
                  <span className="text-success">TIK</span>
                  <span className="text-danger">TOK</span>
                </h1>
                <h1 className="text-white">PROMOTION</h1>
              </div>

              <ul className="list-unstyled">
                {features.map((feature, index) => (
                  <li key={index} className="mb-2 d-flex align-items-center">
                    <CheckCircleFill color="#dc3545" className="me-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red and Green line at the bottom */}
            <div className="color-line mt-4">
              <div className="line-wrapper">
                <div className="half-line danger"></div>
                <div className="half-line success"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
