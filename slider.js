let picturArray = [
    `Images/Slider.jpg`,
    `Images/picture_6.png`,
    `Images/picture_4.png`,
    `Images/people.png`,
    `Images/picture_7.png`,
  ];
  let titleArray = [
    `Grow your company with us`,
    `Who are we?`,
    `What we offer? `,
    `Affordable prices`,
    `Total security`,
  ];
  let firstDiv = document.getElementsByClassName(`blackdivs`);
  let main = document.getElementsByClassName(`mainPic`)[0];
  let title = document.getElementsByClassName(`title`)[0];
  for (let i = 0; i < picturArray.length; i++) {
    firstDiv[i].addEventListener(`click`, update);
  }
  function update() {
    main.style.backgroundImage = `url(${picturArray[event.target.id]})`;
    title.textContent = titleArray[event.target.id];
    for (let i = 0; i < picturArray.length; i++) {
      firstDiv[i].classList.remove(`sel`);
    }
    event.target.classList.add(`sel`);
  }
  let input = document.getElementById(`input1`);
  function func1() {
    let valuesArray = [];
    for (let i = 0; i < input.value.length; i++) {
      valuesArray.push(input.value[i]);
      if (!isNaN(valuesArray[i])) {
        console.log(`Please enter a text` + valuesArray[i]);
        document.getElementsByClassName(
          `error-div`
        )[0].style.display = `block`;
      } else {
        document.getElementsByClassName(
          `error-div`
        )[0].style.display = `none`;
      }
    }
  }