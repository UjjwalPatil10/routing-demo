import React from "react";

const Article = () => {
  return (
    <>
      <h2 className="text-center">Article</h2>
      <hr />
      <section className="container-fluid">
        <h1 className="text-center">It was going to be a lonely trip back</h1>
        <p style={{ fontSize: 24, fontWeight: 400 }} className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
          rerum amet.
        </p>

        <div className="text-center d-flex justify-content-center">
          <figure>
            <img
              style={{ width: 75, height: 75 }}
              src="https://codyhouse.co/demo-templates/virgo/assets/img/article-gallery-v3-author-img-1.jpg"
              alt=""
              // className="img-fluid"
            />
          </figure>

          <div className="ms-4">
            <a href="#">Olivia Gribben</a>
            <p>Oct 4, 2020, — 5 min read</p>
          </div>
        </div>

        <div>
          <figure>
            <img
              style={{ width: "100vw", height: 450 }}
              src=" https://codyhouse.co/demo-templates/virgo/assets/img/article-img-1.jpg"
              alt=""
              className="img-fluid"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Article;
