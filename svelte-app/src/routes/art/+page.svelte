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
        
        <!-- === SLIDE 1 ===  -->
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
              <a href="#carousel__slide12" class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
          </div>

        </li>

        <!-- === SLIDE 2 ===  -->
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
            <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
          </div>
        </li>

        <!-- === SLIDE 3 ===  -->
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
            <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
          </div>
        </li>

        <!-- === SLIDE 4 ===  -->
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
            <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide5" class="carousel__next">Go to first slide</a>
          </div>
        </li>

        <!-- === SLIDE 5 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide5"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image5.png" alt="Artwork 5">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide4" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide6" class="carousel__next">Go to first slide</a>
          </div>
        </li>
          
        <!-- === SLIDE 6 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide6"
          tabindex="-1"
          class="carousel__slide">

          <!-- div for the image that is displayed -->
          <div class="slide-content">
            <img src="/uploads/art/Image6.png" alt="Artwork 6">
          </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide5" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide7" class="carousel__next">Go to first slide</a>
          </div>
      </li>

        <!-- === SLIDE 7 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide7"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image7.png" alt="Artwork 7">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide6" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide8" class="carousel__next">Go to first slide</a>
          </div>
        </li>

        
        <!-- === SLIDE 8 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide8"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image8.png" alt="Artwork 8">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide7" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide9" class="carousel__next">Go to first slide</a>
          </div>
        </li>

                <!-- === SLIDE 9 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide9"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image9.png" alt="Artwork 9">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide8" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide10" class="carousel__next">Go to first slide</a>
          </div>
        </li>

                <!-- === SLIDE 10 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide10"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image10.png" alt="Artwork 10">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide9" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide11" class="carousel__next">Go to first slide</a>
          </div>
        </li>

                <!-- === SLIDE 11 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide11"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image11.png" alt="Artwork 11">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide10" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide12" class="carousel__next">Go to first slide</a>
          </div>
        </li>

                <!-- === SLIDE 12 ===  -->
        <!-- each list item displays one image, tabindex is for accesibility purposes -->
        <li id="carousel__slide12"
            tabindex="-1"
            class="carousel__slide">

            <!-- div for the image that is displayed -->
            <div class="slide-content">
              <img src="/uploads/art/Image12.png" alt="Artwork 12">
            </div>

          <!-- wrapper for the navigation elements to scroll from one slide to another, links to prev and next slide -->
          <div class="carousel__snapper">
            <a href="#carousel__slide11" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
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
          <li class="carousel__navigation-item">
            <a href="#carousel__slide5"
              class="carousel__navigation-button">Go to slide 5</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide6"
              class="carousel__navigation-button">Go to slide 6</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide7"
              class="carousel__navigation-button">Go to slide 7</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide8"
              class="carousel__navigation-button">Go to slide 8</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide9"
              class="carousel__navigation-button">Go to slide 9</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide10"
              class="carousel__navigation-button">Go to slide 10</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide11"
              class="carousel__navigation-button">Go to slide 11</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide12"
              class="carousel__navigation-button">Go to slide 12</a>
          </li>
        </ol>
      </aside>
    </section>
  </div>

</body>


<div class="back">
  <a href="/"><img src="/images/ArrowBack.png" alt="Back button" class="arrow"></a>
</div>



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
    height: 80vh;          /* Full viewport height */
    overflow: auto;
    background-color: #da9a6f9c ;
    margin: 12.5% 2% 0 2%;;
    border-radius: 25px;
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
  
  /* Carousel container */ 
  .carousel {
    aspect-ratio: 1 / 1; /* Maintains square aspect ratio */
    filter: drop-shadow(0 0 10px rgba(31, 19, 14, 0.2));
    max-width: 80%;
    width: 100%;
    max-height: 90%;
  }

  /* List syling, removes default styling and padding */ 
  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
    aspect-ratio: 1 / 1;
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
    aspect-ratio: 1 / 1; /* Maintains square aspect ratio */
  }
  
  /* Styling for each slide */ 
  .carousel__slide {
    content: counter(item);
    position: relative;
    flex: 0 0 100%; /* prevents slides from changing size and sets width to 100% */ 
    counter-increment: item; /* increment slide counter for numbering */ 
    align-items: center;
    height: 100%;
  }
  
  /* Style content inside the slide */ 
  .slide-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  /* Style images inside the slide so they take on the width of the carousel */ 
  .slide-content img {
    width: 100%;
  }
  
  .carousel__snapper {
    scroll-snap-align: center; /* ensures image snaps correctly when sliding to avoid it getting stuck in the wrong position */ 
  }
  
  /* Positions th enavigation control buttons at the bottom of the carousel */ 
  .carousel__navigation {
    position: relative;
    right: 0;
    top: 100%;
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
    top: 50%;
    width: 5rem;
    height: 5rem;
    transform: translateY(-50%);
    color: #27191000;
    z-index: 2;
  }

    /* styles the arrow buttons */
    .carousel::before,
    .carousel::after {
    content: '';
    z-index: 1;
    background-size: 5rem;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    pointer-events: none;
    box-shadow: #271910;
    top: 50%;
  }
  
  /* positions left arrow button slightly outside the container */ 
  .carousel::before,
  .carousel__prev {
    left: -1rem;
    background-image: url('/images/ArrowLeft.png');
  }
  
  /* positions right arrow button slightly outside the container */
  .carousel::after,
  .carousel__next {
    right: -1rem;
    background-image: url('/images/ArrowRight.png');
  }
  
  .back {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 1000;
  }
  
  .arrow {
    width: 7rem;
    height: 7rem;
  }
  
  </style>