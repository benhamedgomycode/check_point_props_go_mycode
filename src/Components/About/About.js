import React from 'react'
import PropTypes from "prop-types";
function About({fullname,location,degree,phone,email,dateOfBirth,experience,careerLevel}) {
    return (
        <div className="about">
        <h2>About Me</h2>
        <hr />
        <div className="Details">
          <p className="title">FullName: <br /> Location: <br /> Degree: <br /> Phone: <br /> Email: </p>
          <p >{fullname} <br /> {location} <br /> {degree} <br /> {phone} <br /> {email} </p>
          <p className="title">Date of Birth: <br /> Experience: <br /> Career Level: </p>
          <p >{dateOfBirth} <br /> {experience} <br /> {careerLevel} </p>
        </div>
      </div>
    )
}

About.defaultProps = {
fullname:"Your Name",
location:"Your location",
degree:"Your degree",
phone:"Your phone",
email:"Your email",
dateOfBirth:"Your Date Of Birth",
experience:"Your Experience Years",
careerLevel:"Your Career Level"
};
About.ProtoTypes={
fullname:PropTypes.string,
location:PropTypes.string,
degree:PropTypes.string,
phone:PropTypes.string,
email:PropTypes.string,
dateOfBirth:PropTypes.string,
experience:PropTypes.string,
careerLevel:PropTypes.string
}

export default About
