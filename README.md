# 餐廳清單
這是一個使用 Node.js + Express 打造的餐廳網站，此網站提供餐廳資訊及圖片讓你參考，可以讓使用者在頁面上做新增、刪除、更新...等動作，同時可以透過搜尋關鍵字的方式找到符合你的餐廳以及依照自己的喜好排序瀏覽網頁。


## Features 產品功能
- 列出所有餐廳清單 (可依喜好排序瀏覽頁面)
- 可透過搜尋列輸入餐廳名稱，找出相關餐廳
- 點擊餐廳圖片，顯示餐廳詳細資訊　ex:電話、地址、型態
- 新增餐廳資訊
- 刪除餐廳資訊
- 更新餐廳資訊

## Install 安裝與執行步驟
### 以下指令請在終端機操作
1. Clone此專案至本機
```
git clone https://github.com/belindallin/restaurant-list-refactor.git
```
2. 進入存放專案的資料夾
```
cd restaurant-list-refactor
```
3. 安裝npm套件
```
npm install
```
4. 安裝nodemon
```
npm i -g nodemon
```
5. 開啟mongodb，將資料下載本機mongpdb
```
npm run seed
```
6. 啟動伺服器，執行app.js
```
npm run dev
```
7. 此時終端機出現以下字樣表示伺服器與資料庫已啟動並成功連結
```
Resaurant Web is running on http://localhost:3000
mongoose connected
```
8. 在瀏覽器輸入http://localhost:3000 即可開啟專案