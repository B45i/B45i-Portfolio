const printHeader = string =>
    console.log(
        `%c ${string}`,
        `font-weight: bold;
        font-size: 40px;
        color: #ff547e;
        text-shadow: 3px 3px 0 rgb(217,31,38)`
    );

const printLine = string =>
    console.log(
        `%c ${string}`,
        `font-weight: bold;
        font-size: 14px;
        color: #32ffcf;
        `
    );

export const printFancyLogs = () => {
    printHeader('Hola Hacker!!');
    printLine(
        `Im glad that someone decided to check what's going under the hood. 😀`
    );
    printLine('');
    printLine('Source code can be found: github.com/B45i/B45i-Portfolio');
    printLine('This page is built using Preact.js');
    printLine(
        'I used peract so that I can divide the page into re-usable components.'
    );
    printLine(
        'And if I want to edit the content, I dont want to mess with HTML.'
    );
    printLine(
        'I just have to edit the data.js file, and it will automatically generate the page.'
    );
    printLine('Hosted on https://vercel.app.');
};
