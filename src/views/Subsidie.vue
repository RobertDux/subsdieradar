<template>
  <main>
    <div class="titelbar">
      <button id="terugbutton" @click="gaTerug">Terug</button>
      <h1 class="paginatitel">{{naam}}</h1>
    </div>
  <hr><br>
  <div class="wrapper">
    <div id="info">
      <div class="informatie_titel">
        <h2>Informatie</h2>

      </div>
      
      <div id="links">
        <p class="ppLeft">
          Afkorting<br>
          Niveau<br>
          Subsidieverstrekker<br>
          Openingsdatum<br>
          Sluitingsdatum<br>
        </p>
      </div>
      <div id="rechts">
        <p>
          {{afkortingen}}<br>
          {{niveau}}<br>
          {{subsidieverstrekker}}<br>
          {{datum_open}}<br>
          N.v.t.
        </p>
        <button id="aanvraag" onclick="window.open('https://haute-equipe.nl/');">Vraag nu aan</button>
      </div>
      
    </div>

    <div id="omschrijving">
      <h2>Omschrijving</h2>

      <h3>Doel</h3>
      <p>{{doel}}</p>
      <h3>Activiteiten</h3>
      <p>{{subsidiabele_activiteiten}}</p>
    </div>
  </div>
</main>

</template>

<script>
import SubsidieService from "@/services/SubsidieService";

export default {
  name: 'Subsidie-info',
  data() {
    return {
      afkortingen:"",
      beoordeling_tender:"",
      bijzonderheid:"",
      datum_open:"",
      datum_sluit:"",
      doel:"",
      locatie:"",
      looptijdProject_jaren:"",
      naam:"",
      niveau:"",
      samenwerking:"",
      soort_organisatie:"",
      subsidiabele_activiteiten:"",
      subsidiebedrag_max:"",
      subsidiebedrag_min:"",
      subsidiepercentage_max:"",
      subsidiepercentage_min:"",
      subsidieverstrekker:"",
      themas:"",
      totaal_budget:"",
      type_samenwerking:""
    };
  },
  methods: {
    init() {
      const subsidieNaam = this.$route.params.id;
      SubsidieService.getSubsidie(subsidieNaam)
        .then(response => response.json())  
        .then(response => {
            this.afkortingen = response.afkortingen;
            this.beoordeling_tender = response.beoordeling_tender;
            this.bijzonderheid= response.bijzonderheid,
            this.datum_open= response.datum_open,
            this.datum_sluit= response.datum_sluit,
            this.doel= response.doel,
            this.locatie= response.locatie,
            this.looptijdProject_jaren= response.looptijdProject_jaren,
            this.naam = response.naam,
            this.niveau= response.niveau,
            this.samenwerking= response.samenwerking,
            this.soort_organisatie= response.soort_organisatie,
            this.subsidiabele_activiteiten= response.subsidiabele_activiteiten,
            this.subsidiebedrag_max= response.subsidiebedrag_max,
            this.subsidiebedrag_min= response.subsidiebedrag_min,
            this.subsidiepercentage_max= response.subsidiepercentage_max,
            this.subsidiepercentage_min= response.dosubsidiepercentage_min,
            this.subsidieverstrekker= response.subsidieverstrekker,
            this.themas= response.themas,
            this.totaal_budget= response.totaal_budget,
            this.type_samenwerking= response.type_samenwerking
          }
      );
    },
    gaTerug(){
      this.$router.push('/resultaten');
    }
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>
main {
  border-radius: var(--default-border-radius);
  width: 90%;
  height: 80vh;
  padding-bottom: 50px;
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(70, 60, 149, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(6.8px);
}

.titelbar{
  display: flex;
  align-items: center;
}

#terugbutton {
  background-color: #3b2f94;
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 5%;
  margin-top: 10px;
  opacity: 1;
  transition: 0.3s;

}
#terugbutton:hover {
  cursor: pointer;
  opacity: 0.8;
}

#aanvraag {
  background-color: #3b2f94;
  border: none;
  border-radius: 14px;
  color: white;
  padding: 11px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: absolute;
  bottom: 150px;
  left: 120px;
  width: 23%;
  opacity: 1;
  transition: 0.3s;
}

#aanvraag:hover {
  cursor: pointer;
  opacity: 0.8;
}

.ppLeft {
  font-weight: 600;
}
#links {
  display: inline-block;
  grid-area: 2 / 1 / 3 / 2;
}

#rechts {
  display: inline-block;
  margin-left: 10%;
  grid-area: 2 / 2 / 3 / 3;
}

h2 {
  font-size: 21px;
}

hr {
  width: 90%;
  border: 1px solid #3b2f94;
}

h1 {
  margin-left: 30px;
  margin-top: 1%;
}

.wrapper {
  display: flex;
  flex-direction: row;
  height: 80%;
  gap: 20px;
}

#info {
  width: 27%;
  float: left;
  margin-left: 5%;
  background-color: white;
  border-radius: 15px;
  padding: 20px;

}

#info h2 {
  font-weight: bold;
  margin-bottom: 3%;
}


.aanvraagbutton {
  display: block;
}

#omschrijving {
  width: 60%;
  overflow: hidden;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
}

#omschrijving h2 {
  font-weight: bold;
}

#omschrijving h3 {
  font-weight: 500;
  margin-bottom: 1%;
  margin-top: 2%;
}

</style>