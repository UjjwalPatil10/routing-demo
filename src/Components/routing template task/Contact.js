import React, { useState } from "react";
import { Formik } from "formik";
const Contact = () => {
  return (
    <>
      <>
        <h2>Normal Form</h2>

        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            password: "",
          }}
          onSubmit={(user) => {
            console.log("Formik User: ", user);
          }}
        >
          {({ handleChange, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />
                <br />
                <label>Mobile</label>
                <input type="tel" name="mobile" onChange={handleChange} />
                <br />
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <br />
                <input type="submit" onClick={handleSubmit} />
              </form>
            );
          }}
        </Formik>
        {/* <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Mobile</label>
        <input type="tel" name="mobile" onChange={handleChange} />
        <br />
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <input type="submit" onClick={handleSubmit} />
      </form>
    
     */}
      </>
    </>
  );
};

export default Contact;
