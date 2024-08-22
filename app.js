
let original_sentence = document.querySelector('p#detail');

let carroussel = document.querySelector("#carroussel");

let pictures = document.querySelectorAll('#carroussel span')
let actions = document.querySelectorAll('.carroussel_action');

const LIMIT_WORD_BEFORE_WRAP = 140;

let numberOfPicture = pictures.length;

original_sentence.innerHTML = original_sentence.innerHTML.replaceAll(original_sentence.innerHTML.substring(LIMIT_WORD_BEFORE_WRAP - 1, original_sentence.innerHTML.length), "...");

    // TODO : Système de carroussel avec les images du produits

document.addEventListener('readystatechange', () => {
    carroussel.style.width = `${numberOfPicture * 100}%`;
})
function setCarroussel (index = 0) {
    carroussel.style.transform = `translateX(calc((-100% / ${numberOfPicture})* ${index})) `
}

actions.forEach(action => {
    action.addEventListener('click', () => {
        if (Array.from(actions).indexOf(action) < numberOfPicture) setCarroussel(Array.from(actions).indexOf(action))
        actions.forEach((action) => {
            if (action.classList.contains('active')) action.classList.remove('active')
        })
        action.classList.add('active')

        
    })
})


