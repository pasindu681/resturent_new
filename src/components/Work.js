import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select the dishes you love, customize them if needed, and place your order with just a few clicks.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how frequently you want your meals delivered. Whether it’s daily, weekly, or on special occasions, we make it easy to get fresh food on your schedule. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your favorite meals delivered quickly and hot, straight from the kitchen to your door. We ensure your food arrives fresh and on time, every time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Browse restaurants, pick your favorite meals, customize your order, and place it easily. Our fast delivery ensures your food arrives fresh and hot, ready to enjoy at your doorstep.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
