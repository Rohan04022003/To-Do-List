let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("btn");
let tasks = document.getElementById("tasks");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please write something in input box...");
  } else {

    let li = document.createElement("li");

    li.innerHTML = `<div class="content"><span class="material-symbols-outlined" onclick="checked(this)">
            radio_button_unchecked
            </span><p>${inputBox.value}</p></div><span class="material-symbols-outlined" id="dlt" onclick="deleteTask(this)">
                delete
                </span>`;

    tasks.appendChild(li);
    inputBox.value = "";
  }
  saveData();
});

function checked(element) {
  if (element.textContent === "check_circle") {
    element.textContent = "radio_button_unchecked";
    element.style.color = "white";
    saveData();
  } else {
    element.textContent = "check_circle";
    element.style.color = "rgba(43, 255, 0, 0.555)";
    saveData();
  }
}

function deleteTask(element) {
  element.parentElement.remove();
  saveData();
}

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

function getData() {
  tasks.innerHTML = localStorage.getItem("data");
}

getData();
