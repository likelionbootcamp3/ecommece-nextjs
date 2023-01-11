import Link from "next/link";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";

const footerLinks = [
  {
    key: "company-info",
    title: "Company Info",
    items: [
      {
        path: "/about",
        name: "About Us",
      },
      {
        path: "/carrier",
        name: "Carrier",
      },
      {
        path: "/we-are-hiring",
        name: "We are hiring",
      },
      {
        path: "/blog",
        name: "Blog",
      },
    ],
  },
  {
    key: "legal",
    title: "Legal",
    items: [
      {
        path: "/about",
        name: "About Us",
      },
      {
        path: "/carrier",
        name: "Carrier",
      },
      {
        path: "/we-are-hiring",
        name: "We are hiring",
      },
      {
        path: "/blog",
        name: "Blog",
      },
    ],
  },
  {
    key: "features",
    title: "Features",
    items: [
      {
        path: "/business-marketing",
        name: "Business Marketing",
      },
      {
        path: "/user-analytic",
        name: "User Analytic",
      },
      {
        path: "/we-chat",
        name: "Live Chat",
      },
      {
        path: "/unlimited-support",
        name: "Unlimited Support",
      },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    items: [
      {
        path: "/ios-&-android",
        name: "IOS & Android",
      },
      {
        path: "/watch-a-demo",
        name: "Watch a Demo",
      },
      {
        path: "/customers",
        name: "Customers",
      },
      {
        path: "/api",
        name: "API",
      },
    ],
  },
];

const MiddleFooter = () => {
  return (
    <div>
      <Container>
        {/* Layout */}
        <div className="flex flex-col gap-8 py-12 lg:flex-row">
          {/* Footer Links */}
          <div className="grid flex-grow gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map(({ key, title, items }) => {
              return (
                <div key={key} className="flex flex-1 flex-col gap-2.5">
                  <Title level={5}>{title}</Title>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item.path}>
                        <Link href={item.path} className="inline-block">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Get In Touch */}
          <div className="flex w-full max-w-md flex-col gap-2.5 lg:max-w-xs">
            <Title level={5} className="text-[#252B42]">
              Get In Touch
            </Title>
            <form>
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow rounded-tl-md rounded-bl-md border px-4 text-sm text-[#737373] outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-4 text-white rounded-tr-md rounded-br-md bg-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiddleFooter;
