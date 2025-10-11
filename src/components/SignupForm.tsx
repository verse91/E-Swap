"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        cccd: "",
        customerType: "",
        serviceType: "",
        area: "",
        selectedPackage: "",
    });

    const [modal, setModal] = useState({
        open: false,
        title: "",
        message: "",
        success: true,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { fullName, phoneNumber, customerType, serviceType, area, selectedPackage } = formData;

        if (!fullName || !phoneNumber || !customerType || !serviceType || !area) {
            setModal({
                open: true,
                title: "Lỗi",
                message: "Vui lòng điền đầy đủ các trường bắt buộc có dấu (*).",
                success: false,
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const data = {
                ...formData,
                customerType: formData.customerType === "individual" ? "Cá nhân" : "Doanh nghiệp",
                serviceType: formData.serviceType === "selfcharge" ? "Tự sạc" :
                    formData.serviceType === "battery" ? "Gói pin" : "Thuê xe",
                area: formData.area === "hanoi" ? "Hà Nội" :
                    formData.area === "hcmc" ? "Hồ Chí Minh" : "Khác",
                timestamp: new Date().toISOString(),
            };


            setModal({
                open: true,
                title: "Đăng ký thành công!",
                message: `Cảm ơn bạn ${data.fullName} đã đăng ký dịch vụ ${data.serviceType}. Chúng tôi sẽ liên hệ qua SĐT ${data.phoneNumber} để tư vấn chi tiết tại khu vực ${data.area}.`,
                success: true,
            });

            // Reset form
            setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                cccd: "",
                customerType: "",
                serviceType: "",
                area: "",
                selectedPackage: "",
            });
        } catch (error) {
            setModal({
                open: true,
                title: "Lỗi",
                message: "Đã xảy ra lỗi khi gửi đăng ký. Vui lòng thử lại sau.",
                success: false,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Đăng ký dịch vụ
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Điền thông tin để được tư vấn gói dịch vụ phù hợp
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                E-SWAP
                            </h2>
                            <p className="text-lg opacity-90">
                                Đăng ký nhận tư vấn miễn phí
                            </p>
                        </div>

                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Họ và Tên <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Nguyễn Văn A"
                                        required
                                        className="mt-1"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Số điện thoại <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="090 123 4567"
                                        required
                                        className="mt-1"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        className="mt-1"
                                    />
                                </div>

                                {/* CCCD */}
                                <div>
                                    <Label htmlFor="cccd" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Số CCCD/CMND
                                    </Label>
                                    <Input
                                        id="cccd"
                                        name="cccd"
                                        value={formData.cccd}
                                        onChange={handleChange}
                                        placeholder="XXXXXXXXXXXX"
                                        className="mt-1"
                                    />
                                </div>

                                {/* Customer Type */}
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Bạn là khách hàng <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="customerType"
                                                value="individual"
                                                checked={formData.customerType === "individual"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Cá nhân</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="customerType"
                                                value="business"
                                                checked={formData.customerType === "business"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Doanh nghiệp</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Service Type */}
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Dịch vụ quan tâm <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                                        <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="selfcharge"
                                                checked={formData.serviceType === "selfcharge"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-orange-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Tự sạc</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="battery"
                                                checked={formData.serviceType === "battery"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Gói pin</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="bikerental"
                                                checked={formData.serviceType === "bikerental"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-purple-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Thuê xe</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Area */}
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Khu vực <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="flex gap-6 flex-wrap mt-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="area"
                                                value="hanoi"
                                                checked={formData.area === "hanoi"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Hà Nội</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="area"
                                                value="hcmc"
                                                checked={formData.area === "hcmc"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Hồ Chí Minh</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="area"
                                                value="other"
                                                checked={formData.area === "other"}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Khác</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Đang gửi...
                                        </div>
                                    ) : (
                                        "Đăng ký ngay"
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modal.open && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 mb-4">
                                {modal.success ? (
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                ) : (
                                    <XCircle className="w-12 h-12 text-red-500" />
                                )}
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${modal.success ? "text-green-600" : "text-red-600"
                                }`}>
                                {modal.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {modal.message}
                            </p>
                            <Button
                                onClick={() => setModal((prev) => ({ ...prev, open: false }))}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Đóng
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
