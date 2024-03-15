import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../features/movieSlice";
import { IMovie } from "../types";

export const AddMovie = React.memo(() => {
  const { genres } = useAppSelector((state) => state.movieSlice);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMovie>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const save = (data: IMovie) => {
    data.id = Date.now();
    dispatch(addMovie(data));
    reset();
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <Form onSubmit={handleSubmit(save)} className="w-50 p-2 border">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            id="image"
            type="text"
            placeholder="Enter image"
            {...register("image", { required: "Fill the field" })}
          />
          {errors.image && <span>This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            placeholder="Enter title"
            {...register("title", { required: "Fill the field" })}
          />
          {errors.title && <span>This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="genre">Genre</Form.Label>
          <Form.Select
            id="genre"
            multiple
            {...register("genre", { required: "Fill the field" })}
          >
            {genres.map((genre: string, i: number) => (
              <option key={i}> {genre}</option>
            ))}
          </Form.Select>
          {errors.genre && <span>This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="duration">Duration</Form.Label>
          <Form.Control
            id="duration"
            type="number"
            placeholder="Enter duration"
            {...register("duration", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.duration && <span>This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="date">Date</Form.Label>
          <Form.Control
            id="date"
            type="number"
            placeholder="Enter date"
            {...register("date", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.date && <span>This field is required</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <Form.Control
            id="rating"
            type="number"
            placeholder="Enter rating"
            {...register("rating", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.rating && <span>This field is required</span>}
        </Form.Group>
        <Button variant="success" type="submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
});
