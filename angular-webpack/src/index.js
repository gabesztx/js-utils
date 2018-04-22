const getTheme = themeName => import(`./themes/${themeName}`);
const button = document.createElement('button');
button.innerHTML = 'Click me!';
button.onclick = e => {
    getTheme('f').then(module => {
        console.log('F Module loaded: ', module);
    });
    setTimeout(() => {
        getTheme('a').then(module => {
            console.log('A Module loaded: ', module);
        });
    }, 2000);
};

setTimeout(() => {
    console.log('Page Loaded!');
    document.body.appendChild(button);
});