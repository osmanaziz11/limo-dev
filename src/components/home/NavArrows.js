const { RightArrow } = require("@/assets/icons");

const NavArrows = () => {
  return (
    <div className="flex w-[46px]">
      <span className="rotate-180">
        <RightArrow width={23} height={25} />
      </span>
      <RightArrow width={23} height={25} />
    </div>
  );
};

export default NavArrows;
