// --------------XỬ LÝ CÁC EVENT CỦA HEADER--------------

function handleHeaderEvent() {
  // Tạo alias cho document.querySelector để viết ngắn gọn hơn
  const $ = document.querySelector.bind(document)

  // Lưu trữ các class vào biến
  const header = $(".header")
  const headerTheme = $(".header__theme")
  const backToTop = $(".backToTop")
  const navButton = $(".navbar-toggler")
  const searchButton = $(".header__search")
  const closeButton = $(".search__form .close-icon")
  const searchForm = $(".search__form")

  // Status của Menu - Navbar Toggle khi màn hình có kích thước nhỏ
  let isMenuOpen = false

  // -------SỰ KIỆN SCROLL - HEADER THAY ĐỔI-------
  // Phần header sẽ thay đổi background dựa vào class "active" đã xây dựng style ở style.css
  document.onscroll = function () {
    // Lấy vị trí scroll hiện tại của trang
    var scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop

    // Nếu vị trí scroll lớn hơn hoặc bằng 90px
    if (scrollTop >= 100) {
      // Thay đổi padding của header
      header.style.paddingTop = "10px"
      header.style.paddingBottom = "10px"
      // Thêm lớp 'active' vào header
      header.classList.add("active")
    } else {
      // Nếu vị trí scroll nhỏ hơn 90px, đặt lại padding của header
      header.style.paddingTop = "15px"
      header.style.paddingBottom = "15px"
      // Loại bỏ lớp 'active' khỏi header
      header.classList.remove("active")
    }

    // ----XỬ LÝ NÚT BACK TO TOP----
    // Bonus: Xử lý kèm backtotop luôn thay vì xài lib Cody House :))
    if (scrollTop >= 400) {
      backToTop.classList.add("active")
    } else {
      backToTop.classList.remove("active")
    }
  }

  // -------SỰ KIỆN CLICK VÀO NAVBAR TOGGLE - OPEN MENU-------
  navButton.onclick = function () {
    // Kiểm tra nếu header không có lớp 'active', 'openMenu' và biến isMenuOpen là false
    if (!$(".header.active") && !$(".header.openMenu") && !isMenuOpen) {
      // Thêm lớp 'openMenu' vào header để mở menu
      header.classList.add("openMenu")
    } else {
      // Nếu không, loại bỏ lớp 'openMenu' để đóng menu
      header.classList.remove("openMenu")
    }
    // Đổi giá trị của biến isMenuOpen (true -> false hoặc false -> true)
    isMenuOpen = !isMenuOpen
  }

  // -------SỰ KIỆN CLICK - CHANGE THEME-------
  headerTheme.onclick = function () {
    // Chuyển đổi (toggle) lớp 'dark' cho phần tử headerTheme
    headerTheme.classList.toggle("dark")

    // Kiểm tra nếu phần tử headerTheme có lớp 'dark'
    if ($(".header__theme.dark")) {
      // Nếu có, đặt thuộc tính 'data-theme' của tài liệu thành 'dark'
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      // Nếu không, đặt thuộc tính 'data-theme' của tài liệu thành 'light'
      document.documentElement.setAttribute("data-theme", "light")
    }
  }

  // -------SỰ KIỆN CLICK - KHỞI ĐỘNG PHẦN SEARCH-------
  searchButton.onclick = function () {
    // Thêm lớp 'active' vào searchButton để biểu thị nút đang hoạt động
    searchButton.classList.add("active")
    // Hiển thị searchForm bằng cách đặt thuộc tính 'display' là 'flex'
    searchForm.style.display = "flex"
    // Đưa con trỏ chuột vào ô input bên trong searchForm
    searchForm.querySelector("input").focus()
  }
  closeButton.onclick = function () {
    // Loại bỏ lớp 'active' khỏi searchButton để biểu thị nút không còn hoạt động
    searchButton.classList.remove("active")
    // Ẩn searchForm bằng cách đặt thuộc tính 'display' là 'none'
    searchForm.style.display = "none"
  }
}
