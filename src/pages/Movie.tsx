import React, { useMemo, useState, ChangeEvent } from "react";
import { useAppSelector } from "../app/hook";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Movie = React.memo(() => {
  const { movies, genres } = useAppSelector((state) => state.movieSlice);
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const searchedMovie = useMemo(() => {
    let data = movies;
    if (checkboxValue.length) {
      data = movies.filter((movie) =>
        checkboxValue.every((mov) => movie.genre.includes(mov))
      );
    }
    return data;
  }, [movies, checkboxValue]);

  return (
    <>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {genres.map((movie, i) => {
          return (
            <Form.Group key={i} className="d-flex gap-1 p-2 m-1">
              <Form.Label htmlFor={"checkboxValue" + i}>{movie}</Form.Label>
              <Form.Check
                aria-label="Checkbox for Movies"
                key={i}
                value={movie}
                id={"checkboxValue" + i}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                  let val = e.target.value;
                  if (e.target.checked) {
                    setCheckboxValue([...checkboxValue, val]);
                  } else {
                    setCheckboxValue(
                      checkboxValue.filter((mov) => mov !== val)
                    );
                  }
                }}
              />
            </Form.Group>
          );
        })}
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {searchedMovie.map((movie) => {
          return (
            <Card style={{ width: "18rem" }} key={movie.id}>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body className="d-flex align-items-center justify-content-between flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Title>{movie.genre.join(" | ")}</Card.Title>
                <Card.Text>{"⭐️".repeat(movie.rating)}</Card.Text>
                <Link to={"/movie/" + movie.id} className="btn btn-primary">
                  Watch Movie{" "}
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
});
