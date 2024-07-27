"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RewardItemSelection {
  image: string;
  percentage: number;
  title: string;
  description: string;
}

const rewardItems: RewardItemSelection[] = [
  {
    image: "/reward-system/90.png",
    percentage: 90,
    title: "Of all mining profit is paid out to $MINE stakers.",
    description:
      "Mining profits are distributed monthly to investors who are currently staking $MINE. These monthly dividends come directly from our mining facility in Canada, at a power rate of 0.02 cents per kWh!",
  },
  {
    image: "/reward-system/5.png",
    percentage: 5,
    title: "goes to ongoing marketing.",
    description:
      "This is to ensure $MINE has steady buy pressure over any market conditions.",
  },
  {
    image: "/reward-system/5.png",
    percentage: 5,
    title: "goes to the team.",
    description: "This is used for ongoing development.",
  },
];

export const RewardSystemCard = () => {
  const [selectedItem, setSelectedItem] = useState<RewardItemSelection>(
    rewardItems[0]
  );

  return (
    <div className="mt-20 rewardSystemCard w-full sm:pt-[72px] px-6 pb-6">
      {/* image and percentage */}
      <div className="relative">
        <div className="w-full h-[160px] xs:h-[200px] sm:h-[240px]  relative z-[0] -bottom-4 sm:-bottom-1">
          <Image
            src={selectedItem.image}
            alt="reward amount image"
            objectFit="contain"
            fill
          />
        </div>
        <div className="absolute -bottom-2 w-full h-[40px] bg-gradient-to-t from-black to-transparent"></div>
        {/* percentage overlay */}
        <h3 className="grayTextGradient text-[48px] sm:text-[64px] lg:text-[72px] text-center z-[2] absolute top-[120px] xs:top-[152px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {selectedItem.percentage}%
        </h3>
      </div>

      {/* selection buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-2 mb-4">
        {rewardItems.map((item, index) => (
          <motion.button
            key={index}
            onMouseEnter={() => setSelectedItem(item)}
            className={`rewardItemCard ${
              selectedItem === item ? "active" : "inactive"
            } text-left sm:w-1/3 relative overflow-hidden`}
          >
            {/* gradient if active */}
            {selectedItem === item && (
              <>
                <div className="rewardItemActiveGradient1"></div>
                <div className="rewardItemActiveGradient2"></div>
              </>
            )}

            {/* content */}
            <h4 className="orangeTextGradient text-[32px]">
              {item.percentage}%
            </h4>
            <p className="mt-6 grayTextGradient text-[16px]">{item.title}</p>
            <p className="mt-3 text-white/60 text-[14px]">{item.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};