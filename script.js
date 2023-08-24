
let img = document.querySelector(".imgBanner");
let images = [
  "images/img111.jpg",
  "https://i.pinimg.com/originals/22/94/58/22945867bbcc19eb01a554d5df97885d.jpg",
  "https://wallpaperaccess.com/full/2969982.jpg",
];
let imgBox = document.querySelector(".image");

setInterval(function () {
  let random = Math.floor(Math.random() * 3) + 0;
  img.src = images[random];
  img.style.objectFit = "cover";
  img.classList.toggle("out");
}, 2000);

/*******MAIN PART ***********/
/**IMAGES*** */
let imgWedding = document.querySelectorAll("img[name=wedding]");
let imgNature = document.querySelectorAll("img[name=nature]");
let imgAbstract = document.querySelectorAll("img[name=abstract]");
let imgAll = document.querySelectorAll(".imagesMain img");

let imagesBox = document.querySelector(".imagesMain");
/**BTNS*** */
let btnNature = document.getElementById("nature");
let btnWedding = document.getElementById("wedding");
let btnAbstract = document.getElementById("abstract");
let btnAll = document.getElementById("all");
let buttons = document.querySelectorAll(".btnMenu");

function clearBtn() {
  for (eachBtn of buttons) {
    eachBtn.style.border = "none";
  }
}

btnAll.style.border =  "1px solid rgba(166, 113, 0, 0.833)";
/**EVENTS */
btnNature.addEventListener("click", function () {
  clearBtn();
  imagesBox.innerHTML = "";
  btnNature.style.border = "1px solid rgba(166, 113, 0, 0.833)";
  for (imgEach of imgNature) {
    imgEach.style.height = "90%";
    imgEach.style.width = "90%";
    imgEach.style.marginLeft = "3%";
    imgEach.style.marginRight = "0%";
    imgEach.style.marginTop = "5%";
    imgEach.style.marginBottom = "5%";
    imagesBox.appendChild(imgEach);
  }
});
btnWedding.addEventListener("click", function () {
  clearBtn();
  imagesBox.innerHTML = "";
  btnWedding.style.border = "1px solid rgba(166, 113, 0, 0.833)";
  for (imgEach of imgWedding) {
    imgEach.style.height = "90%";
    imgEach.style.width = "90%";
    imgEach.style.marginLeft = "3%";
    imgEach.style.marginRight = "0%";
    imgEach.style.marginTop = "5%";
    imgEach.style.marginBottom = "5%";
    imagesBox.appendChild(imgEach);
  }
});

btnAbstract.addEventListener("click", function () {
  clearBtn();
  imagesBox.innerHTML = "";
  btnAbstract.style.border = "1px solid rgba(166, 113, 0, 0.833)";
  for (imgEach of imgAbstract) {
    imgEach.style.height = "90%";
    imgEach.style.width = "90%";
    imgEach.style.marginLeft = "3%";
    imgEach.style.marginRight = "0%";
    imgEach.style.marginTop = "5%";
    imgEach.style.marginBottom = "5%";
    imagesBox.appendChild(imgEach);
  }
});

btnAll.addEventListener("click", function () {
  clearBtn();
  imagesBox.innerHTML = "";
  btnAll.style.border = "1px solid rgba(166, 113, 0, 0.833)";
  for (imgEach of imgAll) {
    imgEach.style.height = "90%";
    imgEach.style.width = "90%";
    imgEach.style.marginLeft = "3%";
    imgEach.style.marginRight = "0%";
    imgEach.style.marginTop = "2%";
    imgEach.style.marginBottom = "5%";
    imagesBox.appendChild(imgEach);
  }
});

/*MENU BURGER */
let menuBurger = document.querySelector(".menuBurger");
let list = document.querySelector(".menuBurgerList");
let menuItem = document.querySelectorAll(".menuBurgerList a");

menuBurger.addEventListener("click", function () {
  if (list.style.visibility == "hidden") {
    list.style.visibility = "visible";
  } else {
    list.style.visibility = "hidden";
  }
});

for (item of menuItem) {
  item.addEventListener("click", function () {
    list.style.visibility = "hidden";
  });
}


