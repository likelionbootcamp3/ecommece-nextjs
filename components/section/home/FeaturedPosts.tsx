import Image from "next/image";
import Container from "../../general/Container";
import { Title } from "../../general/Typography";
import SecondaryHeadingBox from "./SecondaryHeadingBox";
import {
  AiFillEye,
  AiFillStar,
  AiOutlineAreaChart,
  AiOutlineClockCircle,
  AiOutlineDownload,
  AiOutlineGroup,
  AiOutlineHeart,
  AiOutlineRight,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
import ColorBulletList from "../../display/ColorBulletList";

const FeaturedPostCard = () => {
  return (
    <div className="flex h-[428px]">
      {/* Image */}
      <div className="relative h-full min-w-[209px]">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/e403/f323/4352fbe297a33da49162435ddfc7ebb3?Expires=1673827200&Signature=GB7LKDD8~RzbdV~vhZQ1cXklWf8raE8De-xZfLnN4jOygRMFWDghvUmdr3KlksfoL7bbdeKy9HEPHqDm6Y6xErrsrtmEPpNjqJWTOisxlPzTMU38vmRxwiMzVfJ-UjMPkO8B2Y6NZMCCf9efqc-Pl8J5rsIWU8P2mBdgo0zxopGY71BCaLocTYX3ZiHYUBMVyIDQfAjYrKq345nZAlnTEmj-h5EhLoFRnVcKLfDEzvx9iMv7SNhkRa-83MJ0D2d0un4NQ5KpSVAAH9wP7NRc8RgigPSpFJsPZ1aVP01oGWY2hVOxxr0r1fPgvgCML4pVVjYhbzzEH-GrdutvBmerYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          alt=""
          width={458}
          height={687}
          className="object-cover object-center w-full h-full"
        />

        {/* Tag */}
        <div className="absolute top-4 left-4 bg-[#E74040] px-2.5 py-1">
          <Title level={6} className="text-white">
            Sale
          </Title>
        </div>

        {/* Actions */}
        <div className="absolute -translate-x-1/2 left-1/2 bottom-6">
          <ul className="flex items-end gap-2.5">
            <li>
              <button className="rounded-full bg-white p-2.5">
                <AiOutlineHeart />
              </button>
            </li>
            <li>
              <button className="rounded-full bg-white p-2.5">
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <button className="rounded-full bg-white p-2.5">
                <AiFillEye />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Rating */}
          <div className="flex items-center justify-between gap-4">
            <Link href="" className="text-sm font-bold text-[#23A6F0]">
              English Department
            </Link>
            <div className="flex items-center gap-1.5 rounded-2xl bg-black p-1.5">
              <AiFillStar fill="#FFCE31" />
              <span className="text-xs text-white">4.9</span>
            </div>
          </div>
          {/* Title */}
          <Title level={5}>Graphic Design</Title>
          {/* Description */}
          <p className="text-sm text-[#737373]">
            We focus on ergonomics and meeting you where you work. It&apos;s
            only a keystroke away.
          </p>
          {/* Sales */}
          <div className="flex items-center gap-2.5">
            <AiOutlineDownload />
            <span className="text-sm font-bold text-[#737373]">15 Sales</span>
          </div>
          {/* Price */}
          <div className="flex items-center gap-1.5">
            <Title level={5} className="text-[#BDBDBD]">
              $16.48
            </Title>
            <Title level={5} className="text-[#23856D]">
              $6.48
            </Title>
          </div>
          {/* Colors */}
          <ColorBulletList colors={["red", "blue", "green"]} />
          {/* Features */}
          <div className="flex flex-col gap-2 text-[#737373] sm:flex-row sm:items-center sm:gap-3.5">
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle color="#23A6F0" />
              <span className="text-xs">22h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AiOutlineGroup color="#E77C40" />
              <span className="text-xs">64 Lessons</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AiOutlineAreaChart color="#23856D" />
              <span className="text-xs">Progress</span>
            </div>
          </div>
          {/* Learn More Button */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-3xl border border-[#23A6F0] bg-white"
            >
              <div className="flex items-center gap-2.5 py-2.5 px-5 text-[#23A6F0]">
                <Title level={6}>Learn More</Title>
                <AiOutlineRight strokeWidth={50} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedPosts = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          {/* Heading */}
          <div className="mb-24">
            <SecondaryHeadingBox
              heading="Practice Advice"
              subheading="Featured Posts"
              textAlign="center"
            />
          </div>

          {/* Featured Posts */}
          <div className="grid gap-8 lg:grid-cols-2">
            <FeaturedPostCard />
            <FeaturedPostCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPosts;
