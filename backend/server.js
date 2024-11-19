const express = require('express');
const app = express();
const port = 5000; // Port bạn muốn chạy server

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// API root
app.get('/', (req, res) => {
  res.send('Welcome to the Hotel API!');
});

// API lấy danh sách khách sạn
app.get('/api/hotels', (req, res) => {
  const hotels = [
    { id: 1, name: 'Hotel A', location: 'Phu Quoc' },
    { id: 2, name: 'Hotel B', location: 'Da Nang' },
    { id: 3, name: 'Hotel C', location: 'Ha Noi' },
  ];
  res.json(hotels);
});

// API thêm khách sạn
app.post('/api/hotels', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ message: 'Name and location are required' });
  }
  const newHotel = {
    id: Date.now(), // Tạo ID dựa trên thời gian
    name,
    location,
  };
  // Giả lập thêm vào cơ sở dữ liệu
  res.status(201).json(newHotel);
});

// API cập nhật thông tin khách sạn
app.put('/api/hotels/:id', (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ message: 'Name and location are required' });
  }
  // Giả lập cập nhật khách sạn
  const updatedHotel = { id, name, location };
  res.json(updatedHotel);
});

// API xóa khách sạn
app.delete('/api/hotels/:id', (req, res) => {
  const { id } = req.params;
  // Giả lập xóa khách sạn
  res.status(204).send(); // Trả về status 204 khi xóa thành công
});

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
