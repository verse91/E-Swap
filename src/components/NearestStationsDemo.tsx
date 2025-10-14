"use client";

import { useState, useEffect } from 'react';
import { MapPin, Navigation, Battery, Clock, RefreshCw } from 'lucide-react';
import RouteDemo from './RouteDemo';

interface Station {
    id: string;
    name: string;
    address: string;
    distance: number;
    batteriesAvailable: number;
    status: 'open' | 'closed' | 'maintenance';
    operatingHours: string;
    phone: string;
    services: string[];
}

export default function NearestStationsDemo() {
    const [isCalculating, setIsCalculating] = useState(true);
    const [currentLocation, setCurrentLocation] = useState({
        lat: '10.7769',
        lng: '106.7009'
    });
    const [routeDemo, setRouteDemo] = useState<{
        isOpen: boolean;
        station: Station | null;
    }>({
        isOpen: false,
        station: null
    });

    // Map images array
    const mapImages = [
        'https://img.freepik.com/premium-vector/map-with-destination-location-point-city-map-with-street-river-gps-map-navigator-concept_34645-1078.jpg',
        'https://img.freepik.com/premium-vector/3d-top-view-map-with-destination-location-point_34645-1177.jpg',
        'https://img.freepik.com/premium-vector/3d-top-view-map-with-destination-location-point_34645-1177.jpg',
        'https://img.freepik.com/premium-vector/top-view-map-with-destination-location-point_34645-1059.jpg',
        'https://img.freepik.com/premium-vector/city-map-with-pins-town-roads-residential-blocks-gps-navigation-route-with-pointers-abstract-urban-travel-locating-geo-infographic-background_176411-909.jpg'
    ];

    // Get random map image
    const getRandomMapImage = () => {
        return mapImages[Math.floor(Math.random() * mapImages.length)];
    };

    // Random data generators
    const generateRandomStations = (): Station[] => {
        const districtNames = [
            'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8',
            'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12', 'Quận Thủ Đức', 'Quận Bình Thạnh',
            'Quận Tân Bình', 'Quận Tân Phú', 'Quận Phú Nhuận', 'Quận Gò Vấp', 'Quận Bình Tân'
        ];

        const streetNames = [
            'Đường Nguyễn Huệ', 'Đường Lê Lợi', 'Đường Điện Biên Phủ', 'Đường Nguyễn Thị Minh Khai',
            'Đường Cách Mạng Tháng 8', 'Đường Hai Bà Trưng', 'Đường Lý Tự Trọng', 'Đường Nguyễn Du',
            'Đường Pasteur', 'Đường Võ Văn Tần', 'Đường Nguyễn Cơ Thạch', 'Đường Nguyễn Thị Thập',
            'Đường Lý Thái Tổ', 'Đường Trường Sơn', 'Đường Tân Thới Hiệp', 'Đường Võ Văn Kiệt',
            'Đường Nguyễn Văn Cừ', 'Đường Lê Văn Việt', 'Đường Đỗ Xuân Hợp', 'Đường Nguyễn Xiển'
        ];

        const locationTypes = [
            'Trung tâm', 'Khu đô thị', 'Chợ', 'Công viên', 'Sân bay', 'Bệnh viện',
            'Trường học', 'Trung tâm thương mại', 'Khu công nghiệp', 'Khu dân cư'
        ];

        const allServices = ['Đổi pin', 'Sạc nhanh', 'Bảo trì xe', 'Cafe', 'WiFi', 'Nước uống', 'Toilet', 'Parking'];
        const statuses: ('open' | 'closed' | 'maintenance')[] = ['open', 'open', 'open', 'open', 'maintenance', 'closed'];
        const operatingHours = ['24/7', '6:00 - 22:00', '6:00 - 23:00', '5:30 - 22:30', '7:00 - 21:00'];

        const numStations = 8 + Math.floor(Math.random() * 5); // 8-12 stations
        const stations: Station[] = [];

        for (let i = 0; i < numStations; i++) {
            const district = districtNames[Math.floor(Math.random() * districtNames.length)];
            const street = streetNames[Math.floor(Math.random() * streetNames.length)];
            const locationType = locationTypes[Math.floor(Math.random() * locationTypes.length)];
            const status = statuses[Math.floor(Math.random() * statuses.length)];

            // Generate random services (2-5 services)
            const numServices = 2 + Math.floor(Math.random() * 4);
            const shuffledServices = [...allServices].sort(() => 0.5 - Math.random());
            const services = shuffledServices.slice(0, numServices);

            const station: Station = {
                id: (i + 1).toString(),
                name: `Trạm E-Swap ${locationType} ${district}`,
                address: `${street}, ${district}`,
                distance: Math.round((Math.random() * 15 + 0.1) * 100) / 100, // 0.1 to 15.1 km
                batteriesAvailable: Math.floor(Math.random() * 25) + 1, // 1 to 25 batteries
                status: status,
                operatingHours: operatingHours[Math.floor(Math.random() * operatingHours.length)],
                phone: `028 ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 9000) + 1000}`,
                services: services
            };

            stations.push(station);
        }

        // Sort by distance
        return stations.sort((a, b) => a.distance - b.distance);
    };

    const [stations, setStations] = useState<Station[]>([]);

    const refreshStations = () => {
        setIsCalculating(true);

        // Real Ho Chi Minh City locations for current position
        const hcmcCurrentLocations = [
            { lat: 10.7769, lng: 106.7009, name: "Quận 1 - Trung tâm" },
            { lat: 10.7626, lng: 106.6602, name: "Quận 3 - Đại học KHTN" },
            { lat: 10.8031, lng: 106.7128, name: "Quận 7 - Phú Mỹ Hưng" },
            { lat: 10.8412, lng: 106.8099, name: "Quận 2 - Thủ Thiêm" },
            { lat: 10.8231, lng: 106.6297, name: "Quận 10 - Công viên Lê Thị Riêng" },
            { lat: 10.7605, lng: 106.6602, name: "Quận 3 - Công viên Lê Văn Tám" },
            { lat: 10.8031, lng: 106.7128, name: "Quận 7 - SC VivoCity" },
            { lat: 10.8412, lng: 106.8099, name: "Quận 2 - Vincom Mega Mall" }
        ];

        // Pick a random HCMC location
        const randomLocation = hcmcCurrentLocations[Math.floor(Math.random() * hcmcCurrentLocations.length)];
        setCurrentLocation({
            lat: randomLocation.lat.toFixed(4),
            lng: randomLocation.lng.toFixed(4)
        });

        setStations(generateRandomStations());

        // Simulate calculating distance
        setTimeout(() => {
            setIsCalculating(false);
        }, 1500);
    };

    useEffect(() => {
        refreshStations();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'open':
                return 'bg-green-100 text-green-800';
            case 'closed':
                return 'bg-red-100 text-red-800';
            case 'maintenance':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'open':
                return 'Mở cửa';
            case 'closed':
                return 'Đóng cửa';
            case 'maintenance':
                return 'Bảo trì';
            default:
                return 'Không xác định';
        }
    };

    const getBatteryColor = (count: number) => {
        if (count >= 10) return 'bg-green-500';
        if (count >= 5) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const openRouteDemo = (station: Station) => {
        setRouteDemo({
            isOpen: true,
            station: station
        });
    };

    const closeRouteDemo = () => {
        setRouteDemo({
            isOpen: false,
            station: null
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Tìm trạm E-Swap gần nhất
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Demo tính năng tìm kiếm trạm sạc pin điện tử
                    </p>
                </div>

                {/* Location Notification */}
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                        <div>
                            <p className="text-sm font-medium text-yellow-800">
                                Vị trí hiện tại: {currentLocation.lat}, {currentLocation.lng}
                            </p>
                            <p className="text-sm text-yellow-700">
                                {isCalculating ? 'Đang tính toán...' : 'Hoàn thành tính toán khoảng cách'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Title and Refresh Button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Trạm gần nhất (Sắp xếp theo khoảng cách)
                    </h2>
                    <button
                        onClick={refreshStations}
                        disabled={isCalculating}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                        <RefreshCw className={`w-4 h-4 ${isCalculating ? 'animate-spin' : ''}`} />
                        {isCalculating ? 'Đang tải...' : 'Làm mới'}
                    </button>
                </div>

                {/* Loading State */}
                {isCalculating && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3"></div>
                            <span className="text-blue-800 font-medium">Đang tìm kiếm trạm gần nhất...</span>
                        </div>
                    </div>
                )}

                {/* Stations List */}
                {!isCalculating && (
                    <div className="space-y-4">
                        {stations.map((station, index) => (
                            <div
                                key={station.id}
                                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border ${station.status === 'open'
                                    ? 'border-green-200 dark:border-gray-700'
                                    : station.status === 'closed'
                                        ? 'border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900/10'
                                        : 'border-yellow-200 dark:border-yellow-800 dark:bg-yellow-900/10'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    {/* Left side - Map Image and Info */}
                                    <div className="flex items-start space-x-4 flex-1">
                                        {/* Map Image Badge */}
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                                            {/* Map Image Background */}
                                            <div
                                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                                style={{
                                                    backgroundImage: `url(${getRandomMapImage()})`
                                                }}
                                            />
                                        </div>

                                        {/* Station Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                                                    {station.name}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(station.status)}`}>
                                                    {getStatusText(station.status)}
                                                </span>
                                            </div>

                                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="w-4 h-4 text-gray-400" />
                                                    <span>{station.address}</span>
                                                </div>

                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-1">
                                                        <Navigation className="w-4 h-4 text-blue-500" />
                                                        <span className="font-medium">{station.distance} km</span>
                                                    </div>

                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-4 h-4 text-gray-400" />
                                                        <span>{station.operatingHours}</span>
                                                    </div>
                                                </div>

                                                {/* Battery Availability */}
                                                <div className="flex items-center space-x-2">
                                                    <Battery className="w-4 h-4 text-gray-400" />
                                                    <span className="text-sm">Còn</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getBatteryColor(station.batteriesAvailable)}`}>
                                                        {station.batteriesAvailable} pin
                                                    </span>
                                                </div>

                                                {/* Services */}
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {station.services.map((service, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                                        >
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Directions Button */}
                                    <div className="flex-shrink-0 ml-4">
                                        {station.status === 'open' ? (
                                            <button 
                                                onClick={() => openRouteDemo(station)}
                                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 cursor-pointer"
                                            >
                                                <Navigation className="w-4 h-4" />
                                                <span>Chỉ Đường</span>
                                            </button>
                                        ) : (
                                            <div className="flex flex-col items-center space-y-1">
                                                <button
                                                    disabled
                                                    className="bg-gray-400 text-gray-200 px-4 py-2 rounded-lg font-medium cursor-not-allowed flex items-center space-x-2"
                                                >
                                                    <Navigation className="w-4 h-4" />
                                                    <span>Chỉ Đường</span>
                                                </button>
                                                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                                    {station.status === 'closed' ? 'Đã đóng cửa' : 'Đang bảo trì'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer Info - Only show when not calculating */}
                {!isCalculating && (
                    <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Thông tin bổ sung
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800 dark:text-blue-200">
                            <div>
                                <strong>Tổng số trạm:</strong> {stations.length} trạm
                            </div>
                            <div>
                                <strong>Trạm mở cửa:</strong> {stations.filter(s => s.status === 'open').length} trạm
                            </div>
                            <div>
                                <strong>Tổng pin có sẵn:</strong> {stations.reduce((sum, s) => sum + s.batteriesAvailable, 0)} pin
                            </div>
                        </div>
                    </div>
                )}

                {/* Route Demo Modal */}
                {routeDemo.station && (
                    <RouteDemo
                        isOpen={routeDemo.isOpen}
                        onClose={closeRouteDemo}
                        startLocation={{
                            lat: parseFloat(currentLocation.lat),
                            lng: parseFloat(currentLocation.lng)
                        }}
                        station={routeDemo.station}
                    />
                )}
            </div>
        </div>
    );
}
