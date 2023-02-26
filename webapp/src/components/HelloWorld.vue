<template>
  <main>
        <div class="header">
            <img class="logo" src="../assets/newlogo-white.png" alt="logo">
            <p>Zoek begeleid en snel naar de subsidie die het beste bij uw project past!</p>
            <a class="about-button" href="">Over ons</a>
        </div>
        <a class="button" href="/form">
            Aan de slag
        </a>
    

    <div class="main">

      <div class="carouseltitle">
        <h1>HELP! HOE MOET IK BEGINNEN?</h1>
        <h2>Geen zorgen, wij zullen de essentiële stappen met u doornemen</h2>
      </div>

      <div class="carouselwrapper">
        <div class="carouselcard" style="--delay:-1;">
          <div class="carouselcontent">
            <div class="carouselimg"><img src="../assets/step1.png" alt=""></div>
            <div class="carouseldetails">
              <span class="carouselname">STAP 1: Voorbereiding</span>
            <p>Een goede voorbereiding is het halve werk! Heeft u behoefte aan een checklist? Dan kunt u hier
              een checklist vinden dat u kunt gebruiken alvorens het zoekproces.
            </p>
            </div>
          </div>
        </div>

        <div class="carouselcard" style="--delay:0;">
          <div class="carouselcontent">
            <div class="carouselimg"><img src="../assets/step2.png" alt=""></div>
            <div class="carouseldetails">
              <span class="carouselname">STAP 2: Zoekproces</span>
            <p>Begin uw zoekproces door onze filters te gebruiken. Wist u dat bijvoorbeeld bij een subsidie 
              ook man uren kunt gebruiken in plaats van geld?
            </p>
            </div>
          </div>
        </div>

        <div class="carouselcard" style="--delay:1;">
          <div class="carouselcontent">
            <div class="carouselimg"><img src="../assets/step3.png" alt=""></div>
            <div class="carouseldetails">
              <span class="carouselname">STAP 3: Moeilijkheden</span>
            <p>Ziet u lastige termen tijdens het zoeken? Tip: ga met uw muis over een onderstreepte term heen
              om uitleg te krijgen. Als u erop klikt komt u bij een uitgebreidere begrippenlijst terecht.
            </p>
            </div>
          </div>
        </div>

        <div class="carouselcard" style="--delay:2;">
          <div class="carouselcontent">
            <div class="carouselimg"><img src="../assets/step4.png" alt=""></div>
            <div class="carouseldetails">
              <span class="carouselname">STAP 4: Resultaten</span>
            <p>Heb je een aantal subsidies gevonden die bij je passen of juist niet? Dit kunt u dan makkelijk zien met ons 
              stoplicht systeem en waar nodig aanpassingen moeten komen
            </p>
            </div>
          </div>
        </div>

        <div class="carouselcard" style="--delay:3;">
          <div class="carouselcontent">
            <div class="carouselimg"><img src="../assets/step5.png" alt=""></div>
            <div class="carouseldetails">
              <span class="carouselname">STAP 5: Delen</span>
            <p>Alle documenten, subsidies of filters kunt u opslaan, delen en nog meer met collega's in het portaal.
              LET OP: een bedrijfsportaal maakt deel uit van de premium voordelen.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <section class="reviews">
      <h1>RECENSIES</h1>
      <div class="carousel">
        <div class="arrow left"></div>
        <div class="review-card">
          <img src="../assets/avatar.png" alt="Reviewer 1">
          <div class="reviewname">
            <h2>Melany Cho</h2>
          </div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus vitae ipsum venenatis luctus."</p>
          <div class="starreview">
            <img src="../assets/5star.png" alt="Reviewer 1">
          </div>
        </div>
        <div class="review-card">
          <img src="../assets/avatar.png" alt="Reviewer 2">
          <div class="reviewname">
            <h2>Jan Hendriksen</h2>
          </div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus vitae ipsum venenatis luctus."</p>
          <div class="starreview">
            <img src="../assets/4-star.png" alt="Reviewer 1">
          </div>
        </div>
        <div class="review-card">
          <img src="../assets/avatar.png" alt="Reviewer 3">
          <div class="reviewname">
            <h2>Denzel Bar</h2>
          </div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus vitae ipsum venenatis luctus."</p>
          <div class="starreview">
            <img src="../assets/4halfstar.png" alt="Reviewer 1">
          </div>
        </div>
        <div class="arrow right"></div>
      </div>
    </section>

</main>


<footer>
  <div class="row">
    <div class="column">
      <h3>OVER EASY SUBSIDIES</h3>
      <p>Over ons</p>
      <p>Werken bij Easy Subsidies</p>
      <p>Nieuwsbrief</p>
    </div>
    <div class="column">
      <h3>OVER DE WEBSITE</h3>
      <p>Privacy & Cookiebeleid</p>
      <p>Algemene voorwaarden</p>
      <p>Proclaimer</p>
    </div>
    <div class="column">
      <h3>ADVIESBUREAU</h3>
      <p>Haute Equipe</p>
      <p>PwC</p>
      <p>BCO</p>
    </div>
    <div class="column">
      <img src="../assets/newlogo-black.png" alt="Website Logo">
      <p>088-1234567</p>
      <p>info@easysubsidies.nl</p>
    </div>
  </div>
</footer>




</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    buttonClicked(){
      this.$router.push('/form');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carouseltitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carouseltitle h1 {
  font-weight: bold;
}

.carouselwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.carouselwrapper .carouselcard {
  background: white;
  width: 730px;
  display: flex;
  align-items: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  justify-content: space-between;
  border-radius: 100px 20px 20px 100px;
  animation: animate 15s linear infinite;
  animation-delay: calc(3s * var(--delay));
}

.carouselwrapper:hover .carouselcard {
  animation-play-state: paused;
}

.carouselwrapper .carouselcard:last-child{
  animation-delay: calc(-3s * var(--delay));
}

@keyframes animate {
  0%{
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  5%, 20%{
    opacity: 0.4;
    transform: translateY(100%) scale(0.7);
  }
  25%, 40%{
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0%) scale(1);
  }
  45%, 60%{
    opacity: 0.4;
    transform: translateY(-100%) scale(0.7);
  }
  65%, 100%{
    opacity: 0.4;
    transform: translateY(-100%) scale(0);
  }
}

.carouselcard .carouselcontent {
display: flex;
align-items: center;
}

.carouselwrapper .carouselcard .carouselimg {
  height: 90px;
  width: 90px;
  position: absolute;
  left: 15px;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}

.carouselcard .carouselimg img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  max-width: 100%;
}

.carouselcard .carouseldetails {
  margin-left: 100px;
}

.carouseldetails span{
  font-weight: 600;
  font-size: 18px;
}

.carouselcard a{
  text-decoration: none;
  padding: 7px 18px;
  border-radius: 25px;
  color: #fff;
  background: red;
}

.button {
  border: none;
  color: white;
  display: inline-block;
  font-size: 16px;
  width: 384px;
  height: 104px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
}

.button:hover {
  cursor:pointer;
  background-color: #463c95;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

main {
  width: 90%;
  padding: 50px;
  margin-top: 13vh; /* nav min-height = 10vh, dus altijd 3vh afstand van nav nu */
  margin-left: auto;
  margin-right: auto;
}

.main {
  border-radius: var(--default-border-radius);
  padding: 100px;
    width: 90%;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
    background: rgba(70, 60, 149, 0.15);
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(1px);
    margin-top: 80px;
}

main .header {
  padding: 20px;
  border-radius: var(--default-border-radius);
  width: 90%;
  background: #463c95;
  color: white;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

main .header img {
  margin-bottom: 20px;
  margin-top: 100px;
  width: 80%;
}

main .header .about-button {
  background: #3b2f94;
  padding: 20px 50px;
  border-top-left-radius: var(--default-border-radius);
  border-bottom-right-radius: var(--default-border-radius);
  text-decoration: none;
  color: white;
  position: relative;
  top: 40px; /* 20px voor main padding + 20px over de rand heen */
  left: 40px; /* 20px voor main padding + 20px over de rand heen */
  margin-left: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

main .button {
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: #3b2f94;;
  max-width: 30%;
  border-radius: var(--default-border-radius);
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  white-space: nowrap; /* zodat button text altijd op 1 regel blijft met kleinere schermen */
}


.reviews {
  color: black;
  padding: 50px;
  text-align: center;
  margin-top: 30px;
}

.reviews h1 {
  font-weight: bold;
  font-size: 2rem;
  color: #2c3e50;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: baseline;
  overflow-x: auto;
  margin-top: 30px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.review-card {
  background-color: white;
  border-radius: 15px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  text-align: left;
  width: 300px;
}

.review-card img {
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
  width: 80px;
}
.arrow {
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  position: relative;
  width: 30px;
}

.arrow::before {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  display: inline-block;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(315deg);
  width: 10px;
}

.arrow.left::before {
  transform: translate(-50%, -50%) rotate(135deg);
}

.starreview {
  margin-top: 20px;
}

.starreview img {
  width: 150%;
  height: 100%;
}

.reviewname {
  display: flex;
  justify-content: center;
}

.reviewname h2 {
  font-weight: bold;
  color: #2c3e50;
}



footer {
  width: 100vw;
  position: absolute;
  left: 0px;
  padding: 20px 150px 20px 150px;
  background-color: white;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  width: 25%;
  padding: 10px;
  padding-bottom: 40px;
}

.column h3 {
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 10px;
  text-decoration: underline;
}

.column p {
  margin-bottom: 5px;
}

.column img {
  max-width: 50%;
}
</style>
