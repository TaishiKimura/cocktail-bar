const images = [
  "./assets/img/header.jpg",
  "./assets/img/header1.jpeg",
  "./assets/img/IMG_4560.JPG",
  "./assets/img/IMG_4547.JPG"
];

// // 現在のスライドのインデックス
// let currentIndex = 0;

// // スライドを切り替える関数
// function showSlide() {
//   // 現在のスライドを表示
//   document.querySelectorAll('.slide').forEach((slide, index) => {
//       if (index === currentIndex) {
//           slide.style.display = 'block';
//       } else {
//           slide.style.display = 'none';
//       }
//   });
// }


// // 次のスライドに進む関数
// function nextSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   showSlide();
// }

// // 最初にスライドを表示
// showSlide();

// // 3秒ごとに次のスライドに進む
// setInterval(nextSlide, 3000);



$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});

