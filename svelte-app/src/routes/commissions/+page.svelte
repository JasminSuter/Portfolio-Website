<!-- Commissions page -->

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>Commissions</title>
</svelte:head>

<div class="background"> 

</div>

  <style>

    :global(body) {
        background-color: #CF9168 ;
    }

    .background {
        background-image: url('/images/Comissionspage.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;  /* Image always uses the full height of the window and cuts off length wise */ 
        margin: 0;

    }


  </style>