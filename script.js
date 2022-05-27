const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
      this.setAttribute('aria-expanded',"false")
    } else {
      let active = document.querySelectorAll(".accordion.active");
      for(let j = 0; j < active.length; j++){
        active[j].classList.remove("active");
        active[j].setAttribute('aria-expanded',"false")
        active[j].nextElementSibling.style.maxHeight = null;
        active[j].nextElementSibling.classList.remove("open");
      }
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
      this.setAttribute('aria-expanded',"true")
    }
    this.classList.toggle("active");
    
  });
}