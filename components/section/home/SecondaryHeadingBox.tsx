import clsx from "clsx";
import { Title } from "../../general/Typography";

interface SecondaryHeadingBoxProps {
  heading: string;
  subheading?: string;
  description?: string;
  textAlign?: "left" | "right" | "center";
}

const SecondaryHeadingBox = ({
  heading,
  subheading,
  description,
  textAlign = "left",
}: SecondaryHeadingBoxProps) => {
  const textAlignClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return (
    <div
      className={clsx(
        "mx-auto max-w-sm px-4 sm:max-w-md",
        textAlignClasses[textAlign]
      )}
    >
      <div className="flex flex-col gap-4">
        <Title level={5}>{heading}</Title>
        <Title level={2}>{subheading}</Title>
        <p className="max-w-sm whitespace-pre-line text-sm text-[#737373]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SecondaryHeadingBox;
