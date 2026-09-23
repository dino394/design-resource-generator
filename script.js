
// --------------------------------
// 1. 사용할 색상 목록 만들기
// --------------------------------

const colors = [
  "#F4A261",
  "#E9C46A",
  "#2A9D8F",
  "#264653",
  "#E76F51",

  "#A8DADC",
  "#457B9D",
  "#E63946",
  "#F1FAEE",
  "#1D3557",

  "#FFB5A7",
  "#FCD5CE",
  "#D8E2DC",
  "#B8C0FF",
  "#9381FF",

  "#22223B",
  "#4A4E69",
  "#9A8C98",
  "#C9ADA7",
  "#F2E9E4"
];


// --------------------------------
// 2. HTML에서 필요한 요소 가져오기
// --------------------------------

// Generate 버튼
const generateButton =
  document.querySelector("#generate-button");


// Color Card 5개
const colorCards =
  document.querySelectorAll(".color-card");


// --------------------------------
// 3. 랜덤 색상 하나 가져오는 함수
// --------------------------------

function getRandomColor() {

  // 0 ~ 색상 개수 사이의 랜덤 숫자
  const randomIndex =
    Math.floor(Math.random() * colors.length);

  // 랜덤으로 선택된 색상
  return colors[randomIndex];
}


// --------------------------------
// 4. 색상 5개를 랜덤으로 변경하는 함수
// --------------------------------

function generateColors() {

  colorCards.forEach(function(card) {

    // 랜덤 색상 가져오기
    const randomColor =
      getRandomColor();


    // 카드 배경색 변경
    card.style.backgroundColor =
      randomColor;


    // 카드 안의 HEX 코드 변경
    const colorText =
      card.querySelector("span");

    colorText.textContent =
      randomColor;


    // 어두운 색이면 글자를 흰색으로 변경
    if (isDarkColor(randomColor)) {

      colorText.style.color = "white";

    } else {

      colorText.style.color = "#1f1f1f";

    }

  });

}


// --------------------------------
// 5. 어두운 색인지 확인하는 함수
// --------------------------------

function isDarkColor(hex) {

  // #을 제거
  const color =
    hex.replace("#", "");


  // RGB 값으로 변환
  const r =
    parseInt(color.substring(0, 2), 16);

  const g =
    parseInt(color.substring(2, 4), 16);

  const b =
    parseInt(color.substring(4, 6), 16);


  // 밝기 계산
  const brightness =
    (r * 299 + g * 587 + b * 114) / 1000;


  // 128보다 작으면 어두운 색
  return brightness < 128;
}


// --------------------------------
// 6. 버튼 클릭 이벤트
// --------------------------------

generateButton.addEventListener(
  "click",
  generateColors
);

