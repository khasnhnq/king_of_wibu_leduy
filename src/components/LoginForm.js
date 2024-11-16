import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Kiểm tra xem có người dùng nào khớp không
    const user = users.find(user => (user.emailOrPhone === emailOrPhone) && (user.password === password));
    
    if (user) {
      // Nếu tìm thấy người dùng hợp lệ, điều hướng đến trang chính hoặc trang mong muốn
      navigate("/home");
    } else {
      setErrorMessage("Thông tin đăng nhập không chính xác.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Đăng nhập</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email hoặc Số điện thoại:</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
