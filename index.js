function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.getAttribute('data-html'));
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");

    // Tạo phần tử div chứa nội dung và ô input để chỉnh sửa
    var elementDiv = document.createElement("div");
    elementDiv.className = "dropped-element";
    elementDiv.innerHTML = `<div class="text-content">${data}</div>`;

    // Tạo ô input để chỉnh sửa nội dung
    var input = document.createElement("input");
    input.type = "text";
    input.className = "edit-input";
    input.value = data;

    // Cập nhật nội dung khi người dùng thay đổi text trong ô input
    input.oninput = function() {
        elementDiv.querySelector('.text-content').innerText = input.value;
    };

    // Thêm ô input vào phần tử
    elementDiv.appendChild(input);
    
    // Thêm phần tử vào drag-in
    ev.target.appendChild(elementDiv);
}

function run() {
    // Lấy nội dung từ khu vực drag-in
    var content = document.querySelector('.drag-in').innerHTML;
    // Hiển thị nội dung trong khu vực result-content
    document.querySelector('.result-content').innerHTML = content;
}