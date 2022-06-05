/**
 * @description 
 * 將千分位與小數位轉換輸出
 * @param {number,string}   
 * 字串值不得含有中文
 * 數值不得含有英文 e 記號
 * @returns 
 * 以 "." 符號做陣列分割，區隔整數與小數
 * 整數與小數皆以三位數做一次 regex 處理
 * 輸出陣列長度為 2 的 整數、小數資料 並整合輸出
 */
export function filter(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}