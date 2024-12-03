import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    title: "Excellent Service",
    feedback: "HKDevelopers exceeded my expectations! Their attention to detail and quality of work were outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Johnson",
    title: "Highly Recommended",
    feedback: "I was impressed with their professionalism and efficiency. The team delivered exactly what I envisioned.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Outstanding Results",
    feedback: "The team at HKDevelopers is fantastic. They went above and beyond to ensure the project was a success.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sophia Wilson",
    title: "Great Experience",
    feedback: "Working with HKDevelopers was a pleasure. They communicated clearly and delivered on time.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <h1>CUSTOMER REVIEWS</h1>
        <p>See what our clients have to say about their experiences with HKDevelopers.</p>
      </div>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.title}</h3>
            <p className="review-feedback">"{review.feedback}"</p>
            <p className="review-author">- {review.name}</p>
            <p className="review-rating">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
