import { Title } from "../../general/Typography";

interface HeadingBoxProps {
  heading: string;
  subheading?: string;
  description: string;
}

const HeadingBox = ({ heading, subheading, description }: HeadingBoxProps) => {
  return (
    <div className="max-w-sm px-8 mx-auto text-center sm:max-w-md">
      <Title level={4} className="mb-3">
        {subheading}
      </Title>
      <div>
        <Title level={3} className="mb-3 uppercase">
          {heading}
        </Title>
        <p className="text-sm text-[#737373]">{description}</p>
      </div>
    </div>
  );
};

export default HeadingBox;
