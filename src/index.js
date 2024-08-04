const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

/*:
express.static():
Đây là một middleware tích hợp sẵn trong Express.js.
Nó được sử dụng để phục vụ các tệp tĩnh như HTML, CSS, JavaScript, hình ảnh, và các tài liệu khác từ thư mục cụ thể.
Middleware này giúp bạn đưa các tệp tĩnh vào quy trình xử lý của ứng dụng Express.
path.join(__dirname, "public"):
__dirname là biến toàn cục trong Node.js, chứa đường dẫn tuyệt đối đến thư mục chứa tệp đang thực thi.
path.join() được sử dụng để kết hợp đường dẫn tới thư mục public với __dirname, tạo ra đường dẫn hoàn chỉnh đến thư mục tĩnh.
Kết quả:
Khi bạn sử dụng câu lệnh trên, Express sẽ phục vụ các tệp tĩnh từ thư mục public khi có các yêu cầu HTTP tương ứng.
Ví dụ: Nếu bạn có tệp style.css trong thư mục public, bạn có thể truy cập nó qua đường dẫn /style.css. */

app.use(express.static(path.join(__dirname, "public"))); //http://localhost:3000/conmeo.jpg

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource\\views"));

app.get("/", (req, res) => {
  //http://localhost:3000/home
  res.render("home");
});

app.get("/news", (req, res) => {
  //localhost:3000/news
  http: res.render("news");
});

app.get("/football", (req, res) => {
  //localhost:3000/football
  http: res.render("football");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
