import { motion } from "framer-motion"
import { MutableRefObject } from "react"
import { twMerge } from "tailwind-merge"
import { useState } from "react"

type CardProps = {
    containerRef: MutableRefObject<HTMLDivElement | null>
    src: string
    alt: string
    top: string
    left: string
    rotate: string
    className: string
}

export default function Card({ containerRef, src, alt, top, left, rotate, className }: CardProps) {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const photos = document.querySelectorAll('.drag-elements');

        let maxZIndex = 0;

        photos.forEach((photo) => {
            const zIndex = parseInt(window.getComputedStyle(photo).getPropertyValue("z-index"));

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    }


  return (
    <motion.img
        onMouseDown={updateZIndex}
        style={{
            top,
            left,
            rotate,
            zIndex,
        }}
        className={twMerge("drag-elements absolute w-48 bg-neutral-200 p-1 pb-4", className)}
        src={src}
        alt={alt}
        drag
        dragElastic={0.65}
        dragTransition={{
            min: 0,
            max: 100,
            bounceStiffness: 100,
            bounceDamping: 10,
            power: 0.3,
        }}
        dragConstraints={containerRef}
    />
  )
}
