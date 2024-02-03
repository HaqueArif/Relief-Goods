import React from "react";

const Content = (props) => {
  const { image, alt, userName, title, testimonial } = props;
  return (
    <div>
      <div className="py-10 ps-10 pr-[73px] rounded-[30px] bg-[#F8F9FF] hover:bg-primary hover:text-white text-[#000000cc]">
        <div className="flex gap-5">
          <img src={image} alt={alt} />
          <div>
            <h3 className="text-[28px] font-[500] capitalize">{userName}</h3>
            <span className="text-xl">{title}</span>
          </div>
        </div>
        <p className="mt-5 leading-8">{testimonial}</p>
      </div>
    </div>
  );
};

export default Content;
