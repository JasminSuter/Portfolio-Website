<!-- Art page -->

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>Art</title>
</svelte:head>

<body>

  <!-- Artwork Carousel -->
  <div class="carousel-container">
    <section class="carousel">
      <ol class="carousel__viewport"> <!-- Ordered list for images in the carousel, each slide is a list item -->
        
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide1"
            tabindex="-1" 
            class="carousel__slide">
            
            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image1.png" alt="Artwork 1">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                class="carousel__next">Go to next slide</a>
          </div>

        </li>

        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide2"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image2.png" alt="Artwork 2">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </div>
        </li>

        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide3"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image3.png" alt="Artwork 3">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </div>
        </li>

        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide4"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image4.png" alt="Artwork 4">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide3"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1"
              class="carousel__next">Go to first slide</a>
          </div>
        </li>
      </ol>

      <!-- Dots on each slide that link directly to other slides -->
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1"
              class="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2"
              class="carousel__navigation-button">Go to slide 2</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3"
              class="carousel__navigation-button">Go to slide 3</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4"
              class="carousel__navigation-button">Go to slide 4</a>
          </li>
        </ol>
      </aside>
    </section>
  </div>

  <div class="back">
    <a href="/"><img src="/images/ArrowBack.png" alt="Back button" class="arrow"></a>
  </div>
   
</body>



<style>

  :global(body) {
    background-color: #CF9168 ;
  }
  
  body {
    position: relative;
    background-image: url('/images/Art_Background.png');
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0;
    margin-top: 5%;
  }
  
  .carousel-container {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center;    /* Centers vertically */
    height: 100vh;          /* Full viewport height */
  }
    
    /* Customize scrollbar to not be visible */ 
  * {
    box-sizing: border-box;
    scrollbar-color: transparent transparent; /* hides scroll bar in certain browsers */ 
    scrollbar-width: 0px; /* hides scrollbar in firefox */ 
  }
  
  /* hides scrollbar in browser like chrome and safari */ 
  *::-webkit-scrollbar {
    width: 0;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }
  
  
  /* hides scrollbar in explorer and edge (We really don't want it visible anywhere!) */ 
  * {
    -ms-overflow-style: none;
  }
  
  /* List syling, removes default styling and padding */ 
  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /* Carousel container */ 
  .carousel {
  aspect-ratio: 1 / 1; /* Maintains square aspect ratio */
  filter: drop-shadow(0 0 10px rgba(31, 19, 14, 0.2));
  max-width: 60%;
  width: 100%;
  max-height: 90%;
  }
  
  /* Carousel content */ 
  .carousel__viewport {
    position: absolute; /* content fills carousel box */ 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex; /* arrange slides in horizontal row */ 
    overflow-x: scroll; /* enables horizontal scrolling */ 
    counter-reset: item; /* initializes a css counter for slide numbering */ 
    scroll-behavior: smooth; /* smooth transitions between slides */ 
    scroll-snap-type: x mandatory; /* ensures slides snap in place when scrolling */ 
  }
  
  /* Styling for each slide */ 
  .carousel__slide {
    content: counter(item);
    position: relative;
    flex: 0 0 100%; /* prevents slides from changing size and sets width to 100% */ 
    counter-increment: item; /* increment slide counter for numbering */ 
    align-items: center;
  }
  
  /* Style content inside the slide */ 
  .slide-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  /* Style images inside the slide so they take on the width of the carousel */ 
  .slide-content img {
    width: 100%;
    height: auto;
    display: block;
    align-items: center; 
  
  }
  
  .carousel__snapper {
    scroll-snap-align: center; /* ensures image snaps correctly when sliding to avoid it getting stuck in the wrong position */ 
  }
  
  /* Positions th enavigation control buttons at the bottom of the carousel */ 
  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  
  /* formats the navigation buttons in a horizontal line instead of vertical */ 
  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }
  
  /* styling for navigation dots at the bottom as circular dots*/
  .carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #271910;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }
  
  /* styles carousel arrow buttons */ 
  .carousel::before,
  .carousel::after,
  .carousel__prev,
  .carousel__next {
    position: absolute;
    top: 0;
    margin-top: 50%;
    width: 7rem;
    height: 7rem;
    transform: translateY(-50%);
    border-radius: 50%;
    font-size: 0;
    outline: 0;
  }
  
  /* positions left arrow button slightly outside the container */ 
  .carousel::before,
  .carousel__prev {
    left: -5rem;
  }
  
  /* positions right arrow button slightly outside the container */
  .carousel::after,
  .carousel__next {
    right: -5rem;
  }
  
  /* styles the arrow buttons */
  .carousel::before,
  .carousel::after {
    content: '';
    z-index: 1;
    background-size: 7rem;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    pointer-events: none;
    box-shadow: #271910;
  }
  
  .carousel::before {
    background-image: url('/images/ArrowLeft.png');
  }
  
  .carousel::after {
    background-image: url('/images/ArrowRight.png');
  }

  
  .back {
    position: fixed;
    right: 20px;
    top: 20px;
  }
  
  .arrow {
    width: 7rem;
    height: 7rem;
  }

  
  </style>