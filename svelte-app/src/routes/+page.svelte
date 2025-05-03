<!-- Home page -->

<script lang="ts">
    import { onMount } from 'svelte';
  
    // This function ensures that the buttons on the page that link to art, animation... are always 
    // on the right place above the aisle and move with the background as the window gets rezised
    // each button is sized differently and placed in different spots so they all need their own variables
    let aisle: HTMLImageElement;
    let artButton: HTMLImageElement;
    let animationButton: HTMLImageElement;
    let projectsButton: HTMLImageElement;
  
    function positionButton() {
      const aisleRect = aisle.getBoundingClientRect(); // Calculate the borders of the aisle image
  
      const offsetTopArt = aisleRect.height * 0.194; // Calculate vertical offset of Art button relative to the aisle image
      const offsetRightArt = aisleRect.width * 0.22; // Calculate horizontal offset of Art button relative to the aisle image

      const offsetTopAnimation = aisleRect.height * 0.396; // Calculate vertical offset of Animation button relative to the aisle image
      const offsetRightAnimation = aisleRect.width * 0.16; // Calculate horizontal offset of Animation button relative to the aisle image

      const offsetTopProjects = aisleRect.height * 0.58; // Calculate vertical offset of Projects button relative to the aisle image
      const offsetRightProjects = aisleRect.width * 0.16; // Calculate horizontal offset of Projects button relative to the aisle image
  
      // apply distance in pixels to each button image
      artButton.style.top = `${offsetTopArt}px`;
      artButton.style.right = `${offsetRightArt}px`;

      animationButton.style.top = `${offsetTopAnimation}px`;
      animationButton.style.right = `${offsetRightAnimation}px`;

      projectsButton.style.top = `${offsetTopProjects}px`;
      projectsButton.style.right = `${offsetRightProjects}px`;
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

<!-- handles all images on the page except background image (Commissions, aisle, art, animation, projects)-->
<!-- bind:this to position images in relation to each other, class to style images-->  
<div class="image-layers"> 

    <a href="/about"><img src="/images/HP_MeFrame2.png" alt="About me button" class="layer aboutme"></a>

        <div class="aisle-wrapper"> 
            <img bind:this={aisle} src="/images/HP_Aisle.png" alt="Aisle" class="layer aisle">
            <a href="/art"><img bind:this={artButton} src="/images/HP_Art.png" alt="art button" class="layer art"></a>
            <a href="/animations"><img bind:this={animationButton} src="/images/HP_Animation.png" alt="animation button" class="layer animation"></a>
            <a href="/projects"><img bind:this={projectsButton} src="/images/HP_Projects.png" alt="projects button" class="layer projects"></a>
        </div>

    <a href="/commissions"><img src="/images/HP_Commission2.png" alt="Commissions button" class="layer commission"></a>
        
</div>



  <style>

    :global(body) {
        background-color: #CF9168 ;
    }

    .background {
        background-image: url('/images/HP_Background.png');
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

    /* affects the aisle image */ 
    .aisle {
        right: 0%;
        z-index: 3; /* To make images stackable */ 
    }

    /* affects the art button */
    .art {
        z-index: 4; /* To make images stackable */ 
        height: 19.8%;
    }

    /* affects the animation button */
    .animation {
        z-index: 4; /* To make images stackable */ 
        height: 19.1%;
    }

    /* affects the projects button */
    .projects {
        z-index: 4; /* To make images stackable */ 
        height: 21.8%;
    }

    /* affects the comissions image/button */
    .commission {
        left: 15%;
        z-index: 5; /* To make images stackable */ 
        height: 20%;
        min-height: 100px;
    }

    /* affects the comissions image/button */
    .aboutme {
        z-index: 2; /* To make images stackable */ 
        height: 43.2%;
        min-height: 120px;
    }
    
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

