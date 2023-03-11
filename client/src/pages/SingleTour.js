import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { getTour } from "../redux/features/tourSlice";

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour, relatedTours } = useSelector((state) => ({ ...state.tour }));
  const [formValue, setFormValue] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  const onInputChange = (e) => {
    let { value } = e.target;
    setFormValue({ value });
    console.log(value);
    console.log(formValue);
  };
  return (
    <>
      <MDBContainer>
        <MDBCard className="mb-3 mt-2">
          <MDBCardImage
            position="top"
            style={{ width: "100%", maxHeight: "600px" }}
            src={tour.imageFile}
            alt={tour.title}
          />
          <MDBCardBody>
            <MDBBtn
              tag="a"
              color="none"
              style={{ float: "left", color: "#000" }}
              onClick={() => navigate("/")}
            >
              <MDBIcon
                fas
                size="lg"
                icon="long-arrow-alt-left"
                style={{ float: "left" }}
              />
            </MDBBtn>
            <h3>{tour.title}</h3>
            <span>
              <p className="text-start tourName">Created By: {tour.name}</p>
            </span>
            <br />
            <MDBCardText className="text-start mt-2">
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calendar-alt"
                size="lg"
              />
              <small className="text-muted">
                {moment(tour.createdAt).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
              {tour.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <form>
          Comment here as {user?.result?.name} <br></br>
          <textarea
            name="postContent"
            onChange={onInputChange}
            rows={4}
            cols={40}
          />
          <button onClick={handleSubmit}>Post</button>
        </form>
      </MDBContainer>
    </>
  );
};

export default SingleTour;
