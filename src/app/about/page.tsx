"use client";

import { Building2, Target, Heart, Award, Users, Lightbulb, Factory, Database } from "lucide-react";
import Link from "next/link";

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
              Công ty Cổ phần<br />Phương tiện điện thông minh E-SWAP
            </h1>
            <p className="text-lg md:text-xl text-emerald-700/80 dark:text-emerald-300/80 leading-relaxed">
              Thúc đẩy sự phát triển bền vững của Việt Nam và thế giới thông qua phương tiện điện thông minh
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
                E-SWAP Motors được thành lập vào năm 2018 trong một căn phòng nhỏ 10m² với khát vọng thúc đẩy sự phát triển bền vững của Việt Nam và thế giới thông qua phương tiện điện thông minh, đưa năng lượng tái tạo vào giao thông. E-SWAP là viết tắt của <strong>Smart Electric Vehicles X</strong>, "X" vừa là một ẩn số, vừa có thể là một dòng phương tiện điện nào đó và cũng có nghĩa là X-factor (nhân tố X).
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Công ty được thành lập từ ý tưởng của <strong>Ts. Nguyễn Hữu Phước Nguyên</strong>, người luôn ấp ủ giấc mơ xây dựng một Hyundai cho Việt Nam, và 2 cộng sự khác là <strong>Ts. Nguyễn Trọng Hải</strong> – một bạn học cũ của anh Nguyên khi cả hai cùng lấy bằng Tiến sĩ ngành Cơ khí ở Đại học Michigan – Ann Arbor (Mỹ) và anh <strong>Nguyễn Đình Quảng</strong> – một chuyên gia về hệ thống IoT.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                Ngay từ những ngày đầu, công ty đã tập trung vào xây dựng một hệ sinh thái toàn diện cho xe máy điện thông minh để thúc đẩy sự phát triển của loại phương tiện này ở Việt Nam và Đông Nam Á. Thông qua hệ sinh thái, công ty muốn giải quyết triệt để các vấn đề của xe điện hiện nay. Đó là sự bất tiện trong nạp năng lượng và chi phí cao. Đồng thời, mang lại cho người dùng những trải nghiệm và giá trị mới mẻ thông qua việc khai thác dữ liệu từ hệ sinh thái và ứng dụng các công nghệ mới nhất như IoT, AI, dữ liệu lớn.
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
                    Trở thành một công ty hàng đầu về công nghệ tương lai, thúc đẩy Việt Nam và thế giới hướng tới phát triển bền vững.
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
                    Thúc đẩy phát triển bền vững thông qua phương tiện điện thông minh và năng lượng tái tạo, bền vững trong chất lượng và bền vững trong giá trị.
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
              {[
                {
                  icon: Building2,
                  title: "Bền vững",
                  description: "E-SWAP Motors hướng tới sự bền vững về môi trường, bền vững về chất lượng và bền vững trong giá trị mà công ty mang lại cho cộng đồng.",
                  color: "from-emerald-500 to-green-600"
                },
                {
                  icon: Lightbulb,
                  title: "Khả năng",
                  description: "E-SWAP Motors luôn thách thức giới hạn để mang lại khả năng mới, góp phần tích cực vào sự phát triển lâu dài của xã hội.",
                  color: "from-green-500 to-teal-600"
                },
                {
                  icon: Award,
                  title: "Dịch vụ",
                  description: "E-SWAP Motors cung cấp những dịch vụ về giao thông thông minh, thân thiện môi trường, đem lại trải nghiệm tốt nhất cho khách hàng.",
                  color: "from-teal-500 to-cyan-600"
                },
                {
                  icon: Heart,
                  title: "Hân hoan",
                  description: "E-SWAP Motors mang đến niềm hân hoan, hạnh phúc cho khách hàng của mình thông qua chất lượng của sản phẩm và dịch vụ.",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((value, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative bg-white dark:bg-background rounded-2xl p-6 border border-emerald-200/30 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
              Năng lực cốt lõi
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Nghiên cứu & Phát triển",
                  description: "Sở hữu đội ngũ nhân lực công nghệ cao, E-SWAP làm chủ toàn bộ quá trình nghiên cứu, phát triển sản phẩm cũng như các công nghệ lõi của hệ sinh thái. Công ty có 10 bằng sáng chế, 5 thiết kế kiểu dáng công nghiệp và 4 nhãn hiệu được đăng ký bảo hộ."
                },
                {
                  icon: Factory,
                  title: "Sản xuất hàng loạt",
                  description: "Với nhà máy riêng, E-SWAP làm chủ sản xuất hàng loạt xe máy điện, pin, trạm đổi pin, và các thành phần quan trọng trên xe như điều khiển động cơ, bộ quản lý năng lượng, màn hình."
                },
                {
                  icon: Database,
                  title: "Dịch vụ giao thông thông minh",
                  description: "Với việc phát triển một hệ sinh thái xe máy điện toàn diện, E-SWAP hướng tới cung cấp những dịch vụ mới mẻ với nhiều giá trị cho người dùng dựa trên dữ liệu và phần mềm."
                }
              ].map((competency, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/80 dark:bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                      <competency.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{competency.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{competency.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
              Đội ngũ nhân sự
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Đội ngũ nhân sự của E-SWAP Motors là một tập thể có trình độ cao, có kinh nghiệm học tập và làm việc từ nhiều nước trên thế giới như <strong>Mỹ, Israel, Nhật Bản, Hàn Quốc, Hà Lan, Đài Loan</strong>,… và nhiều tập đoàn lớn như <strong>Honda, Ford, GM, PROTON, SYM, Yamaha, Viettel</strong>,…
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Chúng tôi cùng nhau chia sẻ khát vọng xây dựng một công ty công nghệ sâu, phát triển bền vững, lâu dài, có khả năng cạnh tranh với thế giới. Chúng tôi sẵn sàng từ bỏ những lợi ích ngắn hạn và thoát khỏi vùng an toàn, dấn thân đón nhận thách thức để kiến tạo những giá trị lớn lao cho cộng đồng và đất nước.
              </p>
            </div>

            <Link href="/careers">
              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Gia nhập cùng chúng tôi
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
