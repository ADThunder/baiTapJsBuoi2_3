/*
    BÀI TẬP 1 : VIẾT CHƯƠNG TRÌNH TÍNH TIỀN LƯƠNG CHO NHÂN VIÊN 
    input: lương 1 ngày 100000, cho người dùng nhập vào số ngày làm; biết công thức tính lương là 100000 * số ngày làm
    progress: dom tới thẻ input cho người dùng nhập vào số ngày làm ; sau đó lấy số ngày người dùng nhập vào nhân với tiền lương 1 ngày là 100000
    output: tính ra tiền lương của nhân viên khi nhập số ngày làm
*/

document.getElementById("ketQuaTienLuong").onclick = function () {
    var luong1Ngay = 100000 ;
    var soNgayLam = document.getElementById("soNgayLam").value;
    var tongLuong = luong1Ngay * soNgayLam;
    console.log(soNgayLam, tongLuong);
    var ketQua = tongLuong.toLocaleString("vn-VN",{
        style : "currency",
        currency : "VND",
    });
    document.getElementById("xuatKetQuaTienLuong").innerHTML = "tổng lương của mỗi người là " + ketQua;
}

/*
    BÀI TẬP 2 : VIẾT CHƯƠNG TRÌNH NHẬP VÀO 5 SỐ THỰC 
    input: nhập vào năm số thực 
    progress: tạo biến của 5 số thực, dom vào lấy giá trị của số thực trong input; tạo công thức tính tổng giá trị của năm số thực; và công thức tính trung binh của năm số thục là lấy tổng chia cho 5
    output: tính ra giá trị của năm số thực và xuất ra màn hinh
*/

document.getElementById("ketQuaCuoiCung").onclick = function () {
    var soThuNhat = document.getElementById("soThuNhat").value * 1 ;
    var soThuHai = document.getElementById("soThuHai").value * 1 ;
    var soThuBa = document.getElementById("soThuBa").value * 1;
    var soThuTu = document.getElementById("soThuTu").value * 1;
    var soThuNam = document.getElementById("soThuNam").value * 1;
    var tong5So = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam ;
    var giaTriTrungBinh = tong5So / 5 ;
    console.log(soThuNhat , soThuHai , soThuBa , soThuTu , soThuNam);
    console.log("tổng năm số " ,tong5So);
    console.log("giá trị trung bình của năm số" , giaTriTrungBinh);
    document.getElementById("xuatKetQuaSoThuc").innerHTML = "Giá trị trung bình là : " + giaTriTrungBinh;
}

/*
    BÀI TẬP 3 : VIẾT CHƯƠNG TRÌNH QUY ĐỔI TỪ TIỀN ĐÔ SANG TIỀN VIỆT
    input: nhập vào số tiền đô
    progress: dome tới thẻ input lấy giá trị của số mà người dùng nhập vào; sau đó tính só tiền từ đô sang tiền việt 
    output:quy đổi tiền đô sang tiền việt
*/
document.getElementById("ketQuaSoTien").onclick = function () {
    var vNd = 23000 ;
    var soTienUsd = document.getElementById("soTienUsd").value * 1;
    var quyDoi = vNd * soTienUsd ;
    console.log(quyDoi);
    var soTienDaQuyDoi = quyDoi.toLocaleString("vn-VN",{
        style : "currency",
        currency : "VND",
    });
    document.getElementById("xuatKetQuaSoTien").innerHTML = "Số tiền sau khi quy đổi là :" + soTienDaQuyDoi ;
}

/*
    BÀI TẬP 4 : VIẾT CHƯƠNG TRÌNH NHẬP VÀO CHIỀU DÀI VÀ CHIỀU RỘNG TÍNH CHU VI VÀ DIÊN TÍCH
    input:nhập vào chiều dài và chiều rộng
    progress: tạo biến chiều dài và chiều rông; viết công thức tính chu vi và diện tích 
    output: tính chu vi và diện tích
*/
document.getElementById("chuVi").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2 ;
    console.log(chuVi);
    document.getElementById("xuatKetQuaDienTichVaChuVi").innerHTML = "Kết quả chu vi là :" + chuVi ;
};
document.getElementById("dienTich").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1 ;
    var chieuRong = document.getElementById("chieuRong").value * 1 ;
    var dienTich = chieuDai * chieuRong ;
    console.log(dienTich) ;
    document.getElementById("xuatKetQuaDienTichVaChuVi").innerHTML = "kết quả của diện tích là " + dienTich ;
}

/*
    BÀI TẬP 5: VIẾT CHƯƠNG TRÌNH NHẬP VÀO 1 SỐ CÓ 2 CHỮ SỐ 
    input: nhập vào 1 số có 2 chữ số
    progress : nhập vào 1 số bất kì lấy ra giá trị hàng chục và đơn vị; sau đó cho cộng lại với nhau
    output:tổng 2 kí số
*/

document.getElementById("ketQuaKySo").onclick = function () {
    var soNhapVao = document.getElementById("tongSo").value;
    var hangChuc = Math.floor( soNhapVao % 10 );
    var donVi = Math.floor( soNhapVao / 10 ) ;
    console.log(soNhapVao);
    console.log(hangChuc, donVi);
    var tongKySo = hangChuc + donVi ;
    console.log(tongKySo);
    document.getElementById("xuatKetQuaKySo").innerHTML = "Tổng ký số là :" + tongKySo ;
}


