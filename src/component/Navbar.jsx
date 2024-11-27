//imports
import React from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

//logo
import Logo from "../assets/svg/logo";

//icons
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillGolden } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";

//images
import engagement from "../assets/accessories/engagement.jpg";
import daily_wear from "../assets/accessories/daily_wear.jpg";
import couple_ring from "../assets/accessories/couple_ring.webp";
import cocktail from "../assets/accessories/cocktail.webp";
import infinity from "../assets/accessories/infinity.avif";
import platinum from "../assets/accessories/platinum.jpg";
import bands from "../assets/accessories/bands.jpg";
import promise_ring from "../assets/accessories/promise_ring.jpg";

import studs from "../assets/accessories/studs.jpg";
import jhumkas from "../assets/accessories/jhumkas.jpg";
import earcuffs from "../assets/accessories/earcuffs.jpg";
import pearl_earrings from "../assets/accessories/pearl_earrings.jpg";
import drops from "../assets/accessories/drops.jpg";
import hoops_and_huggies from "../assets/accessories/hoops_and_huggies.jpg";
import suidhaga from "../assets/accessories/suidhaga.jpg";
import daily_wear_earrings from "../assets/accessories/daily_wear_earrings.jpg";

const Navbar = () => {
  //navbar menu
  const menu = [
    {
      id: 1,
      name: "Rings",
      shopbystyle: [
        {
          id: 1,
          name: "Engagement",
          image: engagement,
        },
        {
          id: 2,
          name: "Daily Wear",
          image: daily_wear,
        },
        {
          id: 3,
          name: "Couple Rings",
          image: couple_ring,
        },
        {
          id: 4,
          name: "Cocktail",
          image: cocktail,
        },
        {
          id: 5,
          name: "Infinity",
          image: infinity,
        },
        {
          id: 6,
          name: "Platinum",
          image: platinum,
        },
        {
          id: 7,
          name: "Bands",
          image: bands,
        },
        {
          id: 8,
          name: "Promise Rings",
          image: promise_ring,
        },
      ],
      shopbymetalandstone: [
        {
          id: 1,
          name: "Gold",
          image: AiFillGolden,
          color:"red"
        },
        {
          id: 2,
          name: "Diamond",
          image: IoDiamondSharp,
          color:"red"
        },
        {
          id: 3,
          name: "Gem Stone",
          image: AiFillGolden,
          color:"pink"
        },
        {
          id: 4,
          name: "Navratna",
          image: AiFillGolden,
          color:"pink"
        },
        {
          id: 5,
          name: "Pearl",
          image: AiFillGolden,
          color:undefined
        },
      ],
    },
    {
      id: 2,
      name: "Earrings",
      shopbystyle: [
        {
          id: 1,
          name: "Studs",
          image: studs,
        },
        {
          id: 2,
          name: "Jhumkas",
          image: jhumkas,
        },
        {
          id: 3,
          name: "Ear Cuffs",
          image: earcuffs,
        },
        {
          id: 4,
          name: "Pearl Earrings",
          image: pearl_earrings,
        },
        {
          id: 5,
          name: "Drops",
          image: drops,
        },
        {
          id: 6,
          name: "Hoops and Huggies",
          image: hoops_and_huggies,
        },
        {
          id: 7,
          name: "Suidhaga",
          image: suidhaga,
        },
        {
          id: 8,
          name: "Daily Wear Earrings",
          image: daily_wear_earrings,
        },
      ],
      shopbymetalandstone: [
        {
          id: 1,
          name: "Engagement",
          image: engagement,
        },
        {
          id: 2,
          name: "Daily Wear",
          image: daily_wear,
        },
        {
          id: 3,
          name: "Couple Rings",
          image: couple_ring,
        },
        {
          id: 4,
          name: "Cocktail",
          image: cocktail,
        },
        {
          id: 5,
          name: "Infinity",
          image: infinity,
        },
        {
          id: 6,
          name: "Platinum",
          image: platinum,
        },
        {
          id: 7,
          name: "Bands",
          image: bands,
        },
        {
          id: 8,
          name: "Promise Rings",
          image: promise_ring,
        },
      ],
    },
    {
      id: 3,
      name: "Bracelets & Bangles",
    },
    {
      id: 4,
      name: "Solitaires",
    },
    {
      id: 5,
      name: "Mangalsutras",
    },
    {
      id: 6,
      name: "Necklaces",
    },
    {
      id: 7,
      name: "More Jewellery",
    },
  ];

  //flag
  const [selected, setSelected] = useState("NP");
  //dropdown
  const [dropDown, setDropDown] = useState(false);
  const [hovered, setHovered] = useState(0);

  return (
    <>
      <div className=" h-24 flex justify-center items-center border-b-2 border-dark-purple">
        <div className=" h-full  w-full flex items-center">
          <div className="w-9 hover:cursor-pointer m-4">
            <Logo />
          </div>
          <ul className=" flex items-center justify-around w-3/5 h-full ">
            {menu.map((items) => {
              return (
                <div
                  key={items.id}
                  onMouseEnter={() => {
                    if (items.name == "Rings" || items.name == "Earrings") {
                      setDropDown(true);
                    } else {
                      setDropDown(false);
                    }
                    items.name == "Rings" ? setHovered(0) : setHovered(0);
                    items.name == "Earrings" ? setHovered(1) : setHovered(0);
                  }}
                  onMouseLeave={() => setDropDown(false)}
                  className=" h-full flex items-center hover:border-b-2 hover:border-dark-purple hover:text-dark-purple hover:cursor-pointer"
                >
                  {items.name}
                </div>
              );
            })}
          </ul>
          <div className=" h-full flex items-center w-auto p-1">
            <input
              type="search"
              name="search"
              id="search"
              className="h-12 p-2 border-t-2 border-l-2 border-b-2 border-purple-500 rounded-l-lg focus:outline-none "
            />
            <span className="h-12 bg-purple-grad flex items-center justify-center w-12 border-t-2 border-r-2 border-b-2 border-purple-500 rounded-r-lg hover:cursor-pointer">
              <IoSearch className="text-white text-xl" />
            </span>
          </div>
          <div className=" h-full flex items-center">
            <ReactFlagsSelect
              selected={selected}
              countries={["NP", "IN", "PK", "BD", "CN"]}
              showSelectedLabel={false}
              selectedSize={18}
              showOptionLabel={false}
              onSelect={(code) => setSelected(code)}
            />
          </div>
          <div className=" h-full w-36 m-2 flex items-center justify-evenly">
            <CgProfile className="text-2xl text-dark-purple hover:cursor-pointer" />
            <FaHeart className="text-2xl text-dark-purple hover:cursor-pointer" />
            <FaCartShopping className="text-2xl text-dark-purple hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
        className={
          dropDown
            ? " absolute h-5/6 w-screen shadow-2xl flex flex-row "
            : "hidden"
        }
      >
        <div className=" h-full w-2/6 ">
          <div className=" p-3 mb-4 border-b-2 border-dark-purple w-fit text-dark-purple ">
            {" "}
            Shop by Style
          </div>
          <div className="flex flex-wrap flex-row  justify-around">
            {menu[hovered].shopbystyle.map((items) => {
              return (
                <div className="h-24 flex items-center cursor-pointer w-2/5 justify-evenly" key={items.id}>
                  <img src={items.image} className="h-14 w-fit" />
                  {items.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-1/6">
        <div className=" p-3 mb-4 border-b-2 border-dark-purple w-fit text-dark-purple ">
            {" "}
            Shop by Metal & Stone
          </div>
          <div className="flex flex-col  justify-around">
          {menu[hovered].shopbymetalandstone.map((items) => {
              return (
                <div className="h-12 flex items-center cursor-pointer" key={items.id}>
                  <items.image className={`m-3 text-${items.color || "blue"}-400`} />{items.name}
                </div>
              );
            })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
