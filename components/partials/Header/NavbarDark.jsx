import Container from "../../general/Container";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Title } from "../../general/Typography";

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

const NavbarDark = () => {
  return (
    <div className="hidden bg-[#252B42] text-white lg:block">
      <Container fluid>
        {/* Layout */}
        <div className="flex items-center justify-between py-1">
          {/* Left */}
          <div className="flex items-start gap-2.5">
            <div className="flex items-center gap-1.5 p-2.5">
              <AiOutlinePhone />
              <Title level={6}>(225) 555-0118</Title>
            </div>
            <div className="flex items-center gap-1.5 p-2.5">
              <AiOutlineMail />
              <Title level={6}>michelle.rivera@example.com</Title>
            </div>
          </div>

          {/* Middle */}
          <div className="p-2.5">
            <Title level={6}>Follow Us and get a chance to win 80% off</Title>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2.5 p-2.5">
            <Title level={6}>Follow Us :</Title>
            <ul className="flex items-center gap-2">
              {socialMediaIcons.map((item) => (
                <li key={item.title}>{item.icon}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarDark;
