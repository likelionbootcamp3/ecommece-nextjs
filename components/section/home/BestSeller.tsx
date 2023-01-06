import Image from "next/image";
import Link from "next/link";
import ColorBulletList from "../../display/ColorBulletList";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";
import HeadingBox from "./HeadingBox";

const BestSellerCard = () => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <Link href={""} className="h-[427px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/2305/7910/d190d178c2a7b276e896b9d38b982bf6?Expires=1673827200&Signature=VZwwvCEzR-UEjWiVFru2aAzdPBpBi8HNXc4U3vi9kEXqbpC7i63ZZDd5xH5Mzyl3gcdaQ9VoGnP-DBXOGrRpA4DjiBK0xslgpWNF-O6Umc5Hh9RG3RV3Wa2rM2~xrsSesWvAfRPh10RoA0MNNbka~lM0cJtvU88oTvoaHDHf6pGabx8ZSR014RY6nFqm92RuLbTdwN4MvSGAWb9FDXh3aPMxj42~8~0SOUmgZKMgKcQf4Nw1ApnAzOiE1iyNJJpnoNrP2Rd80Go~P8hJoEx8YM38uLqOSGCBg9UK9QsI1nNoAtcWWHNLQNu2Eam5V0RYY0fa8xJOgWCldYPoBi6ARg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          width={360}
          height={456}
          className="object-cover object-top w-full h-full"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-2.5 p-6">
        <Link href={""}>
          <Title level={5}>Graphic Design</Title>
        </Link>
        <Link href={""} className="text-sm font-bold text-[#737373]">
          English Department
        </Link>
        <div className="flex items-center gap-2">
          <Title level={5} className="text-[#BDBDBD]">
            $16.48
          </Title>
          <Title level={5} className="text-[#23856D]">
            $6.48
          </Title>
        </div>
        <ColorBulletList colors={["red", "blue", "green"]} />
      </div>
    </div>
  );
};

const BestSeller = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          {/* Heading */}
          <div className="mb-20">
            <HeadingBox
              heading="BESTSELLER PRODUCTS"
              subheading="Featured Products"
              description="Problems trying to resolve the conflict between "
            />
          </div>

          {/* Bestseller Layout */}
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
