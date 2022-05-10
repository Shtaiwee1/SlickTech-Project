import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/NavBar";
import { Button, Typography, Rating } from "@mui/material";
import ReviewForm from "../views/ReviewForm";
import ReviewList from "../views/ReviewList";
=======
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/NavBar'
import {Button , Typography , Rating} from '@mui/material';
import ReviewForm from '../views/ReviewForm'
import ReviewList from '../views/ReviewList'
import { io } from "socket.io-client";
>>>>>>> b072cfce5a2a906293f6bd84a76184d1b4f16568

const Detail = () => {
<<<<<<< HEAD
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);
=======
    const [product, setProduct] = useState({})
    const { productId } = useParams();
    const [reviews, setReviews] = useState([]);
<<<<<<< HEAD
    const [socket , setSocket]=useState(null);
=======
    const [loaded , setLoaded] = useState(false);

    
>>>>>>> ae4645556dee3dafd73fb7e3d4878e80378e2072
    
    useEffect(
        ()=>{
            const socket= io('http://localhost:5000')
            console.log(socket.on('first-message',(msg)=>{
                console.log(msg)
                
            }))
        },[]
    )
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + productId  , {withCredentials: true} )
            .then(res => {setProduct(res.data);
            setLoaded(true)  })
>>>>>>> b072cfce5a2a906293f6bd84a76184d1b4f16568

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + productId, {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })

      .catch((err) => console.error(err));
  }, [productId]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/getProductReviews",
        { productId },
        { withCredentials: true }
      )
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  const createReview = (review) => {
    axios
      .post(
        "http://localhost:8000/api/reviews",
        { ...review, productId },
        { withCredentials: true }
      )
      .then((res) => {
        setReviews([...reviews, res.data]);
      })
      .catch((err) => console.log(err));
  };

  var value = 4;

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <div style={{ width: "30%", height: "25rem" }}>
          {loaded && (
            <img
              src={require("../images/" + product.image)}
              alt="ff"
              className="imgCard"
              style={{ height: "100%", width: "100%" }}
            ></img>
          )}
        </div>
        <div
          style={{
            width: "50%",
            height: "25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            border: "2px solid rgba(158, 153, 158, 0.45)",
            textAlign: "start",
          }}
        >
          <div>
            <h1
              style={{ display: "inline", marginTop: "20px", marginLeft: "5%" }}
            >
              {" "}
              {product.title}
            </h1>
            <br />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "start",
                }}
              >
                <FontAwesomeIcon
                  style={{ marginLeft: "5%" }}
                  icon="star"
                  className="fa-lg "
                />
                <h2 style={{ display: "inline", marginTop: "20px" }}>
                  <Typography
                    style={{
                      marginLeft: "5%",
                      fontWeight: "700",
                      marginBottom: "10%",
                    }}
                    component="legend"
                  >
                    Rating:
                  </Typography>
                </h2>
                <Rating
                  style={{ marginLeft: "2%" }}
                  name="read-only"
                  value={value}
                  readOnly
                />
              </div>
              <hr />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
            }}
          >
            <FontAwesomeIcon
              style={{ marginLeft: "5%" }}
              icon="money-bill"
              className="fa-lg"
            />
            <Typography
              style={{
                marginLeft: "2%",
                fontWeight: "700",
                fontSize: "25px",
                width: "60px",
              }}
              component="legend"
            >
              Price:
            </Typography>
            <Button
              variant="contained"
              disabled
              style={{
                display: "inline",
                padding: "3px",
                fontSize: "18px",
                backgroundColor: "#1c96f8",
                color: "white",
                marginLeft: "3%",
                borderRadius: "10px",
              }}
            >
              {" "}
              {product.price} $
            </Button>
            <br />
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
              }}
            >
              <FontAwesomeIcon
                style={{ marginLeft: "5%" }}
                icon=" fa-circle-check"
                className=" fa-lg "
              />
              <Typography
                style={{
                  marginLeft: "1%",
                  fontWeight: "700",
                  fontSize: "25px",
                  width: "40%",
                }}
                component="legend"
              >
                Description:
              </Typography>
            </div>
            <p style={{ marginLeft: "5%", width: "80%" }}> {product.desc}</p>
            <br />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="contained">Buy Now</Button>
            <Button style={{ backgroundColor: "#ff3648" }} variant="contained">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <ReviewForm
        onSubmitProp={createReview}
        initialComment=""
        initialRating=""
      />

      <div style={{ marginTop: "10%", textAlign: "start", marginLeft: "5%" }}>
        <h2 style={{ marginBottom: "2%" }}>product Reviews:</h2>

        <ReviewList reviews={reviews} />
      </div>
    </>
  );
};

export default Detail;
