import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <content className="content">
      <div className="content-content">
        <div className="content-section">
          <h3>Explore</h3>
          <div className="explore-boxes">
            <div className="explore-box">
              <h4>Plant Details</h4>
              <p>Explore detailed information about different plants.</p>
              <Link to="/details" className="explore-link">Explore<FaArrowRight/></Link>
            </div>
            <div className="explore-box">
              <h4>Fruits</h4>
              <p>Discover various types of fruits and their benefits.</p>
              <Link to="/fruits" className="explore-link">Explore<FaArrowRight /></Link>
            </div>
            <div className="explore-box">
              <h4>Flowers</h4>
              <p>Learn about different flowers and their meanings.</p>
              <Link to="/flowers" className="explore-link">Explore<FaArrowRight /></Link>
            </div>
          </div>
        </div>
        <div className="content-section">
          <br/>
          <h3>About Plant Care</h3>
          <p>Welcome to Plant Care - We are the destination of plant decor for the modern plant lover.</p>
          <p> Our mission is to help you on your journey from plant newbie to plant fanatic.</p>
          <p>We are designed to transform your home and life with nature.</p>
        </div>
        <div className="content-section">
          <br/>
          <h3>Contact</h3>
          <p>Want to get in touch or have any suggestion? <br/>Just drop a mail or contact on the number below!</p>
          <br/>
          <p>Email: plantcare@gmail.com</p>
          <p>Phone: +918766896071</p>
          <br/>
        </div>
      </div>
    </content>
  );
};

export default Content;
