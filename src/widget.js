var message;

function initWidget() {
  message = "it's like a jungle sometimes";
}

function drawWidget( div ) {
  div.innerText = message;
}

export default function buildWidget( div ) {
  initWidget();
  drawWidget( div );
}
