import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const loading = () => {
  return (
    <div>
      <h1 className="text-center">Students Details cards</h1>
      <div className="grid grid-cols-3 gap-8">
        {"abcdefghi".split("").map(() => (
          <div>
            <div>
              <SkeletonCard />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
