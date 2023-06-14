import React from "react";

const MobileNav = ({ setMobileNavOn }) => {
  const handleCancelClick = () => {
    setMobileNavOn(false);
  };
  return (
    <div className="">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
