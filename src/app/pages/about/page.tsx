import "./styles.css";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="aboutPage">
      <h2 id="aboutPageTitle">ABOUT US</h2>
      <div id="aboutPageText">
        <p className="aboutParag">
          We are a team of experienced IT professionals who are passionate about
          the hookah industry. Our mission is to revolutionize the way people
          think about hookah by breaking down outdated stereotypes and raising
          the industry to a new level of quality that is in line with modern
          trends.
        </p>
        <p className="aboutParag">
          We believe in creating a business with a human touch, and leveraging
          technology to simplify and streamline processes that used to be
          time-consuming and labor-intensive. Our goal is to make hookah a
          pleasure for both consumers and service providers alike.
        </p>
        <p className="aboutParag">
          With our years of experience and expertise, we are dedicated to
          providing innovative solutions and services that help businesses in
          the hookah industry thrive. We are excited to be a part of this
          growing industry and look forward to shaping its future with our fresh
          perspective and ideas.
        </p>
      </div>
      <div id="aboutCommand">
        <div className="commandMate">
          <Image src="/alexandr.jpg" alt="alexandr" width={64} height={64} />
          <div>
            <h4 className="commandMateName">Alexandr Petrov</h4>
            <span>CO-FOUNDER, CHIEF TECHNICAL OFFICER</span>
          </div>
        </div>
        <div className="commandMate">
          <Image src="/viacheslav.jpg" alt="alexandr" width={64} height={64} />
          <div>
            <h4 className="commandMateName">Viacheslav Petrov</h4>
            <span>CO-FOUNDER, PROJECT MANAGER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
