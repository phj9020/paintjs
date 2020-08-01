const canvas = document.getElementById("js-canvas");

let painting = false;

function onMouseMove(event) {
  // canvas 안의 위치를 잡기 위해 offsetx , offsety를 저장한다
  const x = event.offsetX;
  const y = event.offsetY;
}

function stopPainting() {
  painting = false;
}
// 마우스 클릭을 누를 때
function onMouseDown(event) {
  painting = true;
}

// 마우스 클릭을 땔 때
function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp); //마우스 땔 때 stopPainting을 하지 않는 이유는 그리는 코드를 삽입하기 위함
  canvas.addEventListener("mouseleave", stopPainting);
}
