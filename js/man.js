function clickedButton() {
  location.href = "https://aayushtiwari.github.io/major/list";
  localStorage.removeItem("search");
  localStorage.setItem("search", $("input[name=sea]").val());
}
