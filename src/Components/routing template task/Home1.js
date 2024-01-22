import React from "react";
import MyStyles from "./Home1.module.css";
const Home1 = () => {
  return (
    <>
      <h2 className=" text-center">Home</h2>

      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="">
              <figure>
                <img
                  style={{ width: 60, height: 60 }}
                  src=" https://codyhouse.co/demo-templates/mercurio/assets/img/mega-site-nav-img-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </figure>
            </div>
            <div>
              <h4>Product One</h4>
            </div>
          </div>

          <div className="col-md-6">
            <figure>
              <img
                src=" https://codyhouse.co/demo-templates/mercurio/assets/img/mega-site-nav-img-1.jpg"
                alt=""
                className="img-fluid"
              />
            </figure>
            <h2>Product One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quaerat.
            </p>
            <button
              style={{ height: 35, width: 130 }}
              className="bg-primary text-light"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home1;
