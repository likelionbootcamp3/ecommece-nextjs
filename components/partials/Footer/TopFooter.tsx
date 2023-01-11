import MediaIcons from "../../display/MediaIcons";
import Container from "../../general/Container";
import Brand from "../../navigation/Brand";

const TopFooter = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <Container>
        {/* Layout */}
        <div className="border-b border-[#E6E6E6] py-10">
          <div className="flex items-center justify-between gap-4 h-14">
            {/* Brand */}
            <Brand />

            {/* Media icons */}
            <div className="text-primary">
              <MediaIcons />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopFooter;
