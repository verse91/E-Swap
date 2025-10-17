"use client";

import { useEffect, useRef, useState } from "react";
import { X, MapPin, Navigation, Battery, Clock } from "lucide-react";

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

interface RouteDemoProps {
    isOpen: boolean;
    onClose: () => void;
    startLocation: { lat: number; lng: number };
    station: Station;
}

export default function RouteDemo({
    isOpen,
    onClose,
    startLocation,
    station,
}: RouteDemoProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const isMountedRef = useRef(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Real Ho Chi Minh City locations for stations
    const getStationCoordinates = (station: Station) => {
        // Real HCMC locations based on station ID for consistency
        const hcmcLocations = [
            { lat: 10.7769, lng: 106.7009, name: "Quận 1 - Trung tâm" }, // District 1 Center
            { lat: 10.7626, lng: 106.6602, name: "Quận 3 - Đại học KHTN" }, // District 3 - University
            { lat: 10.8031, lng: 106.7128, name: "Quận 7 - Phú Mỹ Hưng" }, // District 7 - Phu My Hung
            { lat: 10.8412, lng: 106.8099, name: "Quận 2 - Thủ Thiêm" }, // District 2 - Thu Thiem
            { lat: 10.7769, lng: 106.7009, name: "Quận 1 - Bến Thành" }, // District 1 - Ben Thanh
            { lat: 10.7626, lng: 106.6602, name: "Quận 3 - Công viên Lê Văn Tám" }, // District 3 - Le Van Tam Park
            { lat: 10.8031, lng: 106.7128, name: "Quận 7 - SC VivoCity" }, // District 7 - SC VivoCity
            { lat: 10.8412, lng: 106.8099, name: "Quận 2 - Vincom Mega Mall" }, // District 2 - Vincom
            { lat: 10.7769, lng: 106.7009, name: "Quận 1 - Diamond Plaza" }, // District 1 - Diamond Plaza
            { lat: 10.7626, lng: 106.6602, name: "Quận 3 - Landmark 81" }, // District 3 - Landmark 81
            { lat: 10.8031, lng: 106.7128, name: "Quận 7 - Crescent Mall" }, // District 7 - Crescent Mall
            { lat: 10.8412, lng: 106.8099, name: "Quận 2 - Saigon Centre" }, // District 2 - Saigon Centre
        ];

        // Use station ID to get consistent location
        const stationIndex = (parseInt(station.id) - 1) % hcmcLocations.length;
        const location = hcmcLocations[stationIndex];

        // Add small random offset to make it more realistic
        const latOffset = (Math.random() - 0.5) * 0.01; // ±0.005 degrees
        const lngOffset = (Math.random() - 0.5) * 0.01; // ±0.005 degrees

        return {
            lat: parseFloat((location.lat + latOffset).toFixed(6)),
            lng: parseFloat((location.lng + lngOffset).toFixed(6))
        };
    };

    const endLocation = getStationCoordinates(station);

    // Reset mounted ref when component mounts
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        if (!isOpen || !mapRef.current) return;

        // Get current values at the time of execution
        const currentStartLocation = startLocation;
        const currentEndLocation = endLocation;
        const currentStation = station;

        // Load Leaflet CSS and JS dynamically
        const loadLeaflet = async () => {
            try {
                // Load CSS
                if (!document.querySelector('link[href*="leaflet"]')) {
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
                    document.head.appendChild(link);
                }

                // Load JS
                if (!(window as any).L) {
                    const script = document.createElement("script");
                    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
                    script.onload = () => {
                        // Wait a bit for Leaflet to fully initialize
                        setTimeout(() => {
                            if (isMountedRef.current) {
                                initializeMap();
                            }
                        }, 100);
                    };
                    script.onerror = () => {
                        console.error("Failed to load Leaflet");
                        setError("Không thể tải bản đồ");
                        setIsLoading(false);
                    };
                    document.head.appendChild(script);
                } else {
                    // Leaflet already loaded, wait a bit then initialize
                    setTimeout(() => {
                        if (isMountedRef.current) {
                            initializeMap();
                        }
                    }, 100);
                }
            } catch (error) {
                console.error("Error loading Leaflet:", error);
                setError("Lỗi tải bản đồ");
                setIsLoading(false);
            }
        };

        const initializeMap = () => {
            try {
                const L = (window as any).L;
                if (!L || !L.map) {
                    setError("Leaflet không được tải đúng cách");
                    setIsLoading(false);
                    return;
                }

                // Check if component is still mounted
                if (!isMountedRef.current) {
                    return;
                }

                // Clear existing map
                if (mapInstanceRef.current) {
                    try {
                        mapInstanceRef.current.remove();
                    } catch (e) {
                        console.log("Error removing existing map:", e);
                    }
                    mapInstanceRef.current = null;
                }

                // Initialize map
                console.log('Initializing map with coordinates:', currentStartLocation, currentEndLocation);
                const map = L.map(mapRef.current).setView([currentStartLocation.lat, currentStartLocation.lng], 13);
                mapInstanceRef.current = map;

                // Add map ready event
                map.whenReady(() => {
                    console.log('Map is ready');
                    if (map && map.invalidateSize) {
                        map.invalidateSize();
                    }
                });

                // Add tile layer with better error handling
                const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "© OpenStreetMap",
                    crossOrigin: true,
                    subdomains: ['a', 'b', 'c']
                });

                // Add fallback tile layer
                const fallbackTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "© OpenStreetMap France",
                    crossOrigin: true
                });

                // Try to add tiles
                try {
                    tileLayer.addTo(map);
                    console.log('Main tiles added successfully');
                } catch (error) {
                    console.log('Main tiles failed, using fallback:', error);
                    fallbackTileLayer.addTo(map);
                }

                // If main tiles fail, try fallback
                tileLayer.on('tileerror', (e: any) => {
                    console.log('Main tiles error:', e);
                    if (map.hasLayer(tileLayer)) {
                        map.removeLayer(tileLayer);
                        fallbackTileLayer.addTo(map);
                    }
                });

                // Force map to refresh after a short delay
                setTimeout(() => {
                    if (map && map.invalidateSize) {
                        map.invalidateSize();
                    }
                }, 100);

                // Add markers with error handling
                try {
                    // Create custom circle icon for start marker
                    const startIcon = L.divIcon({
                        className: 'custom-marker start-marker',
                        html: `
                            <div style="
                                background: #3B82F6;
                                color: white;
                                border: 3px solid white;
                                border-radius: 50%;
                                width: 20px;
                                height: 20px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                            ">
                            </div>
                        `,
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    });

                    const startMarker = L.marker([currentStartLocation.lat, currentStartLocation.lng], { icon: startIcon })
                        .addTo(map)
                        .bindPopup(`
                            <div class="text-center">
                                <strong>ĐIỂM BẮT ĐẦU</strong><br>
                                <small>Vị trí hiện tại của bạn</small><br>
                                <small>${currentStartLocation.lat.toFixed(4)}, ${currentStartLocation.lng.toFixed(4)}</small>
                            </div>
                        `);

                    const endMarker = L.marker([currentEndLocation.lat, currentEndLocation.lng])
                        .addTo(map)
                        .bindPopup(`
                            <div class="text-center">
                                <strong>ĐIỂM ĐÍCH</strong><br>
                                <strong>${currentStation.name}</strong><br>
                                <small>${currentStation.address}</small><br>
                                <small>Khoảng cách: ${currentStation.distance} km</small><br>
                                <small>Pin có sẵn: ${currentStation.batteriesAvailable} pin</small><br>
                                <small>${currentEndLocation.lat.toFixed(4)}, ${currentEndLocation.lng.toFixed(4)}</small>
                            </div>
                        `);

                    console.log('Markers added successfully');
                } catch (markerError) {
                    console.error('Error adding markers:', markerError);
                }

                // Get route from OSRM with a small delay to ensure map is ready
                setTimeout(() => {
                    if (isMountedRef.current && mapInstanceRef.current === map) {
                        getRoute(map, currentStartLocation, currentEndLocation);
                    }
                }, 200);

            } catch (err) {
                console.error("Lỗi khởi tạo bản đồ:", err);
                setError("Lỗi khởi tạo bản đồ");
                setIsLoading(false);
            }
        };

        const getRoute = async (map: any, start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
            try {
                // Check if component is still mounted and map is valid
                if (!isMountedRef.current || !map || !map.getPane || !mapInstanceRef.current) {
                    console.log("Component unmounted or map invalid, skipping route");
                    return;
                }

                const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

                const response = await fetch(url);
                const data = await response.json();

                // Check again if component is still mounted and map is valid after async operation
                if (!isMountedRef.current || !map || !map.getPane || !mapInstanceRef.current) {
                    console.log("Component unmounted or map invalid after route fetch, skipping route");
                    return;
                }

                if (data.routes && data.routes.length > 0) {
                    const route = data.routes[0];
                    const routeGeometry = route.geometry;

                    // Add route line
                    const L = (window as any).L;

                    // Additional safety checks
                    if (!L || !L.geoJSON || !map || !map.addLayer) {
                        console.error("Leaflet or map not properly initialized");
                        setError("Lỗi khởi tạo bản đồ");
                        setIsLoading(false);
                        return;
                    }

                    try {
                        const routeLine = L.geoJSON(routeGeometry, {
                            style: {
                                color: "#3b82f6",
                                weight: 5,
                                opacity: 0.8,
                            },
                        });

                        // Add to map with error handling - use addTo method
                        if (map && map.getPane && mapInstanceRef.current === map) {
                            routeLine.addTo(map);
                        } else {
                            console.log("Map not ready for route addition");
                            return;
                        }

                        // Add route info
                        const distance = (route.distance / 1000).toFixed(2);
                        const duration = Math.round(route.duration / 60);

                        // Add route info popup
                        const routeInfo = L.popup()
                            .setLatLng([(start.lat + end.lat) / 2, (start.lng + end.lng) / 2])
                            .setContent(`
                                <div class="text-center">
                                    <strong>🚗 Thông tin tuyến đường</strong><br>
                                    <small>Khoảng cách: ${distance} km</small><br>
                                    <small>Thời gian: ${duration} phút</small>
                                </div>
                            `);

                        routeLine.bindPopup(routeInfo);

                        // Fit map to show entire route
                        if (map && map.fitBounds && routeLine.getBounds) {
                            map.fitBounds(routeLine.getBounds(), { padding: [20, 20] });
                        }

                        setIsLoading(false);
                    } catch (routeError) {
                        console.error("Error adding route to map:", routeError);
                        setError("Lỗi khi hiển thị tuyến đường");
                        setIsLoading(false);
                    }
                } else {
                    setError("Không thể tìm thấy tuyến đường");
                    setIsLoading(false);
                }
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu OSRM:", err);
                setError("Lỗi khi tải tuyến đường");
                setIsLoading(false);
            }
        };

        loadLeaflet();

        // Cleanup
        return () => {
            isMountedRef.current = false;
            if (mapInstanceRef.current) {
                try {
                    mapInstanceRef.current.remove();
                } catch (e) {
                    console.log("Error removing map during cleanup:", e);
                }
                mapInstanceRef.current = null;
            }
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full h-[90vh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <Navigation className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Chỉ đường đến trạm
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {station.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                {station.address}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Map Container */}
                <div className="flex-1 relative">
                    {/* Legend */}
                    <div className="absolute top-4 left-4 z-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Chú thích</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                <span className="text-xs text-gray-700 dark:text-gray-300">Điểm bắt đầu (Vị trí của bạn)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-red-500 rounded-t-full" style={{
                                    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                                    transform: 'rotate(180deg)'
                                }}></div>
                                <span className="text-xs text-gray-700 dark:text-gray-300">Điểm đích (Trạm E-Swap)</span>
                            </div>
                        </div>
                    </div>

                    {isLoading && (
                        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10">
                            <div className="text-center">
                                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-600 dark:text-gray-400">Đang tải bản đồ...</p>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <X className="w-6 h-6 text-red-600 dark:text-red-400" />
                                </div>
                                <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Thử lại
                                </button>
                            </div>
                        </div>
                    )}

                    <div
                        ref={mapRef}
                        className="w-full h-full"
                        style={{
                            minHeight: "400px",
                            height: "100%",
                            width: "100%",
                            position: "relative"
                        }}
                    />
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{station.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Battery className="w-4 h-4" />
                                <span>{station.batteriesAvailable} pin</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{station.operatingHours}</span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
