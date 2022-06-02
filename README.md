# Thinkpower - Vue.js Labs #
專案使用 **Vue Cli 5** 建立專案。  

***
## 專案結構 ##
* **public/** – 靜態檔案資料夾，直接複製到打包後的資料夾  
* **src/assets/** – 程式使用到的 全域css、字型、圖片檔案  
* **src/components/** – 共用組件  
* **src/constant/** – 常數設定  
* **src/router/** – 路由設定  
* **src/services/** – 共用邏輯服務，例如：呼叫 API 的服務、共用(商業)邏輯  
* **src/setup/** – 全域 plugin、filter、mixin… 設定  
* **src/store/** – 全域狀態存放位置(vuex 狀態管理)  
* **src/utils/** – 共用工具，例如：helpr、vee validators(custom rules、message)、filter…  
* **src/views/** – 功能頁面  
* **src/App.vue** – Vue 主組件  
* **src/main.js** – 程式進入點  
* **vue.config.js** – vue cli 5 設定檔  

***
## 組件命名規則 ##

* 包含 **compoments**、**views** 。  
* 使用**資料夾**做區隔。  
* 使用**大駝峰**命名。  
* 一律以 **index.vue** 做為組件的主程式。  
* 組件內的組件若為非共用組件直接新增 .vue 檔案並且以**大駝峰**命名。  

***
## 組件在 template 使用的名稱規則 ##
* 名稱與 binding 屬性(props)一律改為 **kebab-case**。(例如：PopupModal 寫成 popup-modal，isOpen 改為 is-open。)
***
## Javascript 函式或方法註解規則 ##
* 必需說明的項目為 **`@description`**(功能說明)、**`@param`**(參數型態、用途說明) 、**`@returns`**(回傳值型態與說明，無回傳值時不需註解)。

## 練習項目 ##
> **注意：請依照上述的專案構結、命名規則與練習項目提供的畫面圖片進行開發。**  
### **※項目 1. 新增一個練習項目清單頁面，透過選單連結可以開啟該頁面。** ###

### **※項目 2. 建立一個計數器頁面，可透過 Practice 頁面上練習項目清單的 Counter 連結開啟該頁。** ###

### **※項目 3. 建立一個清單搜尋頁面，會依照輸入的關鍵字(不分大小寫)即時過濾畫面顯示的清單，並顯示目前清單筆數，可透過 Practice 頁面上練習項目清單的 Search 連結開啟該頁。** ###

### **※項目 4. 建立一個能把數字轉為有千分位的字串且保留小數位數的 filter，並在頁面展示 filter 的功能。** ###

### **※項目 5. 建立一個 List component，可傳入字串陣列資料，點擊項目時會觸發一個自訂事件 clickitem 傳入該項目的資料內容與 index。並且在頁面展示組件的功能。** ###
  

### **※項目 6. 把頁面上的選單改寫為 component，原有的樣式、功能都要與原本相同。** ###
 

### **※項目 7. 建立一個 popup modal component。** ###
    

### **※項目 8. 新增一個使用者註冊頁面，表單需做欄位檢核，並且有送出與清除功能。** ###
 

### **※項目 9. 呼叫 API 取得產品資料在畫面顯示並且可查看產品明細資料。** ###
  

### **※項目 10. 建立一個頁面，頁面上有個 input 與按鈕當按下按鈕後，要將 focus 移至 input 上。** ###


### **※項目 11. 建立一個頁面，頁面上要有可以左右滑動、自動輪播圖片的區塊，並且資料由 API 取得。** ###


### **※項目 12. 建立一個計數器頁面，可透過 Practice 頁面上練習項目清單的 CounterWithState 連結開啟該頁。** ###
 