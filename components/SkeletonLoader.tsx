import { cn } from "@/lib/utils";

export const SkeletonLoader = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg",
        isVertical
          ? "flex flex-col space-y-5 items-center lg:flex-row space-x-5 p-4"
          : "h-64 w-full"
      )}
    >
      <div
        className={cn(
          "relative flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer rounded-md transform transition duration-200 ease-out hover:drop-shadow-md"
        )}
      >
        {/* Skeleton for image */}
        <div className="w-full h-64 bg-gray-400 rounded-sm object-cover shadow-md border overflow-hidden drop-shadow-xl" />

        {/* Skeleton for text */}
        <div className="w-full h-3 bg-gray-300 roudned-full mt-1" />
      </div>
    </div>
  );
};
