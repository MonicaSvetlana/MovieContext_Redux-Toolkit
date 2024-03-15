import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useAppSelector } from "../app/hook";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { IMovie } from "../types";

export const More = React.memo(() => {
  const { movies } = useAppSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = useMemo(() => {
    return movies.find((elm) => elm.id === Number(id)) as IMovie;
  }, [id, movies]);

  return (
    <>
      <Button onClick={() => navigate(-1)} variant="danger">
        Back
      </Button>
      <Card className="w-100">
        <Card.Body className="d-flex align-items-center flex-column">
          <Card.Img src={movie.image} style={{ width: "200px" }} />
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{"⭐️".repeat(movie.rating)}</Card.Text>
          <Card.Text>{movie.genre.join(" | ")}</Card.Text>
          <Card.Title>{movie.duration}</Card.Title>
          <Card.Title>{movie.date}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
});
