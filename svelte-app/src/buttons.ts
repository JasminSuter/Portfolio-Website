


function positionButton() {
    const aisle = document.getElementById('aisle') as HTMLElement;;
    const artButton = document.getElementById('artButton') as HTMLElement;;
  
    // Get the position and size of the aisle image
    const aisleRect = aisle.getBoundingClientRect();
  
    // Calculate desired position for the button
    const offsetTop = aisleRect.height * 1; // 20% from the top
    const offsetLeft = aisleRect.width * 0.3; // 30% from the left
  
    // Set the button's position
    artButton.style.top = `${offsetTop}px`;
    artButton.style.left = `${offsetLeft}px`;
  }
  
  // Call the function on window load and resize
  window.addEventListener('load', positionButton);
  window.addEventListener('resize', positionButton);

