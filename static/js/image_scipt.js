let images = ["static/partrm_res/images/main_graph.jpg", "static/partrm_res/images/supp_part.jpg", "static/partrm_res/images/supp_pm.jpg"]; // 图像路径
let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // 如果到达开头，则跳转到最后一张
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // 如果到达末尾，则跳转到第一张
    }

    document.getElementById("carousel-image").src = images[currentIndex];
}
