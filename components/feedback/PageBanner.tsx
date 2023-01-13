import clsx from "clsx";
import Container from "../general/Container";
import { Title } from "../general/Typography";

interface PageBannerProps {
  name: string;
  bg: string;
}

const PageBanner = ({ name, bg }: PageBannerProps) => {
  return (
    <div className={`${bg} bg-center`}>
      <div className="bg-black/30">
        <Container fluid>
          <div className="flex min-h-[200px] items-center justify-center">
            <Title level={1} className="text-white">
              {name}
            </Title>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageBanner;
