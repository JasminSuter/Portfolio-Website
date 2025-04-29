<!-- Home page -->

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="background"> 
    <!-- <img src="/images/HP_Cat.png" alt="Cat" class="cat-gif"> */ -->
</div>


    <div class="image-layers"> 
        <img src="/images/HP_Aisle2.png" alt="Aisle" class="layer aisle">
        <img src="/images/HP_Commission3.png" alt="Commissions" class="layer commission">
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

    .image-layers {
        width: 100%;
        height: 100%;
    }

    .layer {
        position: absolute;
        object-fit: cover;
        top: 0;
        height: 100%;
    }

    .aisle {
        right: 0%;
        z-index: 2;
        min-height: 1000px;
    }

    .commission {
        left: 20%;
        z-index: 3;
        min-height: 2000px;
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