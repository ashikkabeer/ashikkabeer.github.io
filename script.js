const colorArray = [
    //replacce [green, black, white, ashiktext]
    ['#CF5C36', '#050517','#ffffff','#ffffff'],
    ['#F7717D', '#16001E','#ffffff','#ffffff'], 
    ['#FFE66D', '#2F3061','#F7FFF7','#343434'],






    // Add more color combinations as needed
];

let prevIndex = -1; // Initialize with an invalid index

function changeColors() {
    let randomIndex;

    // Generate a new random index different from the previous one
    do {
        randomIndex = Math.floor(Math.random() * colorArray.length);
    } while (randomIndex === prevIndex);

    // Store the current index for the next comparison
    prevIndex = randomIndex;

    // Get the colors from the array at the random index
    const [secondaryColor,primaryColor, textColor, heroText] = colorArray[randomIndex];

    // Update the CSS variables
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--text-color',textColor)
    document.documentElement.style.setProperty('--hero-text',heroText)
}