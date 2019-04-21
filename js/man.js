function clickedButton() {
  localStorage.removeItem("search");
  localStorage.setItem("search", $("input[name=sea]").val());
  location.href = "https://aayushtiwari.github.io/major/list";

}
