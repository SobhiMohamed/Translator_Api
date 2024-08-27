let options1 = document.querySelector("#select1");
let options2 = document.querySelector("#select2");
let myText1 = document.querySelector("#text1");
let myText2 = document.querySelector("#text2");
let myCountries = Object.entries(countries);
myCountries.map((country) => {
    options1.innerHTML += `<option>${country[1]}</option>`;
    options2.innerHTML += `<option>${country[1]}</option>`;
});
function test() {
    if (myText1.value == "" || myCountries[options1.options.selectedIndex][1] == myCountries[options2.options.selectedIndex][1]){
        myText2.value = myText1.value;
    }else{
        fetch(`https://api.mymemory.translated.net/get?q=${myText1.value}&langpair=${myCountries[options1.options.selectedIndex][0]}|${myCountries[options2.options.selectedIndex][0]}`)
        .then((response) => response.json())
        .then((obj) => {
        myText2.value = obj.responseData.translatedText;
        });
    }
}