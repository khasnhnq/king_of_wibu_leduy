import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Tên quá ngắn!")
      .max(50, "Tên quá dài!")
      .required("Tên là bắt buộc"),
    lastName: Yup.string()
      .min(2, "Họ quá ngắn!")
      .max(50, "Họ quá dài!")
      .required("Họ là bắt buộc"),
    emailOrPhone: Yup.string()
      .matches(
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$|^\d{10,12}$/,
        "Email hoặc số điện thoại không hợp lệ"
      )
      .required("Email hoặc Số điện thoại là bắt buộc"),
    password: Yup.string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .matches(/[A-Z]/, "Phải chứa ít nhất một chữ hoa")
      .matches(/[a-z]/, "Phải chứa ít nhất một chữ thường")
      .matches(/\d/, "Phải chứa ít nhất một chữ số")
      .matches(/[@$!%*?&#]/, "Phải chứa ít nhất một ký tự đặc biệt")
      .required("Mật khẩu là bắt buộc"),
    birthDate: Yup.date()
      .max(new Date(), "Ngày sinh không hợp lệ")
      .required("Ngày sinh là bắt buộc"),
    gender: Yup.string()
      .oneOf(["Nam", "Nữ", "Khác"], "Giới tính không hợp lệ")
      .required("Giới tính là bắt buộc"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailOrPhone: "",
      password: "",
      birthDate: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      
      // Kiểm tra nếu email đã tồn tại
      const isEmailExist = users.some(user => user.emailOrPhone === values.emailOrPhone);
      
      if (isEmailExist) {
        setErrorMessage("Email đã tồn tại, vui lòng thử email khác.");
      } else {
        users.push(values);
        localStorage.setItem("users", JSON.stringify(users));
        setSuccessMessage("Đăng ký thành công!");
        setErrorMessage(null); // Xóa lỗi nếu đăng ký thành công
        
        // Chuyển hướng người dùng đến trang đăng nhập
        setTimeout(() => {
          navigate("/login"); // Định tuyến đến trang login
        }, 2000); // Chờ 2 giây trước khi chuyển hướng (có thể tùy chỉnh thời gian)
      }
    },
  });

  return (
    <div className="register-form-container">
      <h2>Tạo tài khoản mới</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="error-message">{formik.errors.firstName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Họ:</label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="error-message">{formik.errors.lastName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email hoặc Số điện thoại:</label>
          <input
            type="text"
            name="emailOrPhone"
            value={formik.values.emailOrPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
            <p className="error-message">{formik.errors.emailOrPhone}</p>
          )}
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error-message">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label>Ngày sinh:</label>
          <input
            type="date"
            name="birthDate"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthDate && formik.errors.birthDate && (
            <p className="error-message">{formik.errors.birthDate}</p>
          )}
        </div>
        <div className="form-group">
          <label>Giới tính:</label>
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <p className="error-message">{formik.errors.gender}</p>
          )}
        </div>
        <button type="submit" className="register-button">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
