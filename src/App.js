import React from "react";

function Food({ name, image }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} />
    </div>
  );
}

const foodLike = [{ name: "Kimchi", image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg" }];

function App() {
  return (
    <div className="App">
      <h1>Hi!!!</h1>
      {foodLike.map((food) => (
        <Food name={food.name} image={food.image} />
      ))}
    </div>
  );
}

export default App;
