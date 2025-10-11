
'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Startup animation effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200); // Faster delay to match other animations

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Don't start animation until visible

        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return controls?.stop;
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
        isVisible,
    ]);

    const hoverProps = durationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(durationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(duration);
            },
        }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className='flex w-max'
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    y: isVisible ? 0 : 20 
                }}
                transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    delay: isVisible ? 0.1 : 0 
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
