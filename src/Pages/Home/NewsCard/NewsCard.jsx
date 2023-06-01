import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBookmark, BsShare, BsEye } from "react-icons/bs";
import moment from "moment";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const NewsCard = ({ news }) => {
  console.log(news);
  const {
    _id,
    title,
    details,
    image_url,
    author,
    published_date,
    rating,
    total_view,
  } = news;
  return (
    <Card className=" my-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "42px" }} src={author?.img} roundedCircle />
        {/* <div className="d-flex flex-grow-1"> */}
        <div className="ps-2 mt-3 flex-grow-1">
          <p className="mb-0">{author.name}</p>
          <p> {moment(author?.published_date).format("yyyy-mm-D")}</p>
        </div>
        <div>
          <BsBookmark className="mx-2" />
          <BsShare />
        </div>
        {/* </div> */}
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating?.number || 0)}
            readOnly
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div className="d-flex ">
          <BsEye className="mt-1"></BsEye>
          <p>{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
