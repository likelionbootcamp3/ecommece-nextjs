import clsx from "clsx";

const colors = {
  black: "bg-black",
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};

type Color = "blue" | "red" | "black" | "green";

interface ColorBulletProps {
  color: Color;
}

interface ColorBulletList {
  colors: Color[];
}

export const ColorBullet = ({ color }: ColorBulletProps) => {
  return <div className={clsx("h-4 w-4 rounded-full", colors[color])}></div>;
};

const ColorBulletList = ({ colors }: ColorBulletList) => {
  return (
    <>
      <div className="flex items-center gap-1.5">
        {colors.map((item) => (
          <ColorBullet key={item} color={item} />
        ))}
      </div>
    </>
  );
};

export default ColorBulletList;
