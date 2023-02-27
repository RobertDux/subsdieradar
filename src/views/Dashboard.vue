<template>
  <main>

    <div id="sidebar">

      <div class="sidebar-logo">
        <a href="../"><img src="../assets/newlogo-black.png" alt="logo" /></a>
      </div>

      <div class="sidebar-buttons">
        <div class="sidebar-item">
            <i class="fa fa-users" style="font-size: 24px; color: #463c95;"></i>
            <button type="text" class="sidebar-text">Mijn Portaal</button>
        </div>

        <div class="sidebar-item_notactive">
            <i class="fa fa-bookmark" style="font-size: 24px; color: #463c95;"></i>
            <button type="text" class="sidebar-text">Opgeslagen</button>
        </div>

        <div class="sidebar-item_notactive">
            <i class="fa fa-cog" style="font-size: 24px; color: #463c95;"></i>
            <button type="text" class="sidebar-text">Instellingen</button>
        </div>

        <div class="sidebar-item_notactive">
            <i class="fa fa-comment" style="font-size: 24px; color: #463c95;"></i>
            <button type="text" class="sidebar-text">Berichten</button>
        </div>
        
        <div class="sidebar-item_notactive">
            <i class="fa fa-suitcase" style="font-size: 24px; color: #463c95;"></i>
            <button type="text" class="sidebar-text">Mijn Projecten</button>
        </div>
      </div>



    </div>
    <div id="main-dashboard">
      <h2>Mijn portaal</h2>
      <div class="left-column">
        <div class="row1">
          <div class="rowleft">
            <h1>Hoi Erwin!</h1>
          <p>
            Welkom terug op je eigen portaal binnen het <strong>WE Labs</strong> bedrijfsportaal.
          </p>
          </div>
          <div class="rowright">
            <img src="../assets/testimg.png" alt="">
          </div>
          
          
        </div>

        <h2>Recente projecten</h2>

        <div class="row">
           <p class="subheader">
              <strong>Project type:</strong> <em>Subsidie aanvraag</em>
           </p>
           <div class="cardlayout">
            <div class="cardtext">
              <p>
                <strong>Investeringssubsidie duurzame energie en energiebesparing voor zakelijke gebruikers (ISDE)</strong>
              </p>
            </div>
            
            <img src="../assets/80percent.png" alt="">
           </div>
           <button type="text" class="beheren">Beheren</button>
          </div>

          <div class="row">
           <p class="subheader">
              <strong>Project type:</strong> <em>Subsidie aanvraag</em>
           </p>
           <div class="cardlayout">
            <div class="cardtext">
              <p>
                <strong>BMKB-Groen</strong>
              </p>
            </div>
            
            <img src="../assets/25percent.png" alt="">
           </div>
           <button type="text" class="beheren">Beheren</button>
          </div>
       
      </div>

      <div class="right-column">
        <div class="row1">
          <h2>Meldingen</h2>
          <div class="meldingbutton">
            <i class="fa fa-bookmark" style="font-size: 24px; color: #858486;"></i>
            <button type="text" class="melding">Deadline melding</button>
          </div>

          <div class="meldingbutton">
            <i class="fa fa-bookmark" style="font-size: 24px; color: #858486;"></i>
            <button type="text" class="melding">Bericht van Mex</button>
          </div>

          <div class="meldingbutton">
            <i class="fa fa-bookmark" style="font-size: 24px; color: #858486;"></i>
            <button type="text" class="melding">Project melding</button>
          </div>
        </div>
        <h2>Recent opgeslagen</h2>
        <div class="row">
          <p class="subheader-right">
            Investeringssubsidie duurzame energie en...
           </p>
           <div class="cardlayout">
            <div class="cardtext-right">
              <p>
                <em>Subsidie</em>
              </p>
            </div>
            <i class="fa fa-bookmark" style="font-size: 30px; color: #463c95;"></i>
           </div>
        </div>

        <div class="row">
          <p class="subheader-right">
            Aangekondigd - Open - Ondernemer - Energie...
           </p>
           <div class="cardlayout">
            <div class="cardtext-right">
              <p>
                <em>Zoekcriteria</em>
              </p>
            </div>
            <i class="fa fa-bookmark" style="font-size: 30px; color: #463c95;"></i>
           </div>
        </div>

        <div class="row">
          <p class="subheader-right">
            BMKB-Groen
           </p>
           <div class="cardlayout">
            <div class="cardtext-right">
              <p>
                <em>Subsidie</em>
              </p>
            </div>
            <i class="fa fa-bookmark" style="font-size: 30px; color: #463c95;"></i>
           </div>
        </div>
      </div>
    </div>

  </main>

</template>
<style scoped>
main {
  width: 95%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 13vh; /* nav min-height = 10vh, dus altijd 3vh afstand van nav nu */
  margin-left: auto;
  margin-right: auto;
}

.sidebar-buttons {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.sidebar-item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: #FFFFFF;
  height: 40px;
  padding: 10px 10px 10px 30px;
  gap: 4px;
  border-right: 2px solid #463c95;
}

.sidebar-item button {
        background-color: white;
        border: 0;
        box-sizing: border-box;
        color: #414043;
        cursor: pointer;
        font-size: 16px;
        height: 40px;
        outline: 0;
        text-align: left;
}

.sidebar-item_notactive {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: #F8F8F8;
  height: 40px;
  padding: 10px 10px 10px 30px;
  gap: 10px;
}

.sidebar-item_notactive button {
        background-color: #F8F8F8;
        border: 0;
        box-sizing: border-box;
        color: #414043;
        cursor: pointer;
        font-size: 16px;
        height: 50px;
        outline: 0;
        text-align: left;
}

.sidebar-logo {
  margin-top: 10%;
}

.sidebar-logo img {
  display: block;
  margin: auto;
}

h2 {
  font-weight: bold;
}

.subheader {
  font-size: 18;
  color: rgb(143, 143, 143);
}

.cardlayout {
  display: flex;
  flex-direction: row;
  justify-content:space-between
}

.cardlayout img{
  width: 10%;
}

.cardtext {
  width: 70%;
  font-size: 20px;
}

.cardtext-right {
  width: 70%;
  font-size: 18px;
  color: #858486;
}

.beheren {
  background-color: white;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: rgb(143, 143, 143);
  cursor: pointer;
  font-size: 15px;
  height: 40px;
  outline: 0;
  text-align: center;
  width: 16%;
}

.meldingbutton {
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: white;
  width: 50%;
  padding-left: 20px;
  justify-content: start;
  align-items: center;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: rgb(80, 80, 80);
  cursor: pointer;
  height: 50px;
  outline: 0;
  text-align: left;
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
}

.meldingbutton i {
  background-color: #CDCCCD;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-left: -15px;
}

#sidebar {
        background-color: #F8F8F8;
        color: black;
        width: 200px;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 100px;
      }
      
      #sidebar a {
        display: block;
        color: black;
        padding: 10px;
        text-decoration: none;
      }

      /* Styles for main dashboard area */
      #main-dashboard {
        margin-left: 200px;
        padding: 20px;
      }

      /* Styles for left column */
      .left-column {
        width: calc(50% - 10px);
        float: left;
        margin-right: 10px;
      }

      /* Styles for right column */
      .right-column {
        width: calc(50% - 10px);
        float: right;
      }
      
      /* Styles for rows in left column */
      .left-column .row {
        background-color: #F8F8F8;
        color: black;
        margin-bottom: 10px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
        margin-top: 10px;
      }

      .left-column .row1 {
        background-color: #463c95;
        margin-bottom: 10px;
        padding: 20px;
        color: white;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
        margin-top: 10px;
        display: flex;
      }

      .left-column .row1 h1{
        font-weight: bold;
      }

      .left-column .row1 p{
        font-size: 18px;
      }
      
      /* Styles for rows in right column */
      .right-column .row {
        background-color: #F8F8F8;
        color: black;
        margin-bottom: 10px;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
        margin-top: 10px;
      }
      
      .right-column .row1 {
        background: rgb(70,60,149);
        background: linear-gradient(3deg, rgba(70,60,149,0.8631827731092436) 0%, rgba(255,255,255,1) 100%);
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 10px 20px 50px 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgba(27, 35, 43, 0.036);
      }

      .melding {
        width: 50%;
        background-color: white;
        border-radius: 40px;
        border: 0;
        box-sizing: border-box;
        color: rgb(80, 80, 80);
        cursor: pointer;
        font-size: 17px;
        height: 50px;
        outline: 0;
        text-align: left;
      }

      .rowright {
        display: flex;
        justify-content: end;
        align-items: flex-end;
      }

      .rowright img {
        scale: 2.2;
        padding: 00px 30px 20px 00px;
      }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Dashboard-page'
}
</script>

