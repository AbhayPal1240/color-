let colorshow = document.getElementById('color-show');
let btn = document.getElementById('btn');


const getcolor = ()=>{
    //hax 
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    colorshow.innerHTML = randomcode;
    navigator.clipboard.writeText(randomcode);
}

btn.addEventListener('click',getcolor);

getcolor(); 