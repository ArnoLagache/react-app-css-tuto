import logo from "../../assets/images/restaurantLogo.png";
//restaurant logo component
const RestaurantLogo = () => {
  return (
    <div className="restaurant-logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default RestaurantLogo;
