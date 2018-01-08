import React from 'react';

const Review = ({ title, body }) => (
  <div>
    <ul>
      <li>Title: {title}</li>
      <li>{body}</li>
    </ul>
  </div>
);

export default Review;
