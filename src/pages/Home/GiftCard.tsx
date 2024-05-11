import "@/styles/GiftCard.css";
import giftBanner from "@/assets/logos/banner_left_nonholiday_lg.jpg";

const GiftCard = () => {
  return (
    <div className="mt-[120px]">
      <div
        style={{
          backgroundImage: `url(${giftBanner})`,
          backgroundPosition: "50% 50%",
        }}
        className="bg-no-repeat bg-cover flex justify-end py-20"
      >
        <div className=" text-white text-center ">
          <h2 className="text-[40px] mb-12 border-style">Buy a Gift Card!</h2>
          <p className="text-xl max-w-sm mb-10">
            Give the gift of giving with a GlobalGiving Gift Card.
          </p>
          <div className="flex flex-col gap-5 ">
            <button className="btn-hover">SHOP FOR GIFTS</button>
            <button className="border w-fit px-10 py-3 mx-auto btn-redeem">
              REDEEM A GIFT CARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
