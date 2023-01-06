// Type
interface BadgeProps {
  count: number;
  children: React.ReactNode;
}

/**
 * Badge
 */
const Badge = ({ count, children }: BadgeProps) => {
  return (
    <div className="relative">
      <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-gray-100 translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full">
        {count}
      </span>
      {children}
    </div>
  );
};

export default Badge;
