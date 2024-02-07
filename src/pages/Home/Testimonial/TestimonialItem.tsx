type testimonialItemProps = {
  image: string;
  alt: string;
  userName: string;
  title: string;
  testimonial: string;
};

const TestimonialItem: React.FC<testimonialItemProps> = ({
  image,
  alt,
  userName,
  title,
  testimonial,
}) => {
  return (
    <div>
      <div className="py-5 sm:py-10 ps-5 sm:ps-10 pr-5 sm:pr-[73px] rounded-[30px] bg-[#F8F9FF] hover:bg-primary hover:text-white text-[#000000cc]">
        <div className="flex gap-5">
          <img
            className="w-[60px] md:w-[85px] md:h-[85px]"
            src={image}
            alt={alt}
          />
          <div>
            <h3 className="text-2xl md:text-[22px] lg:text-[28px] font-[500] capitalize">
              {userName}
            </h3>
            <span className="text-xl">{title}</span>
          </div>
        </div>
        <p className="mt-5 leading-8">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
