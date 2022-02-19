let sets = document.querySelector('#given_number');
let button = document.querySelector('.btn');
let resultDiv = document.querySelector('.result');
let randomlist = document.querySelector('.loto_number');



button.addEventListener('click', () => {
    if (sets.value < 1 || sets.value >8) {
        alert(`Please enter number between 1 and 8`);
        return;
    }
    resultDiv.innerHTML = '';
    function luckylist() {
        let arr = [];
        while (arr.length < 6) {
            const random = Math.trunc(Math.random()*99+1);
            if (!arr.includes(random)) {
                arr.push(random);
            }
        }
        six = arr.sort((a,b) => a-b).join('-')
        let seven = Math.trunc(Math.random()*99+1);
        let eight = Math.trunc(Math.random()*99+1);
        let list = six + " | " + seven + " | " + eight; 

        return list;
    } 
    let num = parseInt(sets.value);
    for (let i = 0; i < num; i++) {
        let parag = document.createElement('p');
        parag.className = 'loto_number';
        resultDiv.appendChild(parag);
        parag.innerHTML = luckylist();
        
    }

})





