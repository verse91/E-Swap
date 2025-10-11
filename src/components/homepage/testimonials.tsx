"use client";
import React from "react";
import { motion } from "motion/react";

type Testimonial = {
    text: string;
    image: string;
    name: string;
    role: string;
};

type TestimonialsColumnProps = {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
};

export const TestimonialsColumn = ({
    className,
    testimonials,
    duration = 10,
}: TestimonialsColumnProps) => {
    return (
        <div className={className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: duration * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-background"
                style={{ willChange: 'transform' }}
            >
                {[...new Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                                key={`${index}-${i}`}
                            >
                                <div>{text}</div>
                                <div className="flex items-center gap-2 mt-5">
                                    <img
                                        width={40}
                                        height={40}
                                        src={image}
                                        alt={name}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-medium tracking-tight leading-5">
                                            {name}
                                        </div>
                                        <div className="leading-5 opacity-60 tracking-tight">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
