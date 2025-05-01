<!-- About me page -->

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<div class="background"> 

</div>

  <style>

    .background {
        background-image: url('/images/Aboutmepage.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;  /* Image always uses the full height of the window and cuts off length wise */ 
        margin: 0;

    }


  </style>