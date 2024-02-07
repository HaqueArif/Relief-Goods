type BottomSectionProps = {
  icon: string;
  bgColor: string;
  text: string;
};

const BottomSectionCard: React.FC<BottomSectionProps> = ({
  icon,
  bgColor,
  text,
}) => {
  return (
    <div className="glass-gradient px-4 py-6">
      <div className={`bg-[${bgColor}] inline-block p-3 rounded-full mb-8`}>
        <img src={icon} alt="icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default BottomSectionCard;
