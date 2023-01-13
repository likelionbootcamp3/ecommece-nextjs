import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";

const HeroBlob = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 501 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="250.42" cy="237.941" r="249.941" fill="white" />
    </svg>
  );
};

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
                  <Title level={5} className="text-[#2A7CC7]">
                    SUMMER 2020
                  </Title>
                  <Title level={1} className="text-[#252B42]">
                    NEW COLLECTION
                  </Title>
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
                <div className="relative h-full">
                  <Image
                    priority
                    src="/assets/hero.png"
                    alt=""
                    width={600}
                    height={600}
                    className="relative z-10 object-cover h-full"
                  />
                  <HeroBlob className="z-9 absolute right-1/2 top-0 aspect-square h-[400px] translate-x-1/2 lg:right-0 lg:h-[500px] lg:translate-x-0" />
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
