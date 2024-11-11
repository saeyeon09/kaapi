document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.querySelector('.colorBox');

    // 스크롤 이벤트에 대한 핸들러 등록
    window.addEventListener('scroll', handleScroll);

    // 초기에 한 번 실행하여 초기 스크롤 위치에 따라 처리
    handleScroll();
});

function handleScroll() {
    const colorBox = document.querySelector('.colorBox');

    // 스크롤에 따라 배경 그라데이션 색상을 변경합니다.
    const gradientColor = `linear-gradient(to bottom, rgba(243, 172, 110, 1), rgba(243, 172, 110, 0) ${window.scrollY}px)`;
    document.colorBox.style.background = gradientColor;
}