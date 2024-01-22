import React from "react";

const Team = () => {
  return (
    <>
      <h2>Our Team</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {[
          { id: 1, name: "Aaaaa aa", mobile: "11111", age: 1, gender: "male" },
          { id: 2, name: "Bbbbb bb", mobile: "2222", age: 2, gender: "female" },
          { id: 3, name: "Cccc cc", mobile: "3333", age: 3, gender: "male" },
          { id: 4, name: "Ddddd dd", mobile: "4444", age: 4, gender: "female" },
          { id: 5, name: "Eeeee ee", mobile: "5555", age: 5, gender: "male" },
          { id: 6, name: "Ffff ff", mobile: "6666", age: 6, gender: "female" },
          { id: 7, name: "Gggg gg", mobile: "7777", age: 7, gender: "male" },
        ].map(({ id, name, age, mobile, gender }) => (
          <div
            key={id}
            style={{ border: "1px solid #000", padding: 5, margin: 5 }}
          >
            <h3>{name}</h3>
            <h3>{name}</h3>
            <h6>Age:{age}</h6>
            <h6>Mobile:{mobile}</h6>
            <h6>Gender:{gender}</h6>
          </div>
        ))}
      </section>
    </>
  );
};

export default Team;
