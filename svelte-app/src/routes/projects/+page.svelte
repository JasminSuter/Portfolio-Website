<!-- Projects page -->

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="background"> 

</div>

<body>
    <div class = "project">

        <h1>First Year Game Project</h1>

        <h2>Scene from a point and click adventure</h2>
        <p>This was my first big project coding a video game (or at least part of one). It was done using css and I created all the assets myself.</p>
        <p>The game is a scene from a point and click adventure, where we play as a little witch that becomes the local witch doctor. Patients visit her 
            with their ailments and she has to find out what is wrong with them and how to treat them. From time to time we must set out to gather
            new ingredients in the local forest, lake or mountains</p>
        <p>In this scene the witch is gather ingredients in the mountains where she stumbles upon a giant with a giant splinter in his foot.</p>
        <img src="/uploads/project1/P1_Scene.png" alt="project scene" class="art scene">

        <div class="container1">  
            <div class="image">
                <img src="/uploads/project1/P1_Charactersketch.png" alt="project witch sketch" class="art sketch">
            </div>
        
            <div class="text">
                <p>I spent a lot of time working on the art assets, creating multiple sketches and deciding on colour and design choices.</p>
                <p>I quickly landed on a design for the witch though I tried a couple different colour choices. At first her dress was
                    purple, but I eventually landed on yellow to distinguish her from the blue background. </p>
            </div>
        </div>

        <div class="container2">  

            <div class="text">
                <p>I had a few designs for the mountain giant as I was not happy with my initial design. I wanted it to look like part of the scenery
                    so I thought about making it look like the top of a mountain with a bit of snow as their hair, but I didn't like that initial design
                    so I made it look more rock like instead. 
                </p>
            </div>

            <div class="image">
                <img src="/uploads/project1/P1_Giantsketch.png" alt="project giant sketch" class="art sketch">
            </div>
        </div>

        <p>I created a bunch of assets and added to them as I was programming the game. I decided I wanted the cursor to chance depending on what the player
            is hovering over, so I created some small mouth, eye and hand symbols as well as small versions of the objects the player can collect. </p>

        <img src="/uploads/project1/P1_Assets.png" alt="project asset spritesheet" class="assets objects">

        <div class="container2">  

            <div class="text">
                <p>I also created a spritesheet for the player character so it would have a simple walking and talking animation. </p>
            </div>

            <div class="image">
                <img src="/uploads/project1/P1_Witchsprite.png" alt="project giant sketch" class="assets witch">
            </div>
        </div>

    </div>

    <hr class="line">

    <div class = "project">

        <h1>Second Year Browser Game Project</h1>

        <h2>Browser game inspired by Papers Please</h2>
        <p>This is my second major project coding a game, this time using html. Again, I created all the art assets myself.</p>
        <p>In this game the player works for an organisation that is planning to send people to mars as part of a new utopia. The player
            has to decide who gets to go and who doesn't following increasingly detailed instructions.</p>
        <p>I got the overall setup working and a couple example files though there is no game play beyond that yet.</p>
        <img src="/uploads/project2/P2_Gamescreen.png" alt="game scene" class="art scene">

        <div class="container2">  
            <div class="image">
                <img src="/uploads/project2/P2_File.png" alt="project witch sketch" class="art sketch">
            </div>
        
            <div class="text">
                <p>I spent some time creating assets for all the apps that the player can click on.</p>
                <p>I wanted the files to look like digital versions of the classic police files. </p>
            </div>
        </div>

        <div class="container2">  

            <div class="text">
                <p>All the apps are created to look like computer apps. </p>
            </div>

            <div class="image">
                <img src="/uploads/project2/P2_Apps.png" alt="project giant sketch" class="assets objects">
            </div>
        </div>

                <p>I also created a mascot to act as a tutorial instructor. It is based on a personified planet mars wearing an astronauts helmet. </p>
                <img src="/uploads/project2/P2_Mascott.png" alt="project giant sketch" class="assets witch">

    </div>
</body>

  <style>

    :global(body) {
        background-color: #CF9168 ;
    }

    .project{
        font-size: 100px;
        font-family: 'Handwritten-Regular', sans-serif;
        color: #53321d;
        background-color: #e0a076;
        margin: 2%;
        padding: 2%;
    }

    h1 {
        font-family: 'Handwritten';
        font-size: 50px;
        margin-left: 1%;
    }

    h2 {
        font-family: 'Handwritten';
        font-size: 40px;
        margin-left: 2%;
    }

    p {
        font-family: 'Handwritten';
        font-size: 20px;
        margin-left: 5%;
    }

    .container1 {
        display: grid;
        align-items: center; 
        grid-template-columns: 2fr 1fr;
        column-gap: 50px;
        margin: 50px;
    }
    
    .container2 {
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr 2fr;
        column-gap: 50px;
        margin: 50px;
    }

    .art{
        max-width: 90%;
        height: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 5%;
        margin-bottom: -5%;
    }

    .assets{
        max-width: 90%;
        height: auto;
        margin: 5%;
        margin-bottom: -5%;
    }

    .line{
    margin-left: 5%;
    margin-right: 5%;
    content: "";
    width: 90%;
    height: 3px;
    background: linear-gradient(to right, transparent, #53321d, transparent);
    border: none;
    }

  </style>