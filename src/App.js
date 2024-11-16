import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route/routes';  // Đảm bảo tên import khớp với tên export
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />          {/* Header xuất hiện trên tất cả các trang */}
        <AppRoutes />       {/* Định nghĩa các tuyến đường của ứng dụng */}
        <Footer />          {/* Footer xuất hiện trên tất cả các trang */}
      </div>
    </Router>
  );
}

export default App;
