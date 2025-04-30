<!-- Home page -->

<script lang="ts">
    import { onMount } from 'svelte';
  
    let aisle: HTMLImageElement;
    let artButton: HTMLImageElement;
  
    function positionButton() {
      const aisleRect = aisle.getBoundingClientRect();
  
      const offsetTop = aisleRect.height * 0.2; // Adjust as needed
      const offsetRight = aisleRect.width * 0.09; // Adjust as needed
  
      artButton.style.top = `${offsetTop}px`;
      artButton.style.right = `${offsetRight}px`;
    }
  
    onMount(() => {
      positionButton();
      window.addEventListener('resize', positionButton);
    });
  </script>



<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="background"> 
    <!-- <img src="/images/HP_Cat.png" alt="Cat" class="cat-gif"> */ -->
</div>


    <div class="image-layers"> 
        <div class="aisle-wrapper"> 
            <img bind:this={aisle} src="/images/HP_Aisle2.png" alt="Aisle" class="layer aisle">
            <a href="/art"><img bind:this={artButton} src="/images/HP_Art.png" alt="Commissions" class="layer button art"></a>

        </div>

        <a href="/commissions"><img src="/images/HP_Commission2.png" alt="Commissions" class="layer commission"></a>
    </div>

  <style>

    :global(body) {
        background-color: #CF9168 ;
    }

    .background {
        background-image: url('/images/HP_Background2.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;  /* Image always uses the full height of the window and cuts off length wise */ 
        margin: 0;

    }

    /* affects all images */ 
    .layer {
        position: absolute;
        object-fit: cover;
        top: 0;
        height: 100%;
    }

    .aisle-wrapper {
        width: 100%;
        height: 100%;
    }

    /* affects the comissions image/button */
    .commission {
        left: 20%;
        z-index: 4; /* To make images stackable */ 
        height: 20%;
        min-height: 200px;
    }

    /* affects the aisle image */ 
    .aisle {
        right: 0%;
        z-index: 2; /* To make images stackable */ 
        min-height: 1000px;
    }

    /* affects the 2 buttons on the aisle */ 
    .button {
        position: absolute;
        z-index: 3; /* To make images stackable */ 
    }

    /* affects the art button */
    .art {
        position: absolute;
        height: 20%;
    }

    /* affects the animation button 
    .animation {
        height: 19%;
        opacity: 50%;
    }*/

    /* affects the projects button 
    .projects {
        height: 20%;
    }*/
    
    /* 
    I would like the cat to be animated but I cannot figure out how to fix the image to the correct point of the background
    At certain window aspects the cat just gets moved away from where the table is in the background
    And I also don't want to make the whole background image animated for performance reasons
        .cat-gif {
            height: 100vh;
            margin: 0;
            object-fit: cover;
            min-height: 2000px;
        }
    */ 

  </style>

