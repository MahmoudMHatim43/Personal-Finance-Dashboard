import React from "react";

function CategoryView({ item }) {
  const { icon: Icon, title, precent, color } = item;
  return (
    <div className="flex justify-between w-full text-[clamp(1rem,1.2vw,1.2vw)]">
      <div className="flex gap-2">
        <Icon color={color} />
        <span>{title}</span>
      </div>
      <span className="text-small-text">{precent * 100}%</span>
    </div>
  );
}

export default CategoryView;
