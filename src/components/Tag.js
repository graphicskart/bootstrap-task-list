import React from "react";

const Tag = props => {
  const { title = "" } = props;
  const priorities = {
    high: "bg-danger",
    low: "bg-info",
    med: "bg-warning"
  };
  return (
    <span className={`tag float-right ${priorities[title.toLowerCase()]}`}>
      {title}
    </span>
  );
};

export default Tag;
