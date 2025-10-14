import { TestimonialsColumn } from "@/components/homepage/testimonials"
import { motion } from "motion/react"
import { testimonials } from "@/config/testimonials";

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const Testimonials = () => {
    return (
        <section className="bg-gradient-to-b from-green-50 to-green-100 relative">
            <div className="container z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >

                    <p className="text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                        Đánh giá của khách hàng
                    </p>

                    <p className="text-center mt-5 opacity-75 max-w-[340px] mx-auto sm:max-w-[480px] md:max-w-[640px] lg:max-w-[800px]">
                        Các khách hàng đã thực hiện các giao dịch trên E-Swap và đã có những đánh giá tích cực
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
