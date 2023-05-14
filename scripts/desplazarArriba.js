const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});