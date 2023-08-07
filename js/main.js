// let options = {
//     fillContainer: true,
//     offset: { vertical: 0, horizontal: 10 }
// };

// new ImageZoom(document.getElementById("img-container"), options);

const magnifingArea = document.querySelector("#magnifingArea");
const magnifingImg = document.querySelector("#magnifingImg");

magnifingArea.addEventListener("mousemove", (e) => {
    let clientX = e.clientX - magnifingArea.offsetLeft;
    let clientY = e.clientY - magnifingArea.offsetTop;

    let mWidth = magnifingArea.offsetWidth;
    let mHeight = magnifingArea.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    magnifingImg.style.transform = "translate(-" + clientX + "%, -" + clientY + "%)"
})