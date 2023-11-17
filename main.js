const btnEncrypt = document.querySelector('.chipher__btn-encrypt');
const btnRemove = document.querySelector('.chipher__btn-remove');
const encrypted = document.querySelector('.encrypted');
const btnDecrypt = document.querySelector('.chipher__btn-decrypt');
let title = document.querySelector('.encrypted__title');
let key = document.querySelector('.num');
let text = document.querySelector('.cipher__text');
const result = document.querySelector('.encrypted__text');


function CaesarCipher(str, key){
    const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш','щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    str = str.toLowerCase().split('');
    let newArr = str.map((element)=>{
        let index = alphabet.indexOf(element)
        if(index != -1){
            return (index + key + alphabet.length) % alphabet.length
        }else{
            return element
        }
    })
    let result = newArr.map((element)=>{
        if (element !== ' ' && typeof element === 'number') {
            return alphabet[(element + alphabet.length) % alphabet.length];
        }
        return element;
    })
    return result.join('')
}

btnEncrypt.onclick = function(){
    let finalEncr =  CaesarCipher(text.value, Number(key.value));
    title.innerHTML = 'Зашифрованный текст!'
    encrypted.classList.add('encrypted-hidden');
    result.innerHTML = finalEncr;
}
btnRemove.onclick = function(){
	encrypted.classList.remove('encrypted-hidden');
    text.value = '';
    key.value = '';
    result.value = '';
}
btnDecrypt.onclick = function(){
    title.innerHTML = 'Расшифрованный текст!';
    encrypted.classList.add('encrypted-hidden');
}
// btnDecrypt.addEventListener('click', ()=>{
//     encrypted.classList.add('encrypted-hidden');
//     document.querySelector('.encrypted__title').innerHTML ='Расшифрованный текст';
// })


