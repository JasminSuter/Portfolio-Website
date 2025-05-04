<!-- Home page -->

<script lang="ts">
    import { onMount } from 'svelte';

    import { fly } from 'svelte/transition';
    let showPopup = false;
  
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


        
</div>


{#if showPopup}
    <div class="popup" transition:fly={{ y: -200, duration: 300 }}>   

        <div class="commission_box">
            <h1>My commissions</h1>

            
            <div>
                <img src="/uploads/art/Image7.png" alt="About me button" class="example1">
            </div>

            <p>I offer commissions of character art!</p>

            <div class="prices">
                <p>Portrait.........................................5€</p>
                <p>Full Body........................................10€</p>
                <p>Additional Charachter....................5€</p>
                <p>Simple Background...........................5€</p>
                <p>Complex Background.......................10€</p>
            </div>

            <div>
                <img src="/uploads/art/Image11.png" alt="About me button" class="example2">
            </div>

            <p>Please contact me at thecatfreyja@gmail.com or on instagram at apricat.jam</p>

        </div>
    </div>

    <button on:click={() => showPopup = false}><img transition:fly={{ y: -200, duration: 800 }} src="/images/HP_Close.png" alt="Commissions button" class="layer close"> </button>

{/if}

<div class="button_commission">
    <button on:click={() => showPopup = true}> <img src="/images/HP_Commission2.png" alt="Commissions button" class="layer commission"> </button>
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

    /* affects the comissions box that slides down */
    .popup {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #F0C2A4;
        padding: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 10;
        height: 80%;
        width: 80%;
        border-radius: 0px 0px 20px 20px;
        border: 1rem solid  #271910;
        overflow: auto;
    }

    /* affects the comissions image/button */
    .commission {
        left: 15%;
        z-index: 5; /* To make images stackable */ 
        height: 20%;
        min-height: 100px;
    }

    /* affects the close commission image/button */
    .close {
        left: 20%;
        z-index: 6; /* To make images stackable */ 
        bottom: 0;
        top: 70%;
        height: 30%;
    }

    /* affects the about me image/button */
    .aboutme {
        z-index: 2; /* To make images stackable */ 
        height: 43.2%;
        min-height: 120px;
    }

    /* affects the commission content */
        /* style text in the box */
        .commission_box {
            position: relative;
            font-family: 'Handwritten';
            color: #41291a;
        }

        h1 {
            font-family: 'Handwritten';
            font-size: 60px;
            margin-left: 1%;
        }

        .prices {
            font-family: 'Handwritten';
            margin: 5%;
            background-color: #be7d5133;
            padding: 2%;
            border-radius: 25px;
        }

        p {
            font-family: 'Handwritten';
            font-size: 40px;
            margin: 3%;
        }

        /* style image in the box */
        .example1{
            width: 30%;
            float: right;
            margin-right: 5px;
        }

        /* style image in the box */
        .example2{
            width: 40%;
            float: right;
            margin-right: 5px;
            bottom: 50px;
        }

        /* hide the buttons at the bottom */
        button {
            background: transparent;
            border: none !important;
            font-size:0;
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

