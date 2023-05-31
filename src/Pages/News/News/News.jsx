import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import EditorsInsite from "../EditorsInsite/EditorsInsite";
const News = () => {
  const news = useLoaderData();
  const { image_url, title, details, category_id } = news;
  console.log(news);
  return (
    <div>
      <h1>Dragon News</h1>
      <Card className="mb-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/catagori/${category_id}`} className="bg-danger">
            <Button variant="danger">
              <BsArrowLeftShort />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsite></EditorsInsite>
    </div>
  );
};

export default News;
