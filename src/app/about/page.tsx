"use client";

import { Building2, Target, Heart, Award, Users, Lightbulb, Factory, Database, Zap, Battery } from "lucide-react";
import Link from "next/link";
import { TEAM_MEMBERS, COMPANY_INFO } from "@/config/team-info";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 dark:from-emerald-300 dark:via-green-300 dark:to-teal-300 bg-clip-text text-transparent">
              {COMPANY_INFO.fullName}
            </h1>
            <p className="text-lg md:text-xl text-emerald-700/80 dark:text-emerald-300/80 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mt-4">
              "{COMPANY_INFO.slogan}"
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dự án <strong>E-Swap</strong> được khởi xướng vào năm {COMPANY_INFO.founded} bởi một nhóm sinh viên đam mê công nghệ xanh từ các trường UIT, BKU, UEH, Đại học Văn Hiến thuộc ĐHQG TP.HCM. Với khát vọng giải quyết bài toán nan giải của giao thông điện tại Việt Nam, chúng tôi đã nghiên cứu và phát triển một Mô hình <strong>Trung tâm Năng lượng Xanh 2-trong-1</strong> hoàn toàn mới.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Dự án được dẫn dắt bởi đội ngũ sáng lập gồm {TEAM_MEMBERS[0].name}, {TEAM_MEMBERS[1].name}, {TEAM_MEMBERS[2].name}, {TEAM_MEMBERS[3].name}, và {TEAM_MEMBERS[4].name}.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Chúng tôi nhận thấy hai vấn đề lớn của thị trường xe điện hiện nay: (1) Nguồn phát thải chỉ được "di dời" khi sạc pin bằng điện lưới từ nhiên liệu hóa thạch, và (2) Thị trường bị phân mảnh bởi các hệ sinh thái khép kín. <strong>E-Swap</strong> ra đời để phá vỡ những rào cản đó thông qua hạ tầng năng lượng mở, sử dụng 100% năng lượng tái tạo từ mặt trời.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Tầm nhìn</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-green-200/50 dark:border-green-800/30 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Sứ mệnh</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
              Giá trị cốt lõi
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPANY_INFO.coreValues.map((value, idx) => {
                const icons = [Building2, Zap, Award, Heart];
                const colors = [
                  "from-emerald-500 to-green-600",
                  "from-green-500 to-teal-600",
                  "from-teal-500 to-cyan-600",
                  "from-cyan-500 to-blue-600"
                ];
                const Icon = icons[idx];
                
                return (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative bg-white dark:bg-background rounded-2xl p-6 border border-emerald-200/30 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[idx]} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
              Tính năng nổi bật
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.features.map((feature, idx) => {
                const icons = [Zap, Battery, Lightbulb, Database, Factory, Award];
                const Icon = icons[idx];
                
                return (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
                Đội ngũ nhân sự
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Chúng tôi là một tập thể trẻ, năng động và đam mê công nghệ xanh. Mỗi thành viên đều mang trong mình khát vọng đóng góp vào sự phát triển bền vững của Việt Nam.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-6 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl h-full hover:scale-105 transition-transform">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg text-white text-2xl font-bold">
                      {member.name.split(' ').pop()?.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 text-center font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground text-center mb-3">{member.school}</p>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/careers">
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Gia nhập cùng chúng tôi
                </button>
              </Link>
            </div>
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
