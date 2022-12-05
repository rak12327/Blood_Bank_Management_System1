import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Donor from "../pages/Donor";
import Login from "../pages/Login";
import Request from "../pages/Request";
import Profile from "../pages/Profile";
import RequestForm from "../pages/Request/RequestForm";

export { Home, Contact, Register, Request, Donor, Login, Profile, RequestForm };

export const Data = [
  {
    id: "1",
    text: "Give Blood,Save Life",
    img: "/assets/BloodSlide.webp",
  },
  {
    id: "2",
    text: "You Give me blood and i will gave you freedom",
    img: "/assets/BloodSlide1.jpg",
  },
  {
    id: "3",
    text: "Smile and give, some one will smile and live",
    img: "/assets/BloodSlide2.jpg",
  },
  {
    id: "4",
    text: "Blood - a gift that saves a life.",
    img: "/assets/BloodSlide3.jpg",
  },
  {
    id: "5",
    text: "The blood is red gold in time of saving a life.",
    img: "/assets/BloodSlide4.jpg",
  },
  {
    id: "6",
    text: "A few drops of your Blood can help a life to bloom.",
    img: "/assets/BloodSlide5.jpg",
  },
  {
    id: "7",
    text: "Blood - a gift that saves a life.",
    img: "/assets/BloodSlide3.jpg",
  },
  {
    id: "8",
    text: "The blood is red gold in time of saving a life.",
    img: "/assets/BloodSlide4.jpg",
  },
  {
    id: "9",
    text: "A few drops of your Blood can help a life to bloom.",
    img: "/assets/BloodSlide5.jpg",
  },
];

export const validCSS =
  "w-[100%] rounded px-[.5rem] border py-[.4rem] text-sm outline-none hover:bg-sky-50 focus:bg-sky-50";
export const inValidCSS =
  "w-[100%] rounded px-[.5rem] border border-[red] py-[.4rem] text-sm outline-none bg-red-50 hover:bg-red-50 focus:bg-sky-50";

export const emailValid = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const formatDate = (date) => {
  let orderDate = new Date(date);
  return new Intl.DateTimeFormat(["ban", "id"], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(orderDate);
};

export const Token = () => {
  return localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : window.location.reload();
};
