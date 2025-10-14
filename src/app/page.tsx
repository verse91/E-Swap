"use client";

import { Battery, Zap, Leaf, Clock, MapPin, Smartphone, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO, TESTIMONIALS, PROJECT_STATS } from "@/config/team-info";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <p className="text-emerald-300 text-sm font-medium">🌱 Kiến tạo tương lai giao thông xanh</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              {COMPANY_INFO.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-4">
              {COMPANY_INFO.description}
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-emerald-400 mb-12">
              "{COMPANY_INFO.slogan}"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/sign-in">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                  Bắt đầu ngay <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/30 transition-all hover:scale-105 flex items-center gap-2">
                  Tìm hiểu thêm
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {Object.entries(PROJECT_STATS).slice(0, 4).map(([key, value], idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-3xl font-bold text-white mb-2">{value}</p>
                  <p className="text-emerald-200 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
                Giải pháp toàn diện
              </h2>
              <p className="text-xl text-muted-foreground">
                Phá vỡ rào cản của giao thông điện với công nghệ tiên tiến
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.features.map((feature, idx) => {
                const icons = [Zap, Battery, Smartphone, Leaf, Clock, MapPin];
                const Icon = icons[idx];
                
                return (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-white dark:bg-background rounded-3xl p-8 border border-emerald-200/30 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
                Người dùng nói gì về E-Swap
              </h2>
              <p className="text-xl text-muted-foreground">
                Trải nghiệm thực tế từ cộng đồng người dùng
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sẵn sàng tham gia cuộc cách mạng xanh?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Đổi mới không phải là tạo ra thứ chưa ai có, mà là giải quyết vấn đề ai cũng gặp
            </p>
            <Link href="/sign-in">
              <button className="px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg">
                Đăng ký ngay
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
