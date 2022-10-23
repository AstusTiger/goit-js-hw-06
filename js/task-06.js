document.getElementById("validation-input").onblur = function () {
  //console.log(this.getAttribute("data-length"));

  if (this.getAttribute("data-length") !== this.value.length.toString()) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};
