export function getAuthErrorMessage(error: any): string {
    if (!error) return "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.";

    console.log("Auth error details:", {
        error,
        message: error.message,
        msg: error.msg,
        code: error.code,
        error_code: error.error_code,
        name: error.name,
        status: error.status
    });

    const errorMessage = error.message || error.msg || error.toString() || "";
    const errorCode = error.code || error.error_code || error.status || "";
    const errorName = error.name || "";

    // Handle OAuth specific errors
    if (errorMessage.includes("provider is not enabled") ||
        errorMessage.includes("Unsupported provider")) {
        return "Google đăng nhập chưa được kích hoạt trong Supabase. Vui lòng liên hệ quản trị viên.";
    }

    if (errorCode === "access_denied" || errorMessage.includes("access_denied")) {
        return "Bạn đã từ chối quyền truy cập. Vui lòng thử lại và cho phép quyền truy cập.";
    }

    if (errorCode === "exchange_failed") {
        return "Lỗi khi xác thực với Google. Vui lòng thử lại.";
    }

    if (errorCode === "unexpected_failure") {
        return "Lỗi xác thực không mong muốn. Vui lòng kiểm tra cấu hình Supabase và thử lại.";
    }

    // Handle AuthApiError specifically
    if (errorName === "AuthApiError" || errorName.includes("AuthApiError")) {
        if (errorMessage.includes("Invalid login credentials") || errorMessage.includes("Invalid password")) {
            return "Email hoặc mật khẩu không đúng. Vui lòng thử lại.";
        }
        if (errorMessage.includes("Email not confirmed")) {
            return "Vui lòng xác nhận email trước khi đăng nhập.";
        }
        if (errorMessage.includes("User already registered")) {
            return "Email này đã được đăng ký. Vui lòng đăng nhập hoặc sử dụng email khác.";
        }
        if (errorMessage.includes("Password should be at least")) {
            return "Mật khẩu cần tối thiểu 6 ký tự.";
        }
        if (errorMessage.includes("Invalid email")) {
            return "Email không hợp lệ. Vui lòng kiểm tra lại.";
        }
        if (errorMessage.includes("Signup is disabled")) {
            return "Đăng ký tài khoản tạm thời bị tắt. Vui lòng liên hệ hỗ trợ.";
        }
        if (errorMessage.includes("Email rate limit exceeded")) {
            return "Quá nhiều email được gửi. Vui lòng thử lại sau ít phút.";
        }
    }

    // Handle specific error messages
    if (errorMessage.includes("Invalid login credentials") ||
        errorMessage.includes("Invalid password")) {
        return "Email hoặc mật khẩu không đúng. Vui lòng thử lại.";
    }

    if (errorMessage.includes("Email not confirmed")) {
        return "Vui lòng xác nhận email trước khi đăng nhập.";
    }

    if (errorMessage.includes("User already registered")) {
        return "Email này đã được đăng ký. Vui lòng đăng nhập hoặc sử dụng email khác.";
    }

    if (errorMessage.includes("Password should be at least")) {
        return "Mật khẩu cần tối thiểu 6 ký tự.";
    }

    if (errorMessage.includes("Invalid email")) {
        return "Email không hợp lệ. Vui lòng kiểm tra lại.";
    }

    if (errorMessage.includes("Signup is disabled")) {
        return "Đăng ký tài khoản tạm thời bị tắt. Vui lòng liên hệ hỗ trợ.";
    }

    if (errorMessage.includes("Email rate limit exceeded")) {
        return "Quá nhiều email được gửi. Vui lòng thử lại sau ít phút.";
    }

    if (errorMessage.includes("Network error") || errorMessage.includes("Failed to fetch")) {
        return "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại.";
    }

    // Handle specific error codes
    if (errorCode === "validation_failed") {
        return "Thông tin không hợp lệ. Vui lòng kiểm tra lại.";
    }

    if (errorCode === "invalid_credentials" || errorCode === "invalid_grant") {
        return "Email hoặc mật khẩu không đúng. Vui lòng thử lại.";
    }

    if (errorCode === "email_not_confirmed") {
        return "Vui lòng xác nhận email trước khi đăng nhập.";
    }

    if (errorCode === "too_many_requests") {
        return "Quá nhiều lần thử đăng nhập. Vui lòng thử lại sau ít phút.";
    }

    if (errorCode === "user_not_found") {
        return "Tài khoản không tồn tại. Vui lòng đăng ký trước.";
    }

    // Default fallback
    return errorMessage || "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.";
}
