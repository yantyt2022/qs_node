const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
const bodyParser = require('body-parser');

// app.use('/', (req, res) => {
//   console.log(req);
//   res.end('hello, express');
// });
// 启用模板
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// 显示模板
// app.use('/', (req, res) => {
//   res.render('index');
// });

//请求对象  响应传值
app.get('/', (req, res) => {
  const query = url.parse(req.url, true);
  // console.log(url.parse(req.url, true));
  res.render('index', query);
})

const books = [
  { id:27173866, title: '颠覆者：周鸿祎自传', author: ['周鸿祎']},
  { id:27035202, title: '芒果街，我自己的小屋', author: ['桑德拉·希斯内罗丝']}
];
app.get('/books', (req, res) => {
  res.json(books);
});

// http://localhost:3000/books?id=27173866  url 构成
app.get('/books', (req, res) => {
  const id = url.parse(req.url, true).id;
  // console.log(id);
  const book = books.filter(book => book.id == id);
  res.json(book);
})

app.post('/books', (req, res) => {
  // console.log(req.body);

  books.push(req.body);
  res.json(books);
})


// Update  加入范海涛
app.put('/books', (req, res) => {
  // '范海涛'
  // console.log(req.url);
  // const id = req.body
  console.log(req.body);
  const id = req.body.id;
  const author = req.body.author;
  const book = books.map(book => {
    if (book.id == id) {
      book.author.push(author);
    } 
    return book;
  })
  // console.log(id);
  res.json(books);
});

app.delete('/books', (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  let index = books.findIndex(book => book.id == id);
  books.splice(index, 1);
  console.log(books);
  res.json(books);
})

app.listen(3000, function() {
   console.log('web server 启动了');
});