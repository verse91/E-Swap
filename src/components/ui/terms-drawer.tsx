'use client';
import * as React from 'react';
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/subcription/drawer";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface TermsDrawerProps {
    trigger: React.ReactNode;
    title?: string;
    onClose?: () => void;
}

const drawerVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        y: 20,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
        },
    },
};

export default function TermsDrawer({
    trigger,
    title = "Điều khoản sử dụng",
    onClose,
}: TermsDrawerProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(false);
        onClose?.();
    };

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                {trigger}
            </DrawerTrigger>
            <DrawerContent className="max-w-4xl mx-auto p-0 rounded-t-2xl shadow-xl max-h-[90vh]">
                <motion.div
                    variants={drawerVariants as any}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full h-full overflow-hidden"
                >
                    <DrawerHeader className="px-6 py-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
                        <div className="flex items-center justify-between">
                            <motion.div variants={itemVariants as any}>
                                <DrawerTitle className="text-2xl font-semibold text-gray-900">
                                    {title}
                                </DrawerTitle>
                            </motion.div>
                            <DrawerClose asChild>
                                <Button
                                    size="sm"
                                    className="h-8 w-8 p-0 cursor-pointer"
                                    onClick={handleClose}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </DrawerClose>
                        </div>
                    </DrawerHeader>

                    <motion.div
                        className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-120px)]"
                        variants={itemVariants as any}
                    >
                        <div className="prose prose-gray max-w-none">
                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                1. Chấp nhận Điều khoản
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và điều kiện sử dụng này.
                                Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng dịch vụ của chúng tôi.
                            </motion.p>

                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                2. Mô tả Dịch vụ
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Dịch vụ của chúng tôi cung cấp các công cụ quản lý tài chính cá nhân và doanh nghiệp, bao gồm:
                            </motion.p>
                            <motion.ul variants={itemVariants as any} className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Quản lý chi tiêu và thu nhập</li>
                                <li>Phân tích tài chính và báo cáo</li>
                                <li>Dự đoán chi phí dựa trên AI</li>
                                <li>Gợi ý quản lý tài chính thông minh</li>
                            </motion.ul>

                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                3. Quyền và Nghĩa vụ của Người dùng
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Bạn có quyền:
                            </motion.p>
                            <motion.ul variants={itemVariants as any} className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Sử dụng dịch vụ theo đúng mục đích được cung cấp</li>
                                <li>Bảo vệ thông tin cá nhân và tài chính của mình</li>
                                <li>Yêu cầu hỗ trợ kỹ thuật khi cần thiết</li>
                                <li>Chấm dứt sử dụng dịch vụ bất cứ lúc nào</li>
                            </motion.ul>

                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Bạn có nghĩa vụ:
                            </motion.p>
                            <motion.ul variants={itemVariants as any} className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Cung cấp thông tin chính xác và đầy đủ</li>
                                <li>Bảo mật tài khoản và mật khẩu của mình</li>
                                <li>Không sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                                <li>Tuân thủ các quy định pháp luật hiện hành</li>
                            </motion.ul>

                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                4. Bảo mật Thông tin
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Chúng tôi cam kết bảo vệ thông tin cá nhân và tài chính của bạn bằng các biện pháp bảo mật tiên tiến.
                                Tất cả dữ liệu được mã hóa và lưu trữ an toàn. Chúng tôi không chia sẻ thông tin của bạn với bên thứ ba
                                mà không có sự đồng ý của bạn, trừ khi được yêu cầu bởi pháp luật.
                            </motion.p>

                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                5. Thay đổi Điều khoản
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Chúng tôi có quyền cập nhật và thay đổi các điều khoản này bất cứ lúc nào.
                                Các thay đổi sẽ có hiệu lực ngay sau khi được đăng tải trên trang web.
                                Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi được coi là bạn đã chấp nhận các điều khoản mới.
                            </motion.p>

                            <motion.h2 variants={itemVariants as any} className="text-xl font-semibold mb-4 text-gray-900">
                                6. Liên hệ
                            </motion.h2>
                            <motion.p variants={itemVariants as any} className="text-gray-700 mb-4 leading-relaxed">
                                Nếu bạn có bất kỳ câu hỏi nào về các điều khoản sử dụng này,
                                vui lòng liên hệ với chúng tôi qua email: support@eswap.com
                            </motion.p>

                            <motion.p variants={itemVariants as any} className="text-sm text-gray-500 mt-6 pt-4 border-t">
                                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
                            </motion.p>
                        </div>
                    </motion.div>

                    <DrawerFooter className="px-6 py-4 border-t bg-gray-50">
                        <motion.div variants={itemVariants as any}>
                            <Button
                                onClick={handleClose}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                            >
                                Đóng
                            </Button>
                        </motion.div>
                    </DrawerFooter>
                </motion.div>
            </DrawerContent>
        </Drawer>
    );
}
