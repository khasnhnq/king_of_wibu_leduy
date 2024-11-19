// Cài đặt express nếu chưa cài
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Giả sử có API tìm kiếm
app.get('/api/search', (req, res) => {
  const { destination, dates, guests } = req.query;

  // Logic tìm kiếm ở đây, ví dụ: lọc khách sạn, phòng, v.v.
  const results = [
    { id: 1, name: 'Hotel A', location: destination, price: 100 },
    { id: 2, name: 'Hotel B', location: destination, price: 200 },
    { id: 3, name: 'Hotel C', location: destination, price: 300 }
  ];

  res.json(results); // Trả kết quả tìm kiếm
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
