import express from "express";
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3003;

// api 路由
app.get("/ping", (req, res) => {
    res.send('pong pone pone')
})

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});