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
	
	/* =========================================
   ฟังก์ชันสุ่มลำดับนิยาย (Random Shuffle)
   ========================================= */
document.addEventListener("DOMContentLoaded", function() {
    // 1. หาตะกร้าที่ใส่นิยายทั้งหมด
    const grid = document.getElementById("novel-grid");
    
    // ถ้าหาไม่เจอ (เช่นอยู่หน้าอื่น) ให้จบการทำงาน
    if (!grid) return;

    // 2. ดึงการ์ดนิยายทั้งหมดออกมาเป็นไพ่ 1 กอง (Array)
    const cards = Array.from(grid.children);

    // 3. เริ่มสลับไพ่! (ใช้สูตร Fisher-Yates Shuffle เพื่อให้สุ่มทั่วถึงจริงๆ)
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // สลับที่กัน
    }

    // 4. เอาไพ่ที่สับเสร็จแล้ว ยัดกลับใส่ตะกร้าทีละใบ
    cards.forEach(card => {
        grid.appendChild(card);
    });
});