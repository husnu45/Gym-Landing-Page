// BMI hesaplama işlevi
function calculateBMIOnInputChange() {
  let height = parseFloat(document.querySelector(".inpheight").value);
  let weight = parseFloat(document.querySelector(".inpweight").value);

  if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
    // Girdilerin uygunluklarının kontrolü
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    let bmiPointer = document.querySelector(".triangle");
    let bmiMessage1 = "You Are Underweight ! You have to  gain some weight.";
    let bmiMessage2 = "Normal Weight! Keep up the good work.";
    let bmiMessage3 =
      "Overweight! You have to lose some weight before proceed.";
    let bmiMessage4 =
      "Obese! Thats critical.You need a fitness program and a diet !";
    let bmiMessage5 = "Extremely Obese !  Need immediate medical attention !";

    let result = "Body Mass Index: " + bmi;

    if (bmi < 18.5) {
      result += " (Underweight)";
      bmiPointer.style.marginLeft = "55px";
      document.querySelector(".bmiresult").innerHTML = result;
      document.querySelector(".bmireport").innerHTML = bmiMessage1;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result += " (Normal)";
      bmiPointer.style.marginLeft = "135px";
      document.querySelector(".bmiresult").innerHTML = result;
      document.querySelector(".bmireport").innerHTML = bmiMessage2;
    } else if (bmi >= 24.9 && bmi < 29.9) {
      result += " (Overweight)";
      bmiPointer.style.marginLeft = "210px";
      document.querySelector(".bmiresult").innerHTML = result;
      document.querySelector(".bmireport").innerHTML = bmiMessage3;
    } else if (bmi >= 25 && bmi < 34.9) {
      result += " (Obese)";
      bmiPointer.style.marginLeft = "290px";
      document.querySelector(".bmiresult").innerHTML = result;
      document.querySelector(".bmireport").innerHTML = bmiMessage4;
    } else {
      result += " (Extreme Obese)";
      bmiPointer.style.marginLeft = "365px";
      document.querySelector(".bmiresult").innerHTML = result;
      document.querySelector(".bmireport").innerHTML = bmiMessage5;
    }
  }
}

// input alanlarına herhangi bir değer girildiğinde BMI hesaplaması yap
document
  .querySelector(".inpheight")
  .addEventListener("input", calculateBMIOnInputChange);
document
  .querySelector(".inpweight")
  .addEventListener("input", calculateBMIOnInputChange);

// alert(result); // BMI değerini ekrana yazdır (Optional)

// Tıklanan butona göre görseli ve makaleyi değiştirme.

document.addEventListener("DOMContentLoaded", function () {
  // Butonları, article2img, başlık ve paragraf elementlerini seç
  var btnclass1 = document.querySelector(".btnclass1");
  var btnclass2 = document.querySelector(".btnclass2");
  var btnclass3 = document.querySelector(".btnclass3");
  var btnclass4 = document.querySelector(".btnclass4");
  var article2img = document.querySelector(".article2img");
  var h2Element = document.querySelector(".articlediv1 h2");
  var pElement = document.querySelector(".articlediv1 p");

  // Butonlara tıklama olayını ekle
  btnclass1.addEventListener("click", function () {
    changeContent(
      "Yoga",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ipsam ipsa quam officia ad corporis illum. Animi rem, nemo veniam sapiente velit ullam voluptate ratione quod dolorem iste! Reiciendis, magnam?"
    );
    changeImage("Assets/yoga.jpg");
  });

  btnclass2.addEventListener("click", function () {
    changeContent(
      "Group",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure aliquam veritatis fuga. Provident praesentium cupiditate illo reiciendis quisquam tenetur?"
    );
    changeImage("Assets/group.webp");
  });

  btnclass3.addEventListener("click", function () {
    changeContent(
      "Solo",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem quam deleniti dolores. Delectus recusandae voluptatum explicabo deleniti dolorum ratione aut nisi sapiente aliquam labore."
    );
    changeImage("Assets/solo.jpg");
  });

  btnclass4.addEventListener("click", function () {
    changeContent(
      "Stretching",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum corrupti est omnis, nulla placeat magnam quia ut doloribus at animi? Omnis earum blanditiis voluptates."
    );
    changeImage("Assets/stret.webp");
  });

  // Başlık ve paragraf değiştirme fonksiyonu
  function changeContent(newTitle, newParagraph) {
    h2Element.textContent = newTitle;
    pElement.textContent = newParagraph;
  }

  // Resim değiştirme fonksiyonu
  function changeImage(newSrc) {
    article2img.src = newSrc;
  }
});

// Tıklanan butonların Rengini Değiştirme

document.addEventListener("DOMContentLoaded", function () {
  // Tüm butonları seç
  var buttons = document.querySelectorAll(".ourclasseslinks button");

  // Her butona tıklanınca changeClass fonksiyonunu çağır
  buttons.forEach(function (button) {
    button.addEventListener("click", changeClass);
  });

  // Tıklanan butona göre sınıf değiştiren fonksiyon
  function changeClass(event) {
    // Tüm butonlardan "active" sınıfını kaldır
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });

    // Tıklanan butona "active" sınıfını ekle
    event.target.classList.add("active");
  }
});

document.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// margin-left: 55px; underweight için
// margin-left: 135px; normal için
// margin-left: 210px; overweight için
// margin-left: 290px;  obese için
// margin-left: 365px; extreme obese için

// Hamburger Menu

const navbar = document.getElementById("navbar");
const navLinks = document.querySelector(".navLinkDiv");
const hamburgerBtn = document.createElement("button");

hamburgerBtn.innerHTML = "&#9776;";
hamburgerBtn.classList.add("hamburger-btn");
navbar.appendChild(hamburgerBtn);

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Hamburger Butonunun 576pxden çıkınca saklanması

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("show");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    navLinks.classList.remove("show");
    hamburgerBtn.style.display = "none";
  } else {
    hamburgerBtn.style.display = "block";
  }
});

// Ekran yüklendiğinde kontrol et
window.addEventListener("load", () => {
  if (window.innerWidth > 576) {
    hamburgerBtn.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    navLinks.classList.remove("show");
  }
});

// Menüde Bir Seçim Yapılması Durumunda Menünün Kapanması

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("show");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    navLinks.classList.remove("show");
  }
});

// Butonlar tıklandığında buton altındaki okun açılması

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".ourclasseslinks button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Tüm .btn-arrow'ların aktiflik sınıfını kaldır
      let allArrows = document.querySelectorAll(".btn-arrow");
      allArrows.forEach(function (arrow) {
        arrow.classList.remove("active");
      });

      // Tıklanan butonun altındaki .btn-arrow'ı aktif hale getir
      let arrow = this.querySelector(".btn-arrow");
      arrow.classList.add("active");
    });
  });
});

// Butonlara Tıklanınca Başlığın Değişmesi

// Yoga butonuna tıklandığında gösterilecek metinler
const yogaText = `
  <h2>When comes Yoga Your Time.</h2>
  <br />
  <p>Saturday-Sunday: 8.00am - 10:00am</p>
  <br />
  <p>Monday-Tuesday: 10.00am - 12:00am</p>
  <br />
  <p>Wednesday-Friday: 3.00am - 6:00am</p>
`;

// Group butonuna tıklandığında gösterilecek metinler
const groupText = `
  <h2>When comes Group Your Time.</h2>
  <br />
  <p>Monday-Friday: 5.00pm - 7:00pm</p>
  <br />
  <p>Saturday-Sunday: 10.00am - 12:00pm</p>
`;

// Solo butonuna tıklandığında gösterilecek metinler
const soloText = `
  <h2>When comes Solo Your Time.</h2>
  <br />
  <p>Monday-Friday: 7.00am - 9:00am</p>
  <br />
  <p>Saturday-Sunday: 1.00pm - 3:00pm</p>
`;

// Stretching butonuna tıklandığında gösterilecek metinler
const stretchingText = `
  <h2>When comes Stretching Your Time.</h2>
  <br />
  <p>Monday-Friday: 9.00am - 11:00am</p>
  <br />
  <p>Saturday-Sunday: 3.00pm - 5:00pm</p>
`;

// Yoga metin alanını seçme
const yogaTime = document.querySelector(".articlediv1");

// Yoga butonuna tıklandığında gösterilecek metinleri güncelleyen işlev
function showYogaTime() {
  yogaTime.innerHTML = yogaText;
}

// Group butonuna tıklandığında gösterilecek metinleri güncelleyen işlev
function showGroupTime() {
  yogaTime.innerHTML = groupText;
}

// Solo butonuna tıklandığında gösterilecek metinleri güncelleyen işlev
function showSoloTime() {
  yogaTime.innerHTML = soloText;
}

// Stretching butonuna tıklandığında gösterilecek metinleri güncelleyen işlev
function showStretchingTime() {
  yogaTime.innerHTML = stretchingText;
}

// Butonlara tıklama olaylarını ekleme
document.querySelector(".btnclass1").addEventListener("click", showYogaTime);
document.querySelector(".btnclass2").addEventListener("click", showGroupTime);
document.querySelector(".btnclass3").addEventListener("click", showSoloTime);
document
  .querySelector(".btnclass4")
  .addEventListener("click", showStretchingTime);

// Sayfa yüklendiğinde varsayılan olarak yoga metinlerini göster
window.addEventListener("DOMContentLoaded", showYogaTime);
