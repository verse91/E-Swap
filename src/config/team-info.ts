/**
 * TEAM INFORMATION CONFIGURATION
 * Cập nhật thông tin thành viên nhóm tại đây
 */

export interface TeamMember {
    name: string;
    role: string;
    school: string;
    avatar?: string;
    bio?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Lê Chí Vĩ",
        role: "Team Leader & Project Manager",
        school: "Đại học Văn Hiến"
    },
    {
        name: "Dương Thế Tài",
        role: "Business Analyst & Strategy",
        school: "Đại học Kinh tế TP.HCM"
    },
    {
        name: "Nguyễn Trọng Hoàng",
        role: "Backend Developer & System Architect",
        school: "UIT - ĐHQG TP.HCM"
    },
    {
        name: "Phùng Minh Khoa",
        role: "Hardware Engineer & IoT Specialist",
        school: "BKU - ĐHQG TP.HCM"
    },
    {
        name: "Nguyễn Tấn Thành",
        role: "Frontend Developer & UI/UX Designer",
        school: "Đại học Văn Hiến"
    }
];

/**
 * COMPANY INFORMATION
 * Thông tin về dự án E-Swap
 */
export const COMPANY_INFO = {
    name: "E-Swap",
    fullName: "Trung tâm Năng lượng Xanh E-Swap",
    slogan: "Đổi năng lượng, đổi tương lai",
    founded: "2024",
    description: "Mô hình Trung tâm Năng lượng Xanh 2-trong-1 - Giải pháp hạ tầng năng lượng toàn diện, tự chủ và thực sự XANH",

    vision: "Kiến tạo tương lai giao thông xanh và bền vững cho Việt Nam",

    mission: "Phá vỡ rào cản của thị trường xe điện thông qua hạ tầng năng lượng mở, sử dụng 100% năng lượng tái tạo",

    coreValues: [
        {
            title: "Bền vững",
            description: "100% năng lượng mặt trời, chu trình năng lượng khép kín, không phát thải"
        },
        {
            title: "Tiện lợi",
            description: "Đổi pin dưới 2 phút, mạng lưới trạm rộng khắp, ứng dụng thông minh"
        },
        {
            title: "Mở",
            description: "Nền tảng mở cho nhiều hãng xe, phá vỡ hệ sinh thái khép kín"
        },
        {
            title: "Thông minh",
            description: "Ứng dụng công nghệ IoT, AI để tối ưu trải nghiệm người dùng"
        }
    ],

    features: [
        {
            title: "Green Energy Hub",
            description: "Trạm đổi pin sử dụng 100% năng lượng mặt trời tích hợp tại chỗ, giảm tải lưới điện quốc gia"
        },
        {
            title: "Đổi pin nhanh",
            description: "Công nghệ đổi pin tự động dưới 2 phút, không cần chờ đợi sạc"
        },
        {
            title: "Ứng dụng thông minh",
            description: "Tìm trạm, đặt pin, thanh toán dễ dàng chỉ với vài cú chạm"
        },
        {
            title: "Nền tảng mở",
            description: "Hỗ trợ nhiều hãng xe điện khác nhau, hướng tới chuẩn pin chung"
        },
        {
            title: "Kinh tế tuần hoàn",
            description: "Quản lý trọn vẹn vòng đời pin: sử dụng, bảo dưỡng, tái sử dụng, tái chế"
        },
        {
            title: "Dễ nhân rộng",
            description: "Triển khai linh hoạt tại trường học, chung cư, cửa hàng tiện lợi"
        }
    ]
};


/**
 * PROJECT STATS
 * Số liệu thống kê dự án
 */
export const PROJECT_STATS = {
    swapTime: "< 2 phút",
    energySource: "100% Năng lượng mặt trời",
    co2Reduction: "Zero phát thải",
    supportedBrands: "Đa thương hiệu",
    appDownloads: "1000+",
    targetStations: "50+ trạm trong năm đầu"
};

/**
 * CONTACT INFORMATION
 */
export const CONTACT_INFO = {
    email: "contact@eswap.vn",
    phone: "+84 xxx xxx xxx",
    address: "TP. Hồ Chí Minh, Việt Nam",
    social: {
        facebook: "https://facebook.com/eswap",
        linkedin: "https://linkedin.com/company/eswap",
        github: "https://github.com/eswap"
    }
};

/**
 * SCHOOLS INFORMATION
 */
export const SCHOOLS = [
    {
        name: "UIT",
        fullName: "Trường Đại học Công nghệ Thông tin",
        university: "ĐHQG TP.HCM"
    },
    {
        name: "BKU",
        fullName: "Trường Đại học Bách Khoa",
        university: "ĐHQG TP.HCM"
    },
    {
        name: "UEH",
        fullName: "Trường Đại học Kinh tế TP.HCM",
        university: ""
    }
];
