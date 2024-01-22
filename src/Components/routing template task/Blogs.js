import React from "react";

const Blogs = () => {
  return (
    <>
      <h1 className="text-center">Blogs</h1>
      <hr />
      <div className="container-fluid row">
        {/* for image  */}
        <div className="col-md-6  d-flex justify-content-center">
          <figure>
            <img
              src="https://codyhouse.co/demo-templates/virgo/assets/img/article-gallery-v3-img-1.jpg "
              alt=""
              className="img-fluid"
              style={{ width: 554, height: 300, borderRadius: 8 }}
            />
          </figure>
        </div>
        <div className="col-md-6">
          <h2>Lorem ipsum dolor sit.</h2>
          <p style={{ fontSize: 24, fontWeight: 400 }} className="col-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            nihil rem aliquid perferendis delectus in esse praesentium
            necessitatibus rerum consectetur!
          </p>
          <div className="row">
            <div className="col-md-2">
              <figure>
                <img
                  style={{ width: 75, height: 75 }}
                  src="https://codyhouse.co/demo-templates/virgo/assets/img/article-gallery-v3-author-img-1.jpg"
                  alt=""
                  // className="img-fluid"
                />
              </figure>
            </div>

            <div className="col-md-4">
              <a href="#">Olivia Gribben</a>
              <p>Oct 4, 2020, — 5 min read</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row">
        {/* for image  */}
        <div className="col-md-6 d-flex justify-content-center">
          <figure>
            <img
              src="https://codyhouse.co/demo-templates/virgo/assets/img/article-gallery-v3-img-3.jpg"
              alt=""
              className="img-fluid"
              style={{ width: 554, height: 300, borderRadius: 8 }}
            />
          </figure>
        </div>
        <div className="col-md-6">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="col-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            nihil rem aliquid perferendis delectus in esse praesentium
            necessitatibus rerum consectetur!
          </p>
          <div className="row mt-3">
            <div className="col-md-2">
              <figure>
                <img
                  style={{ width: 75, height: 75 }}
                  src="https://codyhouse.co/demo-templates/virgo/assets/img/article-gallery-v3-author-img-1.jpg"
                  alt=""
                  // className="img-fluid"
                />
              </figure>
            </div>

            <div className="col-md-4">
              <a href="#">Olivia Gribben</a>
              <p>Oct 4, 2020, — 5 min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
