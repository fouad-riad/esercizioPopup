var linkLasciaPagina = document.getElementById("lascia-pagina");
var popupContainer = document.querySelector(".popup-lascia-pagina-container");

var bottoneSi, bottoneNo;

bottoneSi = document.querySelector("button.popup-si");
bottoneNo = document.querySelector("button.popup-no");

bottoneSi.addEventListener("click", function () {
  //location.href = "http://www.google.it";
  open("http://www.google.it", "_blank", "width=1320,height=1320");
});

bottoneNo.addEventListener("click", function () {
  popupContainer.style.opacity = 0;
  popupContainer.style.zIndex = -1;
});

linkLasciaPagina.addEventListener("click", function (event) {
  event.preventDefault();
  /* popupContainer.style.display = "block"; */
  popupContainer.style.opacity = 1;
  popupContainer.style.zIndex = 2;
});
