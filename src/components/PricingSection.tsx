"use client";

import { useState } from 'react';
import { Check, Zap, Battery, Car, Star } from 'lucide-react';
import SignupForm from './SignupForm';

export default function PricingSection() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'selfcharge' | 'battery' | 'bikerental'>('selfcharge');
    const [showSignupForm, setShowSignupForm] = useState(false);

    const selfChargePackages = [
        {
            id: 'MINI-CITY',
            name: 'MINI-CITY',
            price: '135.000',
            period: 'tháng',
            pins: '1',
            km: '300 km',
            description: 'Dành cho di chuyển cơ bản trong thành phố',
            features: ['Quãng đường cơ sở: 300 km/tháng', 'Số pin: 1', 'Tự sạc tại nhà', 'Tiết kiệm chi phí'],
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-900',
            popular: false,
        },
        {
            id: 'ECO-SMART',
            name: 'ECO-SMART',
            price: '270.000',
            period: 'tháng',
            pins: '2',
            km: '600 km',
            description: 'Cân bằng giữa chi phí và quãng đường',
            features: ['Quãng đường cơ sở: 600 km/tháng', 'Số pin: 2', 'Tự sạc tại nhà', 'Phù hợp đi làm xa'],
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-900',
            popular: true,
        },
        {
            id: 'POWER-PRO',
            name: 'POWER-PRO',
            price: '405.000',
            period: 'tháng',
            pins: '3',
            km: '900 km',
            description: 'Dành cho người di chuyển xa',
            features: ['Quãng đường cơ sở: 900 km/tháng', 'Số pin: 3', 'Tự sạc tại nhà', 'Phù hợp làm dịch vụ'],
            color: 'from-blue-400 to-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-900',
            popular: false,
        },
        {
            id: 'RIDER-UNL',
            name: 'RIDER-UNL',
            price: '918.000',
            period: 'tháng',
            pins: '3',
            km: 'Không giới hạn',
            description: 'Không giới hạn quãng đường',
            features: ['Quãng đường: Không giới hạn', 'Số pin: 3', 'Tự sạc tại nhà', 'Không phí vượt cước'],
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-900',
            popular: false,
        },
        {
            id: 'ELITE-MAX',
            name: 'ELITE-MAX',
            price: '1.188.000',
            period: 'tháng',
            pins: '4',
            km: 'Không giới hạn',
            description: 'Gói tối đa cho người dùng chuyên nghiệp',
            features: ['Quãng đường: Không giới hạn', 'Số pin: 4', 'Tự sạc tại nhà', 'Hiệu suất cao nhất'],
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-900',
            popular: false,
        },
    ];

    const batteryPackages = [
        {
            id: 'CITY-E',
            name: 'CITY-E',
            price: '129.000',
            period: 'tháng',
            pins: '1',
            km: '200 km',
            description: 'Gói cơ bản cho di chuyển nội thành',
            features: ['Quãng đường cơ sở: 200 km/tháng', 'Số pin: 1', 'Đổi pin miễn phí', 'Phí cọc: 350.000 VNĐ'],
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-900',
            popular: false,
        },
        {
            id: 'SMART-R',
            name: 'SMART-R',
            price: '259.000',
            period: 'tháng',
            pins: '2',
            km: '400 km',
            description: 'Gói thông minh cho di chuyển vừa phải',
            features: ['Quãng đường cơ sở: 400 km/tháng', 'Số pin: 2', 'Đổi pin miễn phí', 'Phí cọc: 350.000 VNĐ'],
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-900',
            popular: true,
        },
        {
            id: 'RIDER-PRO',
            name: 'RIDER-PRO',
            price: '389.000',
            period: 'tháng',
            pins: '3',
            km: '600 km',
            description: 'Gói chuyên nghiệp cho người đi xa',
            features: ['Quãng đường cơ sở: 600 km/tháng', 'Số pin: 3', 'Đổi pin miễn phí', 'Phí cọc: 350.000 VNĐ'],
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-900',
            popular: false,
        },
        {
            id: 'FREEDOM-X',
            name: 'FREEDOM-X',
            price: '2.999.000',
            period: 'tháng',
            pins: '3',
            km: 'Không giới hạn',
            description: 'Gói tự do không giới hạn',
            features: ['Quãng đường: Không giới hạn', 'Số pin: 3', 'Đổi pin miễn phí', 'Không phí vượt cước'],
            color: 'from-blue-400 to-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-900',
            popular: false,
        },
    ];

    const bikeRentalPackages = [
        {
            id: 'NEW-CAR-RENTAL',
            name: 'XE MỚI (3 PIN)',
            price: '1.283.040',
            period: 'tháng',
            pins: '3',
            km: '0 km',
            description: 'Xe mới đăng ký (ODO dưới 50km)',
            features: ['Xe mới đăng ký', 'Số pin: 3', 'Tự sạc tại nhà', 'Dành cho doanh nghiệp'],
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-900',
            popular: false,
        },
        {
            id: 'USED-CAR-RENTAL',
            name: 'XE ĐÃ THUÊ (3 PIN)',
            price: '1.069.200',
            period: 'tháng',
            pins: '3',
            km: '0 km',
            description: 'Xe đã qua sử dụng hoặc đã thuê',
            features: ['Xe đã qua sử dụng', 'Số pin: 3', 'Tự sạc tại nhà', 'Áp dụng cho tất cả khách hàng'],
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-900',
            popular: true,
        },
    ];

    const getCurrentPackages = () => {
        switch (activeTab) {
            case 'selfcharge':
                return selfChargePackages;
            case 'battery':
                return batteryPackages;
            case 'bikerental':
                return bikeRentalPackages;
            default:
                return selfChargePackages;
        }
    };

    const getTabInfo = () => {
        switch (activeTab) {
            case 'selfcharge':
                return {
                    title: 'TỰ SẠC THEO THÁNG',
                    subtitle: 'Rẻ hơn xe xăng đến 50%',
                    icon: Zap,
                    color: 'from-orange-500 to-orange-600',
                };
            case 'battery':
                return {
                    title: 'GÓI PIN PHÙ HỢP',
                    subtitle: 'Tối ưu chi phí di chuyển',
                    icon: Battery,
                    color: 'from-blue-500 to-blue-600',
                };
            case 'bikerental':
                return {
                    title: 'THUÊ XE TRỌN GÓI',
                    subtitle: 'Dịch vụ thuê xe và pin tự sạc',
                    icon: Car,
                    color: 'from-purple-500 to-purple-600',
                };
            default:
                return {
                    title: 'TỰ SẠC THEO THÁNG',
                    subtitle: 'Rẻ hơn xe xăng đến 50%',
                    icon: Zap,
                    color: 'from-orange-500 to-orange-600',
                };
        }
    };

    const closeModal = () => setSelectedPackage(null);

    const tabInfo = getTabInfo();
    const currentPackages = getCurrentPackages();

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Bảng giá E-SWAP
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Chọn dịch vụ phù hợp với nhu cầu của bạn. Tất cả gói đều được thiết kế để tối ưu chi phí và hiệu quả di chuyển.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('selfcharge')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'selfcharge'
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-orange-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                    >
                        <Zap className="w-5 h-5" />
                        Tự sạc
                    </button>
                    <button
                        onClick={() => setActiveTab('battery')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'battery'
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                    >
                        <Battery className="w-5 h-5" />
                        Gói pin
                    </button>
                    <button
                        onClick={() => setActiveTab('bikerental')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'bikerental'
                                ? 'bg-purple-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-purple-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                    >
                        <Car className="w-5 h-5" />
                        Thuê xe
                    </button>
                </div>

                {/* Current Tab Header */}
                <div className={`bg-gradient-to-r ${tabInfo.color} rounded-2xl p-8 text-center text-white mb-12`}>
                    <tabInfo.icon className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{tabInfo.title}</h2>
                    <p className="text-xl opacity-90">{tabInfo.subtitle}</p>
                </div>

                {/* Pricing Cards */}
                <div className={`max-w-7xl mx-auto ${activeTab === 'battery'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                        : 'flex flex-wrap justify-center gap-6'
                    }`}>
                    {currentPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${activeTab === 'battery' ? '' : 'w-80'
                                } ${pkg.popular ? 'ring-2 ring-blue-500' : ''
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        Phổ biến
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                                    <span className="text-2xl font-bold text-white">{pkg.pins}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {pkg.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {pkg.description}
                                </p>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {pkg.price}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                                        VNĐ/{pkg.period}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {pkg.km === '0 km' ? 'Phí cố định' : pkg.km === 'Không giới hạn' ? 'Không giới hạn' : `Quãng đường: ${pkg.km}`}
                                </p>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-sm">
                                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedPackage(pkg.id)}
                                    className="flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                >
                                    Chi tiết
                                </button>
                                <button
                                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg`}
                                >
                                    Mua
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Signup Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowSignupForm(true)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Đăng ký ngay để được tư vấn miễn phí
                    </button>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
                        <p className="text-gray-600 dark:text-gray-300">
                            {activeTab === 'selfcharge' && '*Gói Tự Sạc yêu cầu khách hàng tự sạc pin tại nhà. Phí vượt cước áp dụng cho gói có giới hạn km.'}
                            {activeTab === 'battery' && '*Tất cả các gói đều được phép Đổi Pin Miễn Phí Không Giới Hạn số lần trong tháng. Phí cọc pin: 350.000 VNĐ (sẽ được hoàn lại khi trả pin).'}
                            {activeTab === 'bikerental' && '*Gói Thuê Xe Điện đã bao gồm Pin Tự Sạc. Phí di chuyển tính theo km phát sinh. Nhấp vào gói để xem chi tiết.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedPackage && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <div className="pr-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                {currentPackages.find(p => p.id === selectedPackage)?.name}
                            </h2>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <strong>Giá:</strong> {currentPackages.find(p => p.id === selectedPackage)?.price} VNĐ/{currentPackages.find(p => p.id === selectedPackage)?.period}
                                    </div>
                                    <div>
                                        <strong>Số pin:</strong> {currentPackages.find(p => p.id === selectedPackage)?.pins}
                                    </div>
                                    <div>
                                        <strong>Quãng đường:</strong> {currentPackages.find(p => p.id === selectedPackage)?.km}
                                    </div>
                                    <div>
                                        <strong>Loại:</strong> {tabInfo.title}
                                    </div>
                                </div>
                                <div>
                                    <strong>Mô tả:</strong> {currentPackages.find(p => p.id === selectedPackage)?.description}
                                </div>
                                <div>
                                    <strong>Tính năng:</strong>
                                    <ul className="mt-2 space-y-1">
                                        {currentPackages.find(p => p.id === selectedPackage)?.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Signup Form */}
            {showSignupForm && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSignupForm(false)}></div>
                    <div className="relative z-10 max-h-screen overflow-y-auto">
                        <SignupForm />
                        <button
                            onClick={() => setShowSignupForm(false)}
                            className="fixed top-4 right-4 z-20 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 p-2 rounded-full shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
