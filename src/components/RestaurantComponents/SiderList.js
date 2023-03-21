const MealComponent = ({ meal }) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <div className="siderList__item">
      <img href={meal.image} />
      <p>{meal.price}</p>
      <p>{lorem}</p>
      <button>buy now</button>
    </div>
  );
};

const SiderList = () => {
  const meals = [
    {
      name: "Sandwich",
      price: 10,
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg",
    },
    {
      name: "Pizza",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
    },
    {
      name: "Salad",
      price: 5,
      image:
        "https://cdn.pixabay.com/photo/2017/01/31/11/43/salad-2024260__340.jpg",
    },
    {
      name: "Soup",
      price: 7,
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg",
    },
    {
      name: "Burger",
      price: 10,
      image:
        "https://cdn.pixabay.com/photo/2017/01/31/11/43/salad-2024260__340.jpg",
    },
    {
      name: "Pasta",
      price: 10,
      image:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
    },
  ];
  return (
    <div className="siderList">
      <ul>
        {meals.map((meal) => (
          <li key={meal.name}>
            <MealComponent meal={meal} />
          </li>
        ))}
      </ul>      
    </div>
  );
};
export default SiderList;
