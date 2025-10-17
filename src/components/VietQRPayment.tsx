"use client";

import { useState, useEffect } from 'react';
import { X, QrCode, Copy, Check, CreditCard } from 'lucide-react';
import Image from 'next/image';

interface VietQRPaymentProps {
    isOpen: boolean;
    onClose: () => void;
    packageInfo: {
        id: string;
        name: string;
        price: string;
        period: string;
        km: string;
        pins: string;
    };
}

export default function VietQRPayment({ isOpen, onClose, packageInfo }: VietQRPaymentProps) {
    const [copied, setCopied] = useState({
        stk: false,
        amount: false,
        content: false
    });
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    const STK = '1043132503';
    const BANK_ID = '970436';
    const TEMPLATE = 'compact';
    const ACCOUNT_NAME = 'E-SWAP TEAM';

    const generateVietQRUrl = () => {
        const amount = packageInfo.price.replace(/\./g, '');
        const transferContent = `E-SWAP ${packageInfo.name} - ${packageInfo.price} VND/${packageInfo.period}`;

        const params = new URLSearchParams({
            accountNo: STK,
            accountName: ACCOUNT_NAME,
            acqId: BANK_ID,
            amount: amount,
            addInfo: transferContent,
            format: 'text',
            template: TEMPLATE
        });

        return `https://img.vietqr.io/image/${BANK_ID}-${STK}-${TEMPLATE}.png?amount=${amount}&addInfo=${encodeURIComponent(transferContent)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
    };

    useEffect(() => {
        if (isOpen && packageInfo) {
            const qrUrl = generateVietQRUrl();
            setQrCodeUrl(qrUrl);
        }
    }, [isOpen, packageInfo]);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    const handleCopyInfo = async (type: 'stk' | 'amount' | 'content') => {
        let textToCopy = '';
        const transferContent = `E-SWAP ${packageInfo.name} - ${packageInfo.price} VND/${packageInfo.period}`;

        switch (type) {
            case 'stk':
                textToCopy = STK;
                break;
            case 'amount':
                textToCopy = `${packageInfo.price} VNĐ`;
                break;
            case 'content':
                textToCopy = transferContent;
                break;
        }

        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(prev => ({ ...prev, [type]: true }));
            setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Thanh toán {packageInfo.name}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Thông tin gói dịch vụ
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <p><strong>Tên gói:</strong> {packageInfo.name}</p>
                            <p><strong>Giá:</strong> {packageInfo.price} VNĐ/{packageInfo.period}</p>
                            <p><strong>Số pin:</strong> {packageInfo.pins}</p>
                            <p><strong>Quãng đường:</strong> {packageInfo.km}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <QrCode className="w-6 h-6 text-blue-600" />
                                <span className="text-lg font-medium text-gray-900 dark:text-white">
                                    Quét mã QR thanh toán
                                </span>
                            </div>

                            <div className="flex justify-center">
                                <div className="bg-white p-2 rounded-lg border-2 border-gray-200 shadow-lg">
                                    {qrCodeUrl ? (
                                        <Image
                                            src={qrCodeUrl}
                                            alt="VietQR Payment Code"
                                            width={300}
                                            height={300}
                                            className="w-82 h-82 object-cover"
                                        />
                                    ) : (
                                        <div className="w-72 h-72 flex items-center justify-center bg-gray-100 rounded-lg">
                                            <div className="text-center">
                                                <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                                                <p className="text-gray-500 text-sm">Đang tạo mã QR...</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bank Transfer */}
                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CreditCard className="w-6 h-6 text-green-600" />
                                <span className="text-lg font-medium text-gray-900 dark:text-white">
                                    Chuyển khoản ngân hàng
                                </span>
                            </div>

                            <div className="space-y-4">
                                {/* STK */}
                                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                                    <div>
                                        <span className="text-gray-600 dark:text-gray-300 font-medium block">Số tài khoản:</span>
                                        <span className="font-mono font-bold text-lg">{STK}</span>
                                    </div>
                                    <button
                                        onClick={() => handleCopyInfo('stk')}
                                        className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                                    >
                                        {copied.stk ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied.stk ? 'Đã copy' : 'Copy'}
                                    </button>
                                </div>

                                {/* Account Name */}
                                <div className="py-3 border-b border-gray-200 dark:border-gray-600">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium block">Tên chủ TK:</span>
                                    <span className="font-bold text-lg">{ACCOUNT_NAME}</span>
                                </div>

                                {/* Amount */}
                                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                                    <div>
                                        <span className="text-gray-600 dark:text-gray-300 font-medium block">Số tiền:</span>
                                        <span className="font-bold text-xl text-red-600">{packageInfo.price} VNĐ</span>
                                    </div>
                                    <button
                                        onClick={() => handleCopyInfo('amount')}
                                        className="bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                                    >
                                        {copied.amount ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied.amount ? 'Đã copy' : 'Copy'}
                                    </button>
                                </div>

                                {/* Transfer Content */}
                                <div className="mt-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-gray-600 dark:text-gray-300 font-medium">Nội dung chuyển khoản:</span>
                                        <button
                                            onClick={() => handleCopyInfo('content')}
                                            className="bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                                        >
                                            {copied.content ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                            {copied.content ? 'Đã copy' : 'Copy'}
                                        </button>
                                    </div>
                                    <p className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded-lg break-all border">
                                        E-SWAP {packageInfo.name} - {packageInfo.price} VND/{packageInfo.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                            Hướng dẫn thanh toán
                        </h4>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Quét mã QR hoặc chuyển khoản theo thông tin trên</li>
                            <li>• Nội dung chuyển khoản phải chính xác để xác nhận</li>
                            <li>• Sau khi thanh toán, vui lòng liên hệ hotline để xác nhận</li>
                            <li>• Dịch vụ sẽ được kích hoạt trong vòng 24h</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
                        <p>Hotline hỗ trợ: <span className="font-semibold text-blue-600">1900 1234</span></p>
                        <p>Email: <span className="font-semibold text-blue-600">support@e-swap.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
