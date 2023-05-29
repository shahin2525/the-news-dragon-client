import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from "../../../assets/bg1.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="px-5 my-2" variant="outline-primary">
        {" "}
        <FaGoogle />
        <span className="m-2"> Login with google</span>
      </Button>
      <Button className="px-5 my-2 " variant="outline-secondary">
        <FaGithub />
        <span className="m-2">Login with github</span>
      </Button>
      <h1 className="my-2">find us on</h1>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook></FaFacebook>Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter />
          Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram />
          Instagram
        </ListGroup.Item>
      </ListGroup>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
        <h1>dfdfd</h1>
      </div>
    </div>
  );
};

export default RightNav;
