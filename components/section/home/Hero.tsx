import Image from "next/image";
import Link from "next/link";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";

const Hero = () => {
  return (
    <section className="py-6">
      <Container fluid>
        {/* Background */}
        <div className="rounded-2xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
          {/* Container */}
          <Container>
            <div className="flex items-center justify-center">
              {/* Layout */}
              <div className="grid items-center py-10 lg:min-h-[600px] lg:grid-cols-2 lg:py-0">
                {/* Content */}
                <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                  <Title level={5}>SUMMER 2020</Title>
                  <Title level={1}>NEW COLLECTION</Title>
                  <Title level={4} className="w-[28ch]">
                    We know how large objects will act, but things on a small
                    scale.
                  </Title>
                  <Link
                    href="/shop"
                    className="px-10 py-4 text-white uppercase rounded-lg bg-primary"
                  >
                    <Title level={3}>Shop Now</Title>
                  </Link>
                </div>

                {/* Image */}
                <div className="relative">
                  <Image
                    src="/assets/hero.png"
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
