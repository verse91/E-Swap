"use client";

import { useState } from "react";

export default function ServiceSignupForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        cccd: "",
        customerType: "",
        consultation: "",
        area: "",
    });

    const [modal, setModal] = useState({
        open: false,
        title: "",
        message: "",
        success: true,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { fullName, phoneNumber, customerType, consultation, area } = formData;
        if (!fullName || !phoneNumber || !customerType || !consultation || !area) {
            setModal({
                open: true,
                title: "Lỗi",
                message: "Vui lòng điền đầy đủ các trường bắt buộc có dấu (*).",
                success: false,
            });
            return;
        }

        const data = {
            ...formData,
            customerType: formData.customerType === "individual" ? "Cá nhân" : "Doanh nghiệp",
            consultation: formData.consultation === "rental" ? "Thuê xe" : "Mua xe",
            area:
                formData.area === "hanoi"
                    ? "Hà Nội"
                    : formData.area === "hcmc"
                        ? "Hồ Chí Minh"
                        : "Khác",
            timestamp: new Date().toISOString(),
        };

        console.log("Dữ liệu đăng ký:", data);

        setModal({
            open: true,
            title: "Đăng ký thành công!",
            message: `Cảm ơn bạn ${data.fullName} đã đăng ký. Chúng tôi sẽ liên hệ qua SĐT ${data.phoneNumber} để tư vấn gói ${data.consultation} tại khu vực ${data.area}.`,
            success: true,
        });

        setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            cccd: "",
            customerType: "",
            consultation: "",
            area: "",
        });
    };

    return (
        <div className="p-4 md:p-8 flex justify-center items-start min-h-screen">
            <div className="w-full max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden mt-8 md:mt-12">
                <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 text-center rounded-t-xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-1">ĐĂNG KÝ THUÊ XE</h1>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">
                        Yêu Cầu Tư Vấn Gói Trọn Gói E-SWAP (3 PIN)
                    </h2>
                </header>

                <div className="bg-white p-10 rounded-b-xl">
                    <form onSubmit={handleSubmit}>
                        <label className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Nguyễn Văn A"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                        <input
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="090 123 4567"
                            required
                        />

                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="email@example.com"
                        />

                        <label className="block text-sm font-medium text-gray-700">Số CCCD/CMND</label>
                        <input
                            name="cccd"
                            value={formData.cccd}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="XXXXXXXXXXXX"
                        />

                        <fieldset className="mb-4">
                            <legend className="text-sm font-medium text-gray-700 mb-2">
                                Bạn là khách hàng: <span className="text-red-500">*</span>
                            </legend>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="customerType"
                                        value="individual"
                                        checked={formData.customerType === "individual"}
                                        onChange={handleChange}
                                    />
                                    Cá nhân
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="customerType"
                                        value="business"
                                        checked={formData.customerType === "business"}
                                        onChange={handleChange}
                                    />
                                    Doanh nghiệp
                                </label>
                            </div>
                        </fieldset>

                        <fieldset className="mb-4">
                            <legend className="text-sm font-medium text-gray-700 mb-2">
                                Bạn đang muốn được tư vấn về: <span className="text-red-500">*</span>
                            </legend>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="consultation"
                                        value="rental"
                                        checked={formData.consultation === "rental"}
                                        onChange={handleChange}
                                    />
                                    Thuê xe
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="consultation"
                                        value="purchase"
                                        checked={formData.consultation === "purchase"}
                                        onChange={handleChange}
                                    />
                                    Mua xe
                                </label>
                            </div>
                        </fieldset>

                        <fieldset className="mb-6">
                            <legend className="text-sm font-medium text-gray-700 mb-2">
                                Bạn đang ở khu vực nào? <span className="text-red-500">*</span>
                            </legend>
                            <div className="flex gap-6 flex-wrap">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="area"
                                        value="hanoi"
                                        checked={formData.area === "hanoi"}
                                        onChange={handleChange}
                                    />
                                    Hà Nội
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="area"
                                        value="hcmc"
                                        checked={formData.area === "hcmc"}
                                        onChange={handleChange}
                                    />
                                    Hồ Chí Minh
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="area"
                                        value="other"
                                        checked={formData.area === "other"}
                                        onChange={handleChange}
                                    />
                                    Khác
                                </label>
                            </div>
                        </fieldset>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold py-3 rounded-lg w-full hover:opacity-90 transition"
                        >
                            Đăng ký ngay
                        </button>
                    </form>
                </div>
            </div>

            {modal.open && (
                <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full">
                        <h3
                            className={`text-xl font-bold mb-3 ${modal.success ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {modal.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{modal.message}</p>
                        <button
                            onClick={() => setModal((prev) => ({ ...prev, open: false }))}
                            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}