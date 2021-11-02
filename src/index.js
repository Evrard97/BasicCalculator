import "./styles.css";

var view = document.getElementById("view");
var btns = Array.from(document.getElementsByTagName("button"));

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "c":
        view.value = "";
        break;
      case "=":
        try {
          view.value = eval(view.value);
        } catch {
          view.value = "Invalid";
        }
        break;
      case "del":
        if (view.value) {
          view.value = view.value.slice(0, -1);
        }
        break;
      default:
        view.value += e.target.innerText;
        break;
    }
  });
}