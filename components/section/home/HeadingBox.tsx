import { Title } from "../../general/Typography";

const HeadingBox = () => {
  return (
    <div className="max-w-sm px-8 mx-auto text-center sm:max-w-md">
      <Title level={3} className="mb-3 uppercase">
        EDITOR’S PICK
      </Title>
      <p className="text-sm text-[#737373]">
        Problems trying to resolve the conflict between
      </p>
    </div>
  );
};

export default HeadingBox;
