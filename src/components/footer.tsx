import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t bg-card py-12 text-card-foreground">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block text-2xl font-bold">
                            E-Swap
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Nền tảng đổi pin mở đầu tiên tại Việt Nam. Sử dụng pin sạch, tốc độ nhanh, tương thích cho nhiều hãng xe.
                        </p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="h-5 w-5"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <title>Facebook</title>
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                </svg>
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="h-5 w-5"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <title>Instagram</title>
                                    <path d="M7.03.084c-1.276.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388-.665.668-1.075 1.337-1.38 2.127-.295.764-.496 1.637-.552 2.914C0 8.353 0 8.764 0 12s0 3.647.063 4.926c.06 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.075 2.128 1.38.763.295 1.636.496 2.913.552C8.94 24 9.351 24 12 24s3.06 0 4.926-.063c1.277-.06 2.149-.264 2.911-.563.789-.308 1.458-.72 2.123-1.388.665-.668 1.075-1.337 1.38-2.128.295-.763.496-1.636.552-2.913C24 15.647 24 15.236 24 12s0-3.647-.063-4.926c-.06-1.277-.264-2.149-.563-2.911-.308-.789-.72-1.457-1.388-2.123-.668-.665-1.337-1.075-2.128-1.38-.763-.295-1.636-.496-2.913-.552C15.647 0 15.236 0 12 0S8.353 0 7.03.084zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.162a3.999 3.999 0 1 0 0-7.998 3.999 3.999 0 0 0 0 7.998zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                                </svg>
                            </Link>

                            {/* Twitter (X) */}
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="h-5 w-5"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <title>X</title>
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932Z" />
                                </svg>
                            </Link>

                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="h-5 w-5"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <title>YouTube</title>
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm font-medium tracking-wider uppercase">Truy cập nhanh</p>
                        <ul className="space-y-2">
                            <li><Link href="/home" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Trang chủ</Link></li>
                            <li><Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Về chúng tôi</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Liên hệ</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm font-medium tracking-wider uppercase">Dịch vụ khách hàng</p>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Tìm hiểu về E-Swap</Link></li>
                            <li><Link href="/returns" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Trạm sạc và pin</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4 lg:row-span-2">
                        <p className="text-sm font-medium tracking-wider uppercase">Liên hệ nhanh</p>
                        <p className="text-sm text-muted-foreground">
                            Đăng ký nhận bản tin để nhận ưu đãi và cập nhật độc quyền sớm nhất
                        </p>
                        <form className="flex space-x-2">
                            <input
                                className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-xs shadow-xs transition-all outline-none selection:bg-primary selection:text-primary-foreground max-w-[220px]"
                                placeholder="Email của bạn"
                                aria-label="Email for newsletter"
                                type="email"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-3 h-8 text-xs font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 cursor-pointer"
                            >
                                Nhận
                            </button>
                        </form>

                        <div className="space-y-2 pt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>123 Phường 1, Quận 1, TP. Hồ Chí Minh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    className="lucide lucide-map-pin h-4 w-4"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                    <rect x={2} y={4} width={20} height={16} rx={2} />
                                </svg>
                                <span>support@eswap.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                                <span>+1 (234) 567-8900</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="container flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div className="text-sm text-muted-foreground">
                        Copyright © E-Swap team 2025. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Điều khoản Dịch vụ</Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Chính sách Bảo mật</Link>
                        <Link href="/cookie" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Chính sách Cookie</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
