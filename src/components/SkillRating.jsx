import React from "react";

/**
 * props:
 *  - level: number 0..5
 */
export default function SkillRating({ level = 0 }) {
  const blocks = Array.from({length:5});
  return (
    <div className="flex items-center gap-2">
      {blocks.map((_, i) => {
        const filled = i < level;
        return (
          <div
            key={i}
            className={`rating-block ${filled ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-700'}`}
            title={`${i+1} / 5`}
            style={{transition: 'all 150ms'}}
          />
        )
      })}
    </div>
  )
}
