# RestaurantAppAPI

## Giới thiệu

Đây là API cho ứng dụng quản lý nhà hàng, bao gồm các chức năng như quản lý người dùng, hình ảnh, bình luận, đơn hàng, đánh giá và lượt thích.

## Cài đặt

1. Clone repository về máy của bạn:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Cài đặt các dependencies:
    ```sh
    npm install
    ```

3. Tạo file `.env` trong thư mục gốc và cấu hình các biến môi trường:
    ```env
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=khang0903
    DB_NAME=db_food
    DB_PORT=3307
    JWT_SECRET=123456
    ```

4. Khởi tạo cơ sở dữ liệu:
    ```sh
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. Chạy server:
    ```sh
    npm start
    ```

## Sử dụng

### Đăng ký người dùng

- **URL**: `/auth/register`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "full_name": "Nguyen Van A",
      "email": "a.nguyen@example.com",
      "password": "password123"
    }
    ```

### Đăng nhập

- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "email": "a.nguyen@example.com",
      "password": "password123"
    }
    ```

### Thêm ảnh

- **URL**: `/images`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
    ```json
    {
      "ten_hinh": "New Burger",
      "duong_dan": "https://example.com/burger.jpg",
      "mo_ta": "A delicious new burger",
      "nguoi_dung_id": 1
    }
    ```

### Xóa ảnh

- **URL**: `/images/:imageId`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token>`

### Thêm bình luận

- **URL**: `/images/:imageId/comments`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
    ```json
    {
      "content": "Great image!"
    }
    ```

### Tìm kiếm ảnh

- **URL**: `/images/search?name=burger`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`

### Lấy thông tin ảnh

- **URL**: `/images/:imageId`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`

## Testing

Bạn có thể sử dụng Postman để test các API. Import file [postman_test.json](postman_test.json) vào Postman để có sẵn các request mẫu.

## License

This project is licensed under the MIT License.