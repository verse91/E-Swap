'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GallerySkeleton = () => {
    const galleryItems = [
        {
            id: 1,
            title: "Pin E-Swap",
            description: "Thân thiện với môi trường, đạt tiêu chuẩn an toàn quốc tế",
            placeholder: "/assets/battery.jpg",
            delay: 0.1
        },
        {
            id: 2,
            title: "Giá cả hợp lý",
            description: "E-Swap cung cấp giá cả hợp lý, phù hợp cho mọi loại pin",
            placeholder: "/assets/price.jpg",
            delay: 0.2
        },
        {
            id: 3,
            title: "Trạm sạc ở mọi nơi",
            description: "“Cây xăng thế hệ mới” của xe điện, nạp đầy nhiên liệu chỉ trong tích tắc",
            placeholder: "/assets/batterystation.jpg",
            delay: 0.3
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.8
            }
        }
    };

    return (
        <section className="py-16 bg-gradient-to-t from-green-50 via-green-100 to-green-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-12 max-w-[540px] mx-auto"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">

                        Đặt pin dễ dàng
                    </h2>
                    <p className="text-center mt-5 opacity-75">

                        Chỉ cần mở app và đặt trước pin ở trạm gần nhất, bạn không cần chờ đợi và nhanh chóng tiếp tục hành trình
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={item.placeholder}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        Tìm hiểu thêm
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySkeleton;
