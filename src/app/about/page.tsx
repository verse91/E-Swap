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

      {/* Giới thiệu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Khi cam kết Net Zero 2050 gặp thực tế đô thị</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Việt Nam cam kết tương lai không phát thải vào năm 2050. Nhưng với hơn 77 triệu xe máy trên đường, câu hỏi không phải là "liệu chúng ta có thể?" mà là "làm thế nào để chuyển đổi không bỏ ai lại phía sau?". Giao thông xanh không thể chỉ là giấc mơ của những người có đủ thời gian chờ 8 tiếng để sạc pin, hay đủ tiền để chấp nhận bị ràng buộc bởi một hệ sinh thái đóng kín. Nó phải là giải pháp dành cho tất cả, từ người giao hàng chạy 100km mỗi ngày đến sinh viên lo lắng về quãng đường còn lại trên đồng hồ pin.
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-8">Xanh thực sự, hay chỉ chuyển ô nhiễm sang nơi khác?</h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                68% người dùng xe điện đang sống với nỗi lo hết pin (range anxiety). 75% người đi xe xăng từ chối chuyển đổi vì thời gian sạc quá lâu. Nhưng đây chưa phải vấn đề lớn nhất. Sự thật đằng sau "làn sóng xanh" là phần lớn xe điện vẫn sạc bằng điện từ than đá. Chúng ta chỉ đang di chuyển khói độc từ ống xả xe máy sang ống khói nhà máy điện. Đây không phải là tương lai mà thế hệ tiếp theo xứng đáng có được.
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-8">E-Swap: Khi năng lượng mặt trời gặp công nghệ đổi pin</h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Giải pháp này không chỉ dành cho những người tiên phong, mà cho tất cả những ai đang di chuyển mỗi ngày. E-Swap là trạm đổi pin đầu tiên vận hành 100% bằng năng lượng mặt trời. Không phát thải từ đầu đến cuối, thực sự xanh từ "giếng dầu tới bánh xe". Đổi pin dưới 2 phút, không chờ đợi. Nền tảng mở cho mọi hãng xe, không vendor lock-in. Đây là cách chúng ta giữ lời hứa Net Zero 2050, một lần đổi pin một.
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
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="relative group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-6 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl h-full hover:scale-105 transition-transform">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg text-white text-2xl font-bold">
                      {member.name.split(' ').pop()?.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{member.school}</p>
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
