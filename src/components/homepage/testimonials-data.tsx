import { TestimonialsColumn } from "@/components/ui/homepage/testimonials"
import { motion } from "motion/react"

const testimonials = [
    {
        text: "Mô hình đổi pin siêu tốc chỉ dưới 2 phút đã hoàn toàn loại bỏ nỗi lo hết pin. Đây chính là giải pháp thay đổi cuộc chơi cho việc di chuyển hằng ngày của tôi.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Lê Thị Hồng",
        role: "Nhân viên Giao hàng Tự do",
    },
    {
        text: "Là người dùng xe điện, tôi đánh giá cao việc E-Swap sử dụng 100% năng lượng mặt trời. Tôi không chỉ đi xe điện mà còn đảm bảo nguồn năng lượng nạp vào là hoàn toàn sạch.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Trần Văn An",
        role: "Kiến trúc sư & Cư dân đô thị",
    },
    {
        text: "Nền tảng mở E-Swap giúp đội xe của chúng tôi dễ dàng chuyển đổi mà không bị khóa vào một nhà cung cấp duy nhất. Chi phí vận hành tối ưu hơn 20% so với trước đây.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Nguyễn Minh Thu",
        role: "Giám đốc Vận tải & Logistics",
    },
    {
        text: "Công nghệ AI dự báo của E-Swap hoạt động rất hiệu quả. Chúng tôi luôn tìm được pin đầy, ngay cả trong giờ cao điểm. Đây là sự thông minh mà thị trường đang thiếu.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Phạm Quang Huy",
        role: "Trưởng phòng Công nghệ Giao thông",
    },
    {
        text: "Từ góc độ môi trường, việc E-Swap quản lý vòng đời pin và cam kết tái chế đã thuyết phục tôi. Dự án này thể hiện trách nhiệm xã hội cao và tầm nhìn dài hạn.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Đào Ngọc Linh",
        role: "Chuyên gia Tư vấn Bền vững",
    },
    {
        text: "Mô hình Green Energy Hub 2-trong-1 cực kỳ tiện lợi. Đôi khi tôi sạc thường, đôi khi tôi đổi pin nhanh. Nó đáp ứng mọi nhu cầu di chuyển trong tuần của tôi.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Vũ Thanh Mai",
        role: "Chủ cửa hàng bán lẻ",
    },
    {
        text: "Chúng tôi hợp tác với E-Swap vì họ có cam kết rõ ràng về chuẩn hóa pin. Điều này mở ra cơ hội lớn cho các nhà sản xuất xe điện nhỏ như chúng tôi cạnh tranh công bằng.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Hoàng Đình Lộc",
        role: "CEO Hãng Xe Điện Mới",
    },
    {
        text: "Sự kết hợp giữa năng lượng sạch và tốc độ đã thay đổi hoàn toàn cách tôi nhìn nhận về xe điện. Tôi chuyển từ xe xăng sang xe điện nhờ có E-Swap.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Trịnh Diệu Hương",
        role: "Chuyên viên Phân tích Thị trường",
    },
    {
        text: "Đội ngũ hỗ trợ triển khai Hub rất nhanh chóng. Với hệ thống CMS thân thiện, việc quản lý và giám sát hàng chục trạm giờ đây vô cùng đơn giản và hiệu quả.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Lê Hoàng Quân",
        role: "Quản lý Dự án Cơ sở hạ tầng",
    },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const Testimonials = () => {
    return (
        <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 relative">
            <div className="container z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                        Đánh giá của khách hàng
                    </h2>

                    <p className="text-center mt-5 opacity-75">
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
