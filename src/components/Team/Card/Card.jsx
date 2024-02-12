import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Card({ id, name, image, pos, email, insta, git, lin }) {
  return (
    <>
      <div className="card" id={id}>
        <img src={image} alt="" className="img" draggable={false} />
        <div className="container">
          <h1 className="title">{name}</h1>
          <div className="ruler"></div>
          <p className="pos">{pos}</p>
          <p className="email">{email}</p>
          <ul className="sizes-box">
            <a href={lin}>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </a>
            <a href={git}>
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>
            <a href={insta}>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
