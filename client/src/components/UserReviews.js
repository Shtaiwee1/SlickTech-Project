import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = (id) => {
    setReviews(reviews.filter((review) => review._id !== id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getUserReviews", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loaded && reviews.length !== 0 && (
        <h4 className="mb-3 mt-5 text-start">Reviews:</h4>
      )}
      {loaded &&
        reviews.map((review, idx) => (
          <Card className="p-0 mb-5" key={idx}>
            <Card.Header as="h5" className="text-start">
              {review.product.title}
            </Card.Header>
            <Card.Header as="h6" className="text-start">
              Rating: {review.rating}
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-start">{review.comment}</Card.Text>
              <DeleteButton id={review._id} successCallBack={removeFromDom} />
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default UserReviews;
