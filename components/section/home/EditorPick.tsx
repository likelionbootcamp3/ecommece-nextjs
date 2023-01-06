import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../../general/Container";
import HeadingBox from "./HeadingBox";

interface EditorPickCardProps {
  imgSrc: string;
  title: string;
  path: string;
  width?: number;
  height?: number;
}

const EditorPickCard = ({
  imgSrc,
  title,
  path,
  width = 510,
  height = 500,
}: EditorPickCardProps) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={imgSrc}
        alt=""
        width={width}
        height={height}
        className="object-cover object-top w-full h-full"
      />
      <div
        className={clsx(
          "absolute left-1/2 bottom-6 w-full max-w-[180px] -translate-x-1/2",
          "lg:left-6 lg:translate-x-0"
        )}
      >
        <Link
          href={path}
          className="inline-block w-full px-6 py-3 text-base font-bold text-center uppercase bg-white"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

const EditorPick = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          {/* Heading */}
          <div className="mb-12">
            <HeadingBox
              heading="EDITOR’S PICK"
              description="Problems trying to resolve the conflict between "
            />
          </div>

          {/* Layout */}
          <div className="mx-auto grid max-w-xl auto-rows-[500px] gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            <div className="sm:col-span-2">
              <EditorPickCard
                imgSrc="/assets/editor-pick/men.jpeg"
                title="Men"
                path="/men"
              />
            </div>
            <div>
              <EditorPickCard
                imgSrc="/assets/editor-pick/women.jpeg"
                title="Women"
                path="/women"
              />
            </div>
            <div className="grid grid-rows-2 gap-8 auto-rows-fr">
              <EditorPickCard
                imgSrc="/assets/editor-pick/accessories.jpeg"
                title="Accessories"
                path="/accessories"
              />
              <EditorPickCard
                imgSrc="/assets/editor-pick/kids.jpeg"
                title="Kids"
                path="/kids"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EditorPick;
