### ※項目 4. 建立一個能把數字轉為有千分位的字串且保留小數位數的 filter，並在頁面展示 filter 的功能。###
1. 新建一個 filter 功能，參照目前專案的構結檔案應放置在 /src/utils/filters 下，filter 名稱為"commafy"，作法可參考 filters 內的 demo.js。
2. 此 filter 可將數字轉為有千分位的字串且保留小數位數，例如將 10000.00 轉為 10,000.00、1000 轉為 1,000。
3. 此 filter function 需加上 JSDoc 註解。
4. 建立一個 FilterDemo 頁面，展示 commafy filter 功能是否符合需求。
5. FilterDemo 頁面的路由名稱為"filterDemo"，網址路徑為"/filterDemo"。
6. 在 Practice 頁面上的練習項目清單，加上 FilterDemo 連結，連結文字為"Filter Demo"，點擊後會轉至 FilterDemo 頁面。