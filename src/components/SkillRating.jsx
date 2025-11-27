import React from "react";

/**
 * props:
 *  - level: number 0..5
 */
export default function SkillRating({ level = 0 }) {
  const blocks = Array.from({ length: 5 });

  // soldan sağa: kısa → uzun
  const heights = [16, 20, 24, 28, 32]; // px

  return (
    <div className="flex items-end gap-2">
      {blocks.map((_, i) => {
        const filled = i < level;
        return (
          <div
            key={i}
            title={`${i + 1} / 5`}
            style={{
              width: '12px',
              height: `${heights[i]}px`,
              backgroundColor: filled ? '#7e22ce' : '#d1d5db',
              borderRadius: '6px', // yuvarlaklık eklendi
              transition: 'all 150ms',
            }}
          />
        );
      })}
    </div>
  );
}
