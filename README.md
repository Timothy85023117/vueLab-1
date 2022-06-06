### ※項目 7. 建立一個 popup modal component。###
1. 建立一個組件名稱為 PopupModal。
2. 組件必須要有 title、isOpen 屬性，title 用來提供標題文字。isOpen 用來控制 modal 的開關。
3. 使用 slot 方式注入 modal 的主要內容區塊。
4. 建立一個 ModalDemo 頁面，展示此組件的功能是否符合需求。
5. ModalDemo 頁面的路由名稱為"modalDemo"，網址路徑為"/modalDemo"。
6. 在 Practice 頁面上的練習項目清單，加上 ModalDemo 連結，連結文字為"Modal Demo"，點擊後會轉至 ModalDemo 頁面。

** 使用 vuex 管理 lightBox 顯示狀態 **
** 使用 vue 3 Teleport 移動 lightBox dom 錨點 **