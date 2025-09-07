const thema = document.querySelector("#themeid");
const body = document.body;
const root = document.documentElement;

/*
    --destaque: #1f66fd;
    --destaque-inverso: #5888f0;
    --fundo-card: #ececec;
    --fundo-principal: #f5f5f5;
    --text:#FFFFFF;
    --text-inverso:#222222;
*/

function darkTheme(isdark){
    if(isdark) {
        body.classList.add('dark');
        thema.innerHTML = '<a href="#" id="themeid"><i class="fa-solid fa-sun"></i></a>';
        root.style.setProperty('--destaque','#ffd900ff');
        root.style.setProperty('--destaque-inverso', '#91843eff');
        root.style.setProperty('--fundo-card', '#464646ff');
        root.style.setProperty('--fundo-principal', '#1f1f1fff');
        root.style.setProperty('--text', '#222222');
        root.style.setProperty('--text-inverso', '#FFFFFF');
    } else {
        body.classList.remove('dark');
        thema.innerHTML = '<a href="#" id="themeid"><i class="fa-solid fa-moon"></i></a>';
        root.style.setProperty('--destaque','#1f66fd');
        root.style.setProperty('--destaque-inverso', '#5888f0');
        root.style.setProperty('--fundo-card', '#ececec');
        root.style.setProperty('--fundo-principal', '#f5f5f5');
        root.style.setProperty('--text', '#FFFFFF');
        root.style.setProperty('--text-inverso', '#222222');
    }
}
thema.addEventListener('click', (e) => {
    e.preventDefault();
    const isdark = !body.classList.contains('dark');
    darkTheme(isdark);
});
