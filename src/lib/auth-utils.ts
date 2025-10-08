export function getAuthErrorMessage(error: any): string {
    if (!error) return "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.";

    // Debug logging to help identify the exact error structure
    console.log("Auth error details:", { 
        error, 
        message: error.message, 
        msg: error.msg,
        code: error.code,
        error_code: error.error_code,
        name: error.name,
        status: error.status
    });

    // Get error message from various possible properties
    const errorMessage = error.message || error.msg || error.toString() || "";
    const errorCode = error.code || error.error_code || error.status || "";
    const errorName = error.name || "";

    // Handle AuthApiError specifically
    if (errorName === "AuthApiError" || errorName.includes("AuthApiError")) {
        if (errorMessage.includes("Invalid login credentials") || errorMessage.includes("Invalid password")) {
            return "Tài khoản của bạn chưa được tạo. Vui lòng đăng ký trước.";
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

    // Handle specific error messages first (more specific)
    if (errorMessage.includes("Invalid login credentials") || 
        errorMessage.includes("Invalid password")) {
        return "Tài khoản của bạn chưa được tạo. Vui lòng đăng ký trước.";
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
        if (errorMessage.includes("provider is not enabled") || 
            errorMessage.includes("Unsupported provider")) {
            return "Google đăng nhập chưa được kích hoạt. Vui lòng sử dụng email và mật khẩu để đăng nhập.";
        }
        return "Thông tin không hợp lệ. Vui lòng kiểm tra lại.";
    }

    if (errorCode === "invalid_credentials" || errorCode === "invalid_grant") {
        return "Tài khoản của bạn chưa được tạo. Vui lòng đăng ký trước.";
    }

    if (errorCode === "email_not_confirmed") {
        return "Vui lòng xác nhận email trước khi đăng nhập.";
    }

    if (errorCode === "too_many_requests") {
        return "Quá nhiều lần thử đăng nhập. Vui lòng thử lại sau ít phút.";
    }

    if (errorCode === "user_not_found") {
        return "Tài khoản của bạn chưa được tạo. Vui lòng đăng ký trước.";
    }

    // Additional fallback for common Supabase errors
    if (errorMessage === "Invalid login credentials") {
        return "Tài khoản của bạn chưa được tạo. Vui lòng đăng ký trước.";
    }

    // Default fallback
    return "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.";
}