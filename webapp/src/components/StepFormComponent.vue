<template>
    <div id="progress-bar">
<!--      <div :style="{ width: progress + '%' }" id="progress"></div>-->
      <ul class="progress-bar">
        <li class="sector-li"></li>
        <li class="thema-li"></li>
        <li class="activiteit-li"></li>
        <li class="subsidiebedrag-li"></li>
        <li class="organisatietype-li"></li>
        <li class="projectlocatie-li"></li>
        <li class="cofinancieren-li"></li>
        <li class="samenwerking-li"></li>
      </ul>
    </div>

    
    <!-- <br><br>
    <p>Progress: {{ progress }}%</p> -->
  <form @submit.prevent="submit" class="vragenForm">
    <section v-if="step === 1">
      <h3 for="sectorr">1. In welke sector werkt u?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Een sector is een onderdeel van maatschappij waarbinnen meerdere typen bedrijven en typen organisatie vallen. Die organisatie en bedrijven zijn een groep die afbranchen van een bepaalde circle met dezelfde doelen en keuzes.</span>
        </div>
      </h3>
      <select v-model="sector" id="sectorr" class="select">
        <option disabled value="">Kies een sector</option>
        <option>Arbeid en arbeidsmarkt</option>
        <option>Bouw en ruimtelijke ordening</option>
        <option>Cultuur</option>
        <option>Energie</option>
        <option>Export, internationalisering en ontwikkelingsamenwerking</option>
        <option>Gezondheidszorg en welzijn</option>
        <option>Informatie en communicatietechnologie</option>
        <option>Landbouw en Visserij</option>
        <option>Milieu</option>
        <option>Natuurbeheer</option>
        <option>Onderwijs</option>
        <option>Onderzoek, ontwikkeling en innovatie</option>
        <option>Overheid</option>
        <option>Industrie</option>
        <option>Sport, recreatie en toerisme</option>
        <option>Transport</option>
        <option>Veiligheid</option>
      </select>

      <div id="warning1">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>

      <div class="buttons">
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(1)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 2">
      <h3>2. Onder welke thema valt uw project?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Een thema is een klein deel die binnen de sector valt. Een sector is een groot gedeelte, en thema’s delen dat grote thema op in kleinere gedeeltes.</span>
        </div>
      </h3>
      <select v-model="thema" class="select">
        <option disabled value="">Kies een thema</option>
        <option>Duurzaamheid en circulariteit</option>
        <option>Digitalisering</option>
        <option>Economische gevolgen coronavirus</option>
        <option>Energie besparen</option>
        <option>Energie produceren</option>
        <option>Gebouwen renoveren en bouwen</option>
        <option>Infrastructuur verbeteren</option>
        <option>Recycling</option>
        <option>Landbouw interventies</option>
        <option>Maatschappelijke vraagstukken </option>
        <option>Milieu en natuur beschermen of beheren</option>
        <option>Onderzoek en ontwikkeling</option>
        <option>Overnemen van een bedrijf</option>
        <option>Mobiliteit</option>
        <option>Voedsel en voedselveiligheid</option>
        <option>Personeel opleiden</option>
      </select>

<!--      <h3>2.1 Welk thema verdieping hoort hierbij?</h3>-->
<!--      <select v-model="thema" class="select-2">-->
<!--        <option disabled value="">Kies een thema verdieping</option>-->
<!--          <optgroup label="duurzaamheid-en-circularieit">-->
<!--            <option>Circulair ontwerpen</option>-->
<!--            <option>Circulair produceren</option>-->
<!--            <option>Circulair organiseren</option>-->
<!--            <option>Recycling</option>-->
<!--            <option>Hergebruik afval</option>-->
<!--            <option>Reparatie</option>-->
<!--            <option>Biobased grondstoffen</option>-->
<!--            <option>CO2 reductie</option>-->
<!--            <option>Limaatneutrale landbouw en voedselproductie</option>-->
<!--            <option>Duurzame landbouw Klimaatbestendig landelijk en stedelijk gebied</option>-->
<!--            <option>Duurzame mobiliteit</option>-->
<!--            <option>Circulaire economie</option>-->
<!--            <option>Ontwikkeling van duurzame en gezonde voedingsproducten</option>-->
<!--            <option>Duurzame en veilige Noordzee en andere wateren</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="digiatlisering">-->
<!--            <option>Digitale vaardigheid</option>-->
<!--            <option>ICT</option>-->
<!--            <option>Kunstmatige intelligentie</option>-->
<!--            <option>Cyber Security</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="economische-gevolgen-coronavirus">-->
<!--            <option>Economische gevolgen Coronavirus</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="energie-besparen">-->
<!--            <option>CO2 reductie</option>-->
<!--            <option>Duurzame mobiliteit</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="energie-produceren">-->
<!--            <option>Energie Produceren</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="gebouwen-renoveren-en-bouwen">-->
<!--            <option>Circulair bouwen</option>-->
<!--            <option>Prefab bouwen</option>-->
<!--            <option>Industrieel bouwen</option>-->
<!--            <option>Biobased grondstoffen</option>-->
<!--            <option>Klimaatbestendig landelijk en stedelijk gebied</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="infrastructuur-verbeteren">-->
<!--            <option>CO2 reductie</option>-->
<!--            <option>15 minute city</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="recycling">-->
<!--            <option>Afval hergebruiken</option>-->
<!--            <option>Circulariteit</option>-->
<!--            <option>CO2 reductie</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="landbouw-interventies">-->
<!--            <option>Economisch vitale landbouw</option>-->
<!--            <option>Agrarisch</option>-->
<!--            <option>Limaatneutrale landbouw en voedselproductie</option>-->
<!--            <option>Kringlooplandbouw</option>-->
<!--            <option>Landbouw met ruimte voor biodiversiteit</option>-->
<!--            <option>Water</option>-->
<!--            <option>Landschap</option>-->
<!--            <option>Landbouw met oog voor regionaal voedselsysteem</option>-->
<!--            <option>Platteland</option>-->
<!--            <option>Duurzame landbouw</option>-->
<!--            <option>Ontwikkeling van duurzame en gezonde voedingsproducten</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="maatschappelijke-vraagstukken">-->
<!--            <option>CO2 reductie</option>-->
<!--            <option>15 minute city</option>-->
<!--            <option>Efficiënt bronnengebruik</option>-->
<!--            <option>Invloed van omgeving op gezond keuzegedrag</option>-->
<!--            <option>Voedig en gezondheid bij verschillende bevolkingsgroepen</option>-->
<!--            <option>Nederland is en blijft de best beschermde en leefbare delta</option>-->
<!--            <option>Veiligheid</option>-->
<!--            <option>Maatschappelijke verdienvermogen</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="milieu-en-natuur-beschermen-of-beheren">-->
<!--            <option>Economisch vitale landbouw</option>-->
<!--            <option>Nederland is en blijft de best beschermde delta</option>-->
<!--            <option>Kringlooplandbouw</option>-->
<!--            <option>Landbouw met ruimte voor biodiversiteit</option>-->
<!--            <option>Water</option>-->
<!--            <option>Landschap</option>-->
<!--            <option>Landbouw met oog voor regionaal voedselsysteem</option>-->
<!--            <option>Korte ketens</option>-->
<!--            <option>Voedsel van dichtbij</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="onderzoek-en-ontwikkeling">-->
<!--            <option>Invloed van omgeving op gezond keuzegedrag</option>-->
<!--            <option>Living Labs</option>-->
<!--            <option>Innovatie</option>-->
<!--            <option>Sleuteltechnologieën ontwikkeling van duurzame en gezonde voedingsproducten</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="overnemen-van-een-bedrijf">-->
<!--            <option>Overnemen van een bedrijf</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="mobiliteit">-->
<!--            <option>CO2 reductie</option>-->
<!--            <option>Slimme mobiliteit</option>-->
<!--            <option>Verduurzaming vervoer</option>-->
<!--            <option>Mobiliteitshubs</option>-->
<!--            <option>Deelmobiliteit</option>-->
<!--            <option>15 minute city</option>-->
<!--          </optgroup>-->

<!--          <optgroup label="voedsel-en-veiligheid">-->
<!--            <option>Landbouw met oog voor regionaal voedselsysteem</option>-->
<!--            <option>Voeding en gezondheid bij verschillende bevolkingsgroepen</option>-->
<!--            <option>Invloed van omgeving op gezond keuzegedrag</option>-->
<!--            <option>Ontwikkeling van duurzame en gezonde voedingsproducten</option>-->
<!--            <option>Gezond en veilig voedsel Voedselveiligheid</option>-->
<!--            <option>Leefomgeving en gezondheid</option>-->
<!--            <option>Klimaatneutrale landbouw en voedselproductie</option>-->
<!--            <option>Voedsel</option>-->

<!--          </optgroup>-->

<!--          <optgroup label="personeel-opleiden">-->
<!--            <option>Digitale vaardigheid</option>-->
<!--            <option>Human capital</option>-->
<!--          </optgroup>-->
<!--      </select>-->

      <div id="warning2">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(2)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 3">
      <h3>3. Wat is het uw subsidiale activiteit?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Bij activiteit laat je zien wat je binnen de thema doet. Elke thema heeft dezelfde of andere activiteiten en niet elke activiteit is evenveel subsidieerbaar.</span>
        </div>
      </h3>
      <select v-model="subsidialeActiviteit" class="select">
        <option disabled value="">Subsidiale activiteit</option>
        <option>Onderzoek en ontwikkeling</option>
        <option>Demonstratie en pilots</option>
        <option>Investeren en uitrollen</option>
        <option>Netwerkactiviteiten</option>
        <option>Onderwijs</option>
      </select>
      <div id="warning3">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>
      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-skip" v-if="step !== totalsteps" @click.prevent="skipStep(3)">Overslaan</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(3)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 4">
      <h3>4. Wat is het minimaal benodigd subsidiebedrag?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Bij minimaal subsidiebedrag vul je in hoeveel je minimaal wilt krijgen voor je gekozen subsidie. Het kan meer zijn maar niet minder.</span>
        </div>
      </h3>
      
      <input v-model="minimaleBedrag" class="select" placeholder="€0"/>

      <div id="warning4">
        <hr class="warningline">
        <p class="warningtext">Vul een bedrag in</p>
      </div>

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(4)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 5">
      <h3>5. Wat voor type organistatie bent u?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Type organisatie; zie opties</span>
        </div>
      </h3>
      <select v-model="typeOrganisatie" class="select">
        <option disabled value="">Type organisatie</option>
        <option>Overheid</option>
        <option>Onderwijs</option>
        <option>MKB</option>
        <option>Groot bedrijf</option>
        <option>Kennisinstellingen</option>
        <option>Stichting</option>
      </select>

      <div id="warning5">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(5)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 6">
      <h3>6. Wat is de projectlocatie?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">De locatie waar het project zich plaatsvindt</span>
        </div>
      </h3>
      <select v-model="projectlocatie" class="select">
        <option disabled value="">Projectlocatie</option>
        <option>Provinciaal</option>
        <option>Nationaal</option>
        <option>Europees</option>
      </select>

      <div id="warning6">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(6)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 7">
      <h3>7. Kunt u cofinancieren?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Cofinancieren houdt in dat niet alleen de subsidiegever betaalt, maar ook het bedrijf/persoon die de subsidie aanvraagt.</span>
        </div>
      </h3>
      <input type="checkbox" class="select" id="checkbox" v-model="cofinancieren"/>
      <!-- <label for="checkbox">{{ cofinancieren }}</label> -->

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-skip" v-if="step !== totalsteps" @click.prevent="skipStep(7)">Overslaan</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(7)">Volgende stap</button>
      </div>
    </section>

    <section v-if="step === 8">
      <h3>8. Wat is het type samenwerking?
        <div class="tooltip">
          <img class="info-icon" alt="Open link" src="../assets/info_icon.png">
          <span class="tooltiptext">Type samenwerking; zie opties</span>
        </div>
      </h3>
      <select v-model="samenwerking" class="select">
        <option disabled value="">Type samenwerking</option>
        <option>Niet van toepassing</option>
        <option>Privaat/Privaat</option>
        <option>Publiek/Publiek</option>
        <option>Publiek/Privaat</option>
      </select>

      <div id="warning8">
        <hr class="warningline">
        <p class="warningtext">Selecteer een optie</p>
      </div>

      <div class="buttons">
        <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
        <button class="button btn-skip" v-if="step !== totalsteps" @click.prevent="skipStep(8)">Overslaan</button>
        <button class="button btn-next" v-if="step !== totalsteps" @click.prevent="nextStep(8)">Volgende stap</button>
      </div>
    </section>


    <section v-if="step === 9">
      <h3>Wij hebben uw voorkeuren meegenomen, bekijk uw beste matches! </h3>

      <button class="button btn-prev" v-if="step !== 1" @click.prevent="prevStep">Vorige Stap</button>
      <button class="button btn-next" type="submit">Bekijk subsidies</button>

    </section>
    <br/>


  </form>
</template>

<script>
export default {
  name: "stepFormComponent",
  data() {
    return {
      step: 1,
      totalsteps: 9,
      sector: '',
      thema: '',
      subsidialeActiviteit: '',
      minimaleBedrag: '',
      typeOrganisatie: '',
      projectlocatie: '',
      cofinancieren: null,
      samenwerking: '',
      progress: 0,
    }
  },
  methods: {
    setstorage() {
      const tempSector = this.sector.toString();
      sessionStorage.setItem('sector', JSON.stringify(tempSector))
      const tempThema = this.thema.toString();
      sessionStorage.setItem('thema', JSON.stringify(tempThema))
      const tempsubAct = this.subsidialeActiviteit.toString();
      sessionStorage.setItem('subsidialeActiviteit', JSON.stringify(tempsubAct))
      sessionStorage.setItem('minimaleBedrag', JSON.stringify(this.minimaleBedrag))
      sessionStorage.setItem('typeOrganisatie', JSON.stringify(this.typeOrganisatie))
      sessionStorage.setItem('projectlocatie', JSON.stringify(this.projectlocatie))
      sessionStorage.setItem('cofinancieren', JSON.stringify(this.cofinancieren))
      sessionStorage.setItem('samenwerking', JSON.stringify(this.samenwerking))
    },
    updateProgress(vraagnummer){
      const number = vraagnummer -1 ;
      const list = document.querySelectorAll(".progress-bar li")
      for(let i = 0; i < 10; i++){
        list[number].classList.remove('notactive')
        list[number].classList.add('active')
      }
      for(let i = 0; i < number; i++){
        list[number].classList.remove('notactive')
      }
    },
    skipStep(vraagnummer) {
      // zet vraag van sessionstorage op null
      if (vraagnummer === 3) {
        this.subsidialeActiviteit = "null";
        console.log(this.subsidialeActiviteit)
      } else if (vraagnummer === 7) {
        this.cofinancieren = null;
        console.log(this.cofinancieren)
      } else if (vraagnummer === 8) {
        this.samenwerking = "null";
        console.log(this.samenwerking)
      }
      console.log(vraagnummer)
      this.step++;
    },
    nextStep(vraagnummer) {
      // checkt of vraag is ingevuld
      if (vraagnummer === 1) {
        if (this.sector === '') {
          document.getElementById("warning1").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 2) {
        if (this.thema === ''){
          document.getElementById("warning2").style.visibility = "visible";
        }else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 3) {
        if (this.subsidialeActiviteit === '') {
          document.getElementById("warning3").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 4) {
        if (this.minimaleBedrag === '') {
          document.getElementById("warning4").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 5) {
        if (this.typeOrganisatie === '') {
          document.getElementById("warning5").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 6) {
        if (this.projectlocatie === '') {
          document.getElementById("warning6").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      } else if (vraagnummer === 7) {
          this.updateProgress(vraagnummer);
          this.step++
        }
      else if (vraagnummer === 8) {
        if (this.samenwerking === '') {
          document.getElementById("warning8").style.visibility = "visible";
        } else {
          this.updateProgress(vraagnummer);
          this.step++
        }
      }
    },
    prevStep: function () {
      this.step--;
    },
    submit() {
      this.setstorage()
      this.$router.push(`/resultaten`)
          .then(response => response.status)
          .catch(err => console.warn(err));
    }
  }
}
</script>
<style scoped>
.tooltip {
  display: inline;
}
/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 380px;
  background-color: white !important;
  color: black;
  text-align: left;
  padding: 20px;
  font-size: 2vh;

  box-shadow: 1px 2px 9px darkgrey;
  margin-left: 1%;

  background: rgba(255, 255, 255, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.2px);
  -webkit-backdrop-filter: blur(11.2px);
  border: 1px solid rgba(255, 255, 255, 1);
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
h3 {
  padding-top: 15px;
  font-size: 4vh;
  font-weight: 400;
  color: #102932;
}

#warning1, #warning2, #warning3, #warning4, #warning5, #warning6, #warning8 {
  visibility: hidden;
}

.warningline {
  border-top: 2px solid darkred;
  width: 360px;
}

.warningtext {
  margin-top: 1%;
  color:darkred;
}

p {
  color: #102932;
}
form {
  padding-top: 50px;
}
.select{
  width: 374px;
  height: 66px;
  border-radius: 10px;
  margin-top: 50px;
  font-size: 2vh;
  text-align: center;
}
.select[multiple]{
  margin-top: 50px;
  height: 300px !important;
  width: 800px !important;
}
.button {
  margin-top: 80px;
}
.buttons {
  text-align: center;
  padding-top: 25px;
}
.vragenForm {
  padding-top: 5%;
  width: 100%;
}
.info-icon {
  width: 2%;
  margin-left: 1%;
  cursor: pointer;
}
h3 {
  line-height: 34px;
  text-align: center;
  font-size: 25px;
}
section {
  text-align: center;
}
.button {
  border: none;
  border-radius: 14px;
  padding: 11px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}
.btn-prev {
  width: 243px;
  height: 47px;
  left: 688px;
  top: 696px;
  background: #463c95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
}
.btn-prev:hover {
  cursor: pointer;
  background-color: #6c9fc4;
}
.btn-next {
  width: 243px;
  height: 47px;
  left: 688px;
  top: 696px;
  background: #463c95;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.btn-next:hover {
  cursor: pointer;
  background-color: #6c9fc4;
}
#progress-bar {
  width: 90%;
}
.progress-bar{
  display:flex;
  list-style:none;
  counter-reset:container 0;
  width: 80px;
  height: 20px;
  border-radius: 30px;
}
.progress-bar li{
  display:flex;
  justify-content: center;
  list-style:none;
  position:relative;
  margin-right:185px;
  margin-top:5px;
}
/*before is het bolletje, after is de lijn die de bolletjes verbind*/


.progress-bar{
}
.progress-bar li::before{
  /*content:;*/
  position:absolute;
  height:35px;
  width:130px;
  border-radius: 30px;
  border:1px solid grey;
  text-align:center;
  line-height:35px;
  z-index:10;
  background-color:white;
}
.progress-bar li::after{
  content:'';
  position:absolute;
  height:2px;
  width:200px;
  background-color:#f5f7fa;
  top:15px;
  right:-20px;
}
.progress-bar li:active{
  background-color: #463c95;
  border:none;
  color:green;
}
progress-bar li:before{
  background-color:grey ;
}
.sector-li::before{
  content:"Sector";
}
.thema-li::before{
  content:"Thema";
}
.activiteit-li::before{
  content:"Activiteit";
}
.subsidiebedrag-li::before{
  content:"Subsidiebedrag";
}
.organisatietype-li::before{
  content:"Organisatietype";
}
.projectlocatie-li::before{
  content:"Projectlocatie";
}
.cofinancieren-li::before{
  content:"Cofinanciëren";
}
.samenwerking-li::before{
  content:"Samenwerking";
}
.progress-bar li.active:after{
  background-color:#463c95 !important;
}
.progress-bar li.active::before{
  background-color: #463c95;
  border:none;
  color:#fff;
}
.progress-bar li:first-child:after{
  display:none;
}
.btn-prev:hover {
  cursor: pointer;
  background-color: #3b2f94;
}
.btn-next:hover {
  cursor: pointer;
  background-color: #3b2f94;
}
.btn-skip {
  background-color: white;
  /*margin-top: 50px;*/
  border-radius: 10px;
  width: 243px;
  height: 47px;
}
.btn-skip:hover {
  cursor: pointer;
  background-color: #eeeeee;
}
</style>