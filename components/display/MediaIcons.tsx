import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const socialMediaIcons = [
  {
    title: "Instagram",
    icon: <AiOutlineInstagram />,
  },
  {
    title: "Facebook",
    icon: <BsFacebook />,
  },
  {
    title: "Youtube",
    icon: <AiFillYoutube />,
  },
  {
    title: "Twitter",
    icon: <AiOutlineTwitter />,
  },
];

const MediaIcons = () => {
  return (
    <ul className="flex items-center gap-2">
      {socialMediaIcons.map((item) => (
        <li key={item.title}>{item.icon}</li>
      ))}
    </ul>
  );
};

export default MediaIcons;
