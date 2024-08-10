const accordeonEls = document.querySelectorAll(".accordeon__item");

accordeonEls.forEach((acc) => {
  const accordeonHeaderElement = acc.querySelector(".accorden__item-header");
  const accordeonContentElement = acc.querySelector(".accordeon__content");
  accordeonHeaderElement.addEventListener("click", () => {
    if (acc.classList.contains("accordeon__item_active")) {
      acc.classList.remove("accordeon__item_active"); 
            accordeonContentElement.style.maxHeight = 0 + "px";
    } else {
      acc.classList.add("accordeon__item_active");
      accordeonContentElement.style.maxHeight =
        accordeonContentElement.scrollHeight + "px";
    }
  });
});

$(".price-slider").slider({
    range: true,
    min:0,
    max: 1000000,
    values: [100000, 500000],
    animate: "slow",
    slide: (e,ui) => {
        $(".price__values-min").text(new Intl.NumberFormat("ru-RU").format(ui.values[0]))
        $(".price__values-max").text(new Intl.NumberFormat("ru-RU").format(ui.values[1]))
    }
})

const selectEls = document.querySelectorAll('.select') 
selectEls.forEach(s => {
  const selectImputEl = s.querySelector('.select__input')
  const selectBtnEls = s.querySelectorAll('.select__menu-btn')
  selectBtnEls.forEach(b => b.addEventListener('click', () => selectImputEl.textContent = b.textContent))
})

const selectBtnEls = document.querySelectorAll('.catalog__select-btn');
const selectValueElement = document.querySelector('.catalog__select-value');

selectBtnEls.forEach(btn => btn.addEventListener('click', () => {
  selectValueElement.textContent = btn.textContent
}))