// 監聽上方 textarea 的輸入事件
document.getElementById('toptext').addEventListener('input', function () {
    document.getElementById('tottomtext').value = this.value;
});


// 同步按鈕的 onclick 事件
function ParseText() {
    var lefttrim = document.getElementById("trimtext").value;
    var replace = document.getElementById("replace").value;
    var output = document.getElementById("tottomtext").value;
    // 使用 RegExp 構造函數創建正則表達式
    var regex = new RegExp(lefttrim, 'g');
    var trimmedText = output.replace(regex, replace); // 刪除所有左方input輸入的文字
    document.getElementById("tottomtext").value = trimmedText;
    // window.alert("lefttrim=" + lefttrim + "　output=" + output + "　trimmedText=" + trimmedText)
}