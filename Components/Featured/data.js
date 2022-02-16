import {
  BsMegaphoneFill,
  BsLightningChargeFill,
  BsBoundingBoxCircles,
} from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

export const cardData = [
  {
    icon: <BsLightningChargeFill />,
    title: "Powered by Elrond",
    text: "Landboard is built on one of the fastest and cheapest blockchains: Elrond.",
  },
  {
    icon: <BsMegaphoneFill />,
    title: "Marketing Utility",
    text: "Attach any image and link to your tile.",
  },
  {
    icon: <GiHouseKeys />,
    title: "Rental",
    text: "Rent your tiles to other people.",
  },
  {
    icon: <BiWorld />,
    title: "DAO governance",
    text: "Participate in the DAO and be part of Landboard's future.",
  },
  {
    icon: <IoIosPeople />,
    title: "Community rewards",
    text: "Earn part of every transaction happening in the ecosystem.",
  },
  {
    icon: <BsBoundingBoxCircles />,
    title: "NFT",
    text: "Own a special NFT with its rarity based on geography and placement.",
  },
];
