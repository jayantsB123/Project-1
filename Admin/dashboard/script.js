function changeColor(element) {
 const currentColor = element.style.backgroundColor;
 if (currentColor === 'rgb(255, 255, 255)' || currentColor === '') {
     element.style.backgroundColor = '#e0f7fa';
 } else {
     element.style.backgroundColor = '#ffffff';
 }
}
