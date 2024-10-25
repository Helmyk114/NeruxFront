import React from "react";

interface TitleImagePopUpProps {
  title: string;
  imageUrl?: string;
}

const TitleImagePopUp: React.FC<TitleImagePopUpProps> = ({ title, imageUrl }) => {
  return (
    <>
    <div className="">
        <img
          className="object-center absolute w-32 mt-8"
          src={imageUrl}
          alt={"No Image"}
        />
    </div>
      <div className="text-center pt-40">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </>
  );
};

export default TitleImagePopUp;
