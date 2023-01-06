import Image from "next/image";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";

const Featured = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
            {/* Image */}
            <div className="grid h-[360px] max-w-xl grid-cols-2 gap-4 lg:h-[500px] lg:max-w-none lg:basis-1/2">
              <Image
                src="/assets/featured/featured-1.jpeg"
                alt=""
                width={670}
                height={447}
                className="object-cover object-center w-full h-full"
              />
              <Image
                src="/assets/featured/featured-2.jpeg"
                alt=""
                width={670}
                height={447}
                className="object-cover object-center w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="max-w-md lg:justify-self-end">
              <Title level={5} className="mb-3">
                Featured Products
              </Title>
              <div>
                <Title level={2} className="mb-3 uppercase">
                  We love what we do
                </Title>
                <p className="text-sm text-[#737373]">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics.
                  <br />
                  <br />
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
