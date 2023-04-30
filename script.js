// TÍNH TIỀN LƯƠNG NHÂN VIÊN
/*
- Input: Tính tiền lương nhân viên với mức lương một ngày là 100000
- Process:
+ B1: Xử lí để lấy số ngày làm việc mà người dùng nhập vào bằng cách dùng .value
+ B2: Tính toán: 100000 * với ngày làm việc
- Output: Hiển thị số lương được nhận ra trình duyệt cho người dùng
*/
document.getElementById("luongMotNgay").value = 100000;
function layDuLieuNguoiDung() {
var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
var soNgayLam = document.getElementById("soNgayLam").value * 1;
console.log(document.getElementById("soNgayLam").value);

var tongLuong = luongMotNgay * soNgayLam;
document.getElementById("hienThiTienLuong").classList.remove("d-none")
document.getElementById("hienThiTienLuong").innerHTML = "Lương " + soNgayLam + " ngày làm việc của bạn là: "+ tongLuong;
}
document.getElementById("btnCalc").addEventListener("click", layDuLieuNguoiDung);

// TÍNH GIÁ TRỊ TRUNG BÌNH
/*
- Input: 5 số thực được người dùng nhập vào
- Process: 
+ B1: Xử lý để lấy dữ liệu người dùng nhập vào cụ thể là năm số thực bằng cách dùng .value, sau đó ép về kiểu số
+ B2: Tính toán: tổng 5 số thực / 5
- Output: Hiển thị trung bình 5 số thực ra trình duyệt web cho người dùng
*/
function nhanDeTinh () {
// Lấy dữ liệu
var soThuc1 = document.getElementById("soThuc1").value * 1;
var soThuc2 = document.getElementById("soThuc2").value * 1;
var soThuc3 = document.getElementById("soThuc3").value * 1;
var soThuc4 = document.getElementById("soThuc4").value * 1;
var soThuc5 = document.getElementById("soThuc5").value * 1;
// Tính trung bình
var trungBinhTong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
document.getElementById("hienThiTrungBinhTong").classList.remove("d-none");
// Hiển thị
document.getElementById("hienThiTrungBinhTong").innerHTML = "Trung bình tổng 5 số thực là: " + trungBinhTong;
}
document.getElementById("btnCalc2").addEventListener("click", nhanDeTinh);

// QUY ĐỔI TIỀN
/*
- Input: Đổi tiền USD sang VND, với giá USD hiện nay là 23.500 VND
- Process: 
+ B1: Xử lí lấy số tiền (USD) mà người dùng nhập vào bằng cách dùng .value, sau đó ép dữ liệu về kiểu số
+ B2: Xử lí quy đổi bằng cách lấy số tiền người dùng nhập vào * 23.000 VND
- Output: Hiển thị số tiền sau quy đổi thành VND ra trình duyệt Web cho người dùng
*/
const tyGia = 23500;
function quyDoiTien () {
    // Lấy dữ liệu người dùng nhập vào
    var tienUsd = document.getElementById("tienUsd").value * 1;
    // Quy đổi
    var tienVnd = tienUsd * tyGia;
    document.getElementById("hienThiTienQuyDoi").classList.remove("d-none");
    // Hiển thị
    document.getElementById("hienThiTienQuyDoi").innerHTML = "Số tiền quy đổi được là: " + tienVnd + " VND";
}
document.getElementById("btnCalc3").addEventListener("click", quyDoiTien);

// TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
/*
- Input: Cho chiều dài và chiều rộng của hình chữ nhật, yêu cầu tính diện tích và chu vi hình chữ nhật đó
- Process: 
+ B1: Xử lí lấy dữ liệu người dùng nhập vào chiều dài và chiều rộng hình chữ nhật, sau đó ép kiểu dữ liệu về kiểu số
+ B2: Tính toán: áp dung công thức tính (chiều dài + chiều rộng)*2 để tính chu vi, và chiều dài * chiều rộng để tính diện tích
- Output: Hiển thị kết quả sau khi tính diện tích và chu vi hình chữ nhật ra trình duyệt web cho người dung.
*/
function layDuLieu () {
    // Lấy dữ liệu
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    // Tính toán
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("hienThiKetQua").classList.remove("d-none");
    // Hiển thị
    document.getElementById("hienThiKetQua").innerHTML = "Diện tích hình chữ nhật là: " + dienTich + " (cm2); Chu vi hình chữ nhật là: " + chuVi + " (cm)";
}
document.getElementById("btnCalc4").addEventListener("click", layDuLieu);

// TÍNH TỔNG HAI KÝ SỐ
/*
- Input: Cho một số có 2 chữ số bất kỳ, yêu cầu tính tổng hai ký số của chữ số đó
- Process: 
+ B1: Xử lý lấy dữ liệu người dùng nhập là số có 2 chữ số, ép kiểu dữ liệu về kiểu số
+ B2: Xử lý lấy chữ số hàng chục: số / 10, khi tính xong ta dùng hàm Math.floor để làm tròn xuống
+ B3: Xử lý lấy chữ số hàng đơn vị: số % 10
+ B4: Tính tổng 2 kết quả trên lại
- Output: Hiển thị tổng hai ký số từ số người dùng nhập ra trình duyệt web cho người dùng.
*/
function nhanDeCong () {
// Lấy dữ liệu
var soHaiChuSo = document.getElementById("soHaiChuSo").value * 1;
// Tính toán
var soHangDonVi = soHaiChuSo % 10;
var SoHangChuc = Math.floor(soHaiChuSo / 10);
var tong = soHangDonVi + SoHangChuc;

// Hiển thị 
document.getElementById("hienThiTongHaiKySo").classList.remove("d-none");
document.getElementById("hienThiTongHaiKySo").innerHTML = "Tổng hai ký số của " + soHaiChuSo + " là: " + tong;
}
document.getElementById("btnCalc5").addEventListener("click", nhanDeCong);