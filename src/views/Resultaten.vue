<template>
  <main>
    <h1 class="text-center">Uw resultaten</h1>

    <div class="resultaten_box">

      <div id="wrapper">
        <div class="filters">
          <div class="status">
            <p id="title"><b>Match</b></p>
            <div class="checkboxes">
              <input type="checkbox" class="checkmark" id="Groen" name="Groen" value="Groen">
              <label for="Groen"> Groen</label><br>

              <input type="checkbox" id="Oranje" name="Oranje" value="Oranje">
              <label for="Oranje"> Oranje</label><br>

              <input type="checkbox" id="Rood" name="Rood" value="Rood">
              <label for="Rood"> Rood</label><br><br>
            </div>
          </div>
        </div>

        <div class="filters">
          <div class="status">
            <p id="title"><b>Co-financering</b></p>
            <div class="checkboxes">
              <input type="checkbox" class="checkmark" id="Ja" name="Ja" value="Ja">
              <label for="Ja"> Ja</label><br>

              <input type="checkbox" id="Nee" name="Nee" value="Nee">
              <label for="Nee"> Nee</label><br>
            </div>
          </div>
        </div>
      </div>


      <div id="breed">
        <div class="resultaten">
          <div class="subsidie" v-for="subsidie in subsidies" v-bind:style= "[subsidie.knockout ? {'background': '#1b154a'} : {'background': '#463c95'}]" :key="subsidie.id">
            <h3 id="subsidieNaam" @click="subsidiePagina(subsidie)">{{ subsidie.naam }}</h3>
            <p class="info">
              Locatie: {{ subsidie.locatie }}<br>
              Bedrag: {{ subsidie.subsidiebedrag }}<br>
              Eind datum: {{ subsidie.datum_sluit }}<br>
            </p><br>

            <div id="appmodal">
              <button
                  type="button"
                  class="btn"
                  @click="showModal"
              >
                Toon matching details
              </button>

              <Modal v-show="isModalVisible" @close="closeModal">
                <template v-slot:header>Matching details</template>
                <template v-slot:body>
                   {{ subsidie.knockout }}
                </template>
              </Modal>
            </div>


            <div class="matchingpercentage">
              <svg viewBox="0 0 80 80" width="80" height="80" id="circle">
                <circle class="circle" :class="{
                circleLightGreen: subsidie.matchingPercentage > 85 && subsidie.matchingPercentage <= 100,
                circleGreen: subsidie.matchingPercentage >70 && subsidie.matchingPercentage <= 85,
                circleLightOrange: subsidie.matchingPercentage > 50 && subsidie.matchingPercentage <= 70,
                circleOrange: subsidie.matchingPercentage > 40 && subsidie.matchingPercentage <= 50,
                circleLightRed: subsidie.matchingPercentage > 15 && subsidie.matchingPercentage <= 40,
                circleRed: subsidie.matchingPercentage > 0 && subsidie.matchingPercentage <= 15,
              }" cx="40" cy="40" r="38"/>
                {{ subsidie.matchingPercentage }}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import SubsidieService from "@/services/SubsidieService";
import Modal from "@/components/modal.vue";

export default {
  name: 'form-resultaten',
  components: {
    Modal,
  },
  data() {
    return {
      subsidies: [],
      sector: [],
      thema: [],
      typeActiviteit: [],
      budget: '',
      typeAanvrager: '',
      projectlocatie: [],
      bijdrage: false,
      samenwerking: [],
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getStorageData() {
      this.sector = sessionStorage.getItem('sector')
      this.thema = sessionStorage.getItem('thema')
      this.subsidialeActiviteit = sessionStorage.getItem('subsidialeActiviteit')
      this.minimaleBedrag = sessionStorage.getItem('minimaleBedrag')
      this.typeOrganisatie = sessionStorage.getItem('typeOrganisatie')
      this.projectlocatie = sessionStorage.getItem('projectlocatie')
      this.cofinancieren = sessionStorage.getItem('cofinancieren')
      this.samenwerking = sessionStorage.getItem('samenwerking')
    },
    getSubsidies() {
      SubsidieService.matchSubsidies(this.sector, this.thema, this.subsidialeActiviteit, this.minimaleBedrag, this.typeOrganisatie, this.projectlocatie, this.cofinancieren, this.samenwerking)
          .then(response => {
            this.subsidies = response.data.subsidieList;
            this.subsidies.sort((a, b) => (a.matchingPercentage > b.matchingPercentage) ? 1 : -1)
            this.subsidies.sort((c, d) => (c.knockout > d.knockout) ? 1 : -1)
          });
    },
    subsidiePagina(sub) {
      this.$router.push(`/subsidie/${sub.naam}`)
    }
  },
  created() {
    this.getStorageData();
    this.getSubsidies();
  },
}
</script>

<style scoped>


hr {
  width: 50%;
  float: left;
  border: 1px solid #6cbb71;
}

.resultaten_box {
  height: 96.5%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 20px;
}

main {
  border-radius: var(--default-border-radius);
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 13vh; /* nav min-height = 10vh, dus altijd 3vh afstand van nav nu */
  margin-left: auto;
  margin-right: auto;
  background: rgba(70, 60, 149, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(6.8px);
}

main .progress {
  padding: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  gap: 20px;
}

.progress-item {
  box-sizing: border-box;
  width: 216px;
  height: 43px;
  background: #463c95;
  border: 2px solid #463c95;
  color: white;
  border-radius: 10px;
  padding: 10px;
}

main .header {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

#circle {
}
.circle {
  box-shadow: 27px 27px 77px #bababa,
  -27px -27px 77px #ffffff;
}

.circleLightGreen {
  fill: #69B34C;
}

.circleGreen {
  fill: #93b334;
}

.circleOrange {
  fill: #FAB733;
}

.circleLightOrange {
  fill: #FF8E15;
}

.circleLightRed {
  fill: #FF4E11;
}

.circleRed {
  fill: #FF0D0D;
}

#open-icon {
  width: 4%;
  float: right;
  margin: 2%;
  cursor: pointer;
}

hr {
  width: 50%;
  float: left;
  border: 1px solid #6cbb71;
}

#breed {
  display: inline-block;
  width: 100%;
}

.info {
  margin-left: 2%;
}

#subsidieNaam {
  text-align: left;
  background: rgba(175, 169, 223, 0.52);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.9px);
  -webkit-backdrop-filter: blur(13.9px);
  padding: 5px;
  margin-bottom: 10px;
  font-weight: 500;
}

#subsidieNaam:hover {
  cursor: pointer;
}

.subsidie {
  background: #463c95;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.resultaten {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 0px 50px 0px 50px;
  overflow: auto;
  grid-area: child;
  min-height: 0;
  overflow: auto;
}

.matchingpercentage {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1%;
}

thead {
  text-align: left;
}

#title {
  margin: auto;
  width: 195px;
  height: 38px;
  background: #463c95;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}

.filters {
  display: flex;
  flex-direction: column;
}

.checkboxes {
  margin: auto;
  width: 150px;
  margin-top: 10px;
  margin-bottom: 20px;
}

input[type=checkbox] {
  position: absolute;
  visibility: hidden;
}

label {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-size: 18px;
}

input[type=checkbox] + label:before {
  content: "";
  background-color: #ffffff;
  border: 1.5px solid black;
  border-radius: 20%;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 0;
}

input[type=checkbox]:checked + label:before {
  background-color: black;
}

.text-center {
  text-align: center;
  padding: 15px;
  color: black;
  font-weight: 500;
}


</style>