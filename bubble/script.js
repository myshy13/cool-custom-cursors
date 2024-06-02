const cursor = document.getElementById("cursor")

var e;
document.addEventListener("mousemove", (event) => {
    e = event;
    cursor.style.left = e.clientX - 25 + "px";
    cursor.style.top = e.clientY - 25 + "px";
})