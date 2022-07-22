import React from "react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine
} from "react-icons/ri";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <div className="footer">
        <div className="inner-footer">
          <div className="logo">Fantalicious</div>
          <div className="social-media">
            <a href="#">
              <div className="i">
                <RiFacebookCircleLine />
              </div>
            </a>
            <a href="#">
              <div className="i">
                <RiInstagramLine />
              </div>
            </a>
            <a href="#">
              <div className="i">
                <RiLinkedinBoxLine />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; Food and Burps 2020.
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  .logo {
    transform: rotate(0deg);
    padding-top: 1rem;
    color: white;
  }
  .footer {
    height: 40%;
    width: 100%;
    background: #00121b;
    display: block;
  }
  .inner-footer {
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: center;
  }
  .footer-bottom {
    padding: 10px;
    background: #00121b;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
  .social-media {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }

  .social-media a {
    text-decoration: none;
  }

  .social-media .i {
    height: 25px;
    width: 25px;
    margin: 20px 10px;
    padding: 4px;
    color: #fff;
    transition: 0.5s;
  }

  .social-media .i:hover {
    transform: scale(1.5);
  }
`;
