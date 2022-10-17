// Step 1 - Create onload handler
window.onload = () => {
    myBgColor();
}


function myBgColor() {

    // Step 3 - Collect all necessary reference
    const content = document.getElementById('content');
    const btn = document.getElementById('change_btn')


    // Step 4 - Handle the click event
    btn.addEventListener('click', function () {
        const rgbBgColor = generateRGBColor();
        content.style.background = rgbBgColor;
    })
}


// Step 2 - Random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}




