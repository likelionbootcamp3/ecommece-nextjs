import { Title } from "../../general/Typography";

interface HeadingBoxProps {
  heading: string;
  subheading?: string;
  description?: string;
}

const HeadingBox = ({ heading, subheading, description }: HeadingBoxProps) => {
  return (
    <div className="max-w-md px-4 mx-auto text-center">
      <div className="flex flex-col gap-3">
        <Title level={4}>{subheading}</Title>
        <Title level={3} className="uppercase">
          {heading}
        </Title>
        <p className="text-sm text-[#737373]">{description}</p>
      </div>
    </div>
  );
};

export default HeadingBox;
