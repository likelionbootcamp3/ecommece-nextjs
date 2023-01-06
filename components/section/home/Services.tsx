import Image from "next/image";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";
import HeadingBox from "./HeadingBox";

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceCard = ({ iconSrc, title, description }: ServiceCardProps) => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center max-w-xs gap-5 px-4 py-6 mx-auto">
        <Image src={iconSrc} alt={title} width={72} height={72} />
        <Title level={3}>{title}</Title>
        <p className="text-sm text-[#737373]">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          <div className="mb-20">
            <HeadingBox
              heading="THE BEST SERVICES"
              subheading="Featured Products"
              description="Problems trying to resolve the conflict between "
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              iconSrc="/assets/service/service-1.svg"
              title="Easy Wins"
              description="Get your best looking smile now!"
            />

            <ServiceCard
              iconSrc="/assets/service/service-2.svg"
              title="Concrete"
              description="Defalcate is most focused in helping you discover your most beautiful smile"
            />

            <ServiceCard
              iconSrc="/assets/service/service-3.svg"
              title="Hack Growth"
              description="Overcame any hurdle or any other problem."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
