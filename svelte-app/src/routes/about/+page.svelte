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

<body>
  <div class = "aboutme">

    <div class="container">  
      
      <div class="image">
        <img src="/images/About_Me.png" alt="selfportrait" class="portrait">
      </div>
      
      <div class="text">
        <hr class="line">
        <h1>About me</h1>
          
        <div class="logo">
          <img src="/images/Apricat_noback.png" alt="project witch sketch" class="apricat">
        </div>

        <p>Hello I am Jasmin. I am an artist from Switzerland but I currently live and study in Ireland. I am a freelance artist doing
          character designs, animations and video games!</p>
        <p>I don't really know what to write here. I chose orange for the background because of my little mascott, the Apricat! </p>
        <p>I like cats, cakes and tabletop roleplaying games and I also craft my own earrings and charms from clay.</p>

        <p>Please contact me for any inquiries at thecatfreyja@gmail.com or on instagram at apricat.jam!</p>
          

        <hr class="line">
      </div>

    </div>

  </div>

  <div class="back">
    <a href="/"><img src="/images/ArrowBack.png" alt="Back button" class="arrow"></a>
</div>

</body>

<style>

  :global(body) {
    background-color: #CF9168 ;
  }

  .aboutme{
    position: absolute;
    font-size: 100px;
    font-family: 'Handwritten-Regular', sans-serif;
    color: #53321d;
    background-color: #e0a076;
    margin: 2%;
    padding: 2%;
    border-radius: 25px;
  }
  
  .text{
    font-family: 'Handwritten';
    z-index: 2;
    background-color: #cf916886;
    border-radius: 25px;
    padding: 2%;
  }

  h1 {
    font-size: 50px;
    margin-left: 1%;
  }

  p {
    font-size: 20px;
    margin-left: 5%;
  }

  .container {
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 2fr;
    column-gap: 10px;
    margin: 10px;

  }

  .portrait{
    max-height: 100%;
    height: auto;
    margin-top: 5%;
    margin-left: 5%;
  }

  .apricat{
    width: 300px;
    float: right;
  }

  .line{
    content: "";
    width: 90%;
    height: 3px;
    background: linear-gradient(to right, transparent, #53321d, transparent);
    border: none;
    
  }

  .back {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 2;
  }
  
  .arrow {
    width: 7rem;
    height: 7rem;
  }


</style>