const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

// pixel manipulating size : pixel modifier에 사이즈를 줌 / 
canvas.width = 700;
canvas.height = 700;

//default 선의 기본값 색상 & 라인 두께 
ctx.strokeStyle = "#2c2c2c";  
ctx.lineWidth = 2.5;

let painting = false;

//마우스가 움직이는 내내 발생
function onMouseMove(event) {
  // canvas 안의 위치를 잡기 위해 offsetx , offsety를 저장한다
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {
    // console.log("creating path in ", x, y)
    ctx.beginPath();   //path를 생성한다
    ctx.moveTo(x,y);   // 마우스가 있는 쪽으로 path를 움직인다 
  } else {
    // console.log("creating line in ", x, y)
    ctx.lineTo(x,y);  //마지막 지점과 전 지점을 연결한다 -MDN 
    ctx.stroke();     // 선을 긋는다 
  }
}

function stopPainting() {
  painting = false;
}

function startPainting(){
  painting = true;
}
// 마우스 클릭을 누를 때
function onMouseDown(event) {
  painting = true;
}


if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting); 
  canvas.addEventListener("mouseleave", stopPainting);
}
