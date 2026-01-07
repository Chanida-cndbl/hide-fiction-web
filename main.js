// สคริปต์ควบคุมการทำงานของปุ่ม
    let mybutton = document.getElementById("btn-back-to-top");

    // เมื่อเลื่อนหน้าจอลงมา 300px ให้โชว์ปุ่ม
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            mybutton.style.display = "block"; // โชว์
        } else {
            mybutton.style.display = "none"; // ซ่อน
        }
    }

    // เมื่อกดปุ่ม ให้เลื่อนกลับไปข้างบนแบบนุ่มนวล (Smooth Scroll)
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // เลื่อนขึ้นแบบสมูท ไม่กระชาก
        });
    }