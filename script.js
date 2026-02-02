const noBtn = document.getElementById('noBtn');
const textDisplay = document.getElementById('text-display');

// ฟังก์ชันทำให้ปุ่ม No วิ่งหนี
noBtn.addEventListener('mouseover', () => {
    // คำนวณขอบเขตหน้าจอ
    const padding = 20; // ระยะห่างจากขอบจอ
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // สุ่มตำแหน่งใหม่
    const randomX = Math.floor(Math.random() * (maxX - padding) + padding);
    const randomY = Math.floor(Math.random() * (maxY - padding) + padding);

    // ปรับให้ปุ่ม No ลอยตัวและวิ่งไปที่ตำแหน่งใหม่
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// ฟังก์ชันเมื่อกด Yes
function celebrate() {
    textDisplay.innerHTML = "Happy Valentine's Day! ❤️<br><span style='font-size: 1.2rem;'>Opening our special song...</span>";
    textDisplay.style.color = "#d81b60";

    // เปลี่ยนรูปเป็นแมวเต้น (Optional)
    document.querySelector('.local-gif').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z6ZzRyc3R6ZzRyc3R6ZzRyc3R6ZzRyc3R6ZzRyc3R6ZzR5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/11W8qva0GZ2652/giphy.gif";

    setTimeout(() => {
        window.location.href = "https://youtu.be/hWOB5QYcmh0?si=bPObFtFbgvTHSf03";
    }, 2500);
}