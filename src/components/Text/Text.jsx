import React from "react";

import TextStyled from "./Text-style";

const Text = () => {
  return (
    <TextStyled className="container">
      <h2>What is this?</h2>

      <p>
        <h1 className="d-inline">The Rick and Morty API</h1> is a REST(ish) and
        GraphQL API based on the television show Rick and Morty. You will have
        access to about hundreds of characters, images, locations and episodes.
        The Rick and Morty API is filled with canonical information as seen on
        the TV show.
      </p>

      <a href="#">Check out the documentation to get started</a>

      <h2>Who are you?</h2>

      <p>
        We are Axel Fuhrmann, a guy who likes to develop things and Talita, the
        "Rick and Morty data scientist" and hardcore fan.
      </p>

      <h2>Why did you build this?</h2>

      <p>
        Because we were really interested in the idea of writing an open source
        project and also because Rick and Morty is our favorite show at that
        moment, so why not?
      </p>

      <h2>Technical stuff?</h2>

      <p>
        We use Node and MongoDB to serve the API. All the data is formatted in
        json and the entire project is hosted on Digital Ocean and Netlify.
      </p>

      <h2>How can I contribute to the project?</h2>

      <p>
        You can help us to keep the project alive and you can also contribute on
        GitHub.
      </p>

      <h2>Copyright?</h2>

      <p>
        Rick and Morty is created by Justin Roiland and Dan Harmon for Adult
        Swim. The data and images are used without claim of ownership and belong
        to their respective owners.
      </p>

      <p>This API is open source and uses a BSD license.</p>
    </TextStyled>
  );
};

export default Text;
