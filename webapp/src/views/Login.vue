<template>
  <main>
    <div class="column_box">
      <div class="col-1">
        <div class="text">
          <h1>Creëer een portaal</h1>
          <p class="smalltext">Voor bedrijven, organisaties, (overheids)instanties of zelfstandige medewerkers. </p>
            <p class="boldtext">Alleen beschikbaar voor premium abonnement.</p>
        <br>
          <p>
            Een portaal wordt beheerd door een host account (bedrijfsemail), deze beheerder kan leden toevoegen aan het portaal. Ieder lid werkt dus onder zijn eigen profiel met eigen wachtwoord. 
          </p>
          <br>
          <p>
            Onder instellingen van het portaal vind u meer opties en informatie over het portaal.  
          </p>
          <div class="twobuttons">
            <button type="text" class="small2">Info</button>
            <button type="text" class="small1">Premium</button>
          </div>

        </div>

      </div>
      <div class="col-2">
        <div class="form">
          <div class="input-container ic1">
            <label for="bedrijfsnaam">Bedrijfsnaam</label>
            <input id="bedrijfsnaam" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
          </div>

          <div class="input-container ic2">
            <label for="address">Email</label>
            <input id="email" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
          </div>

          <div class="input-container ic2">
            <label for="address">Wachtwoord</label>
            <input id="wachtwoord" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
          </div>

          <div class="input-container ic2">
            <label for="address">Adres</label>
            <input id="adres" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
          </div>

          <div class="input-container ic2">
            <label for="land">Land</label>
            <input id="land" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
          </div>

          <div class="onebutton">
            <a href="/profile">
            <button href="/profile" type="text" class="submit">Aanmelden</button> </a>
          </div>
          
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  border-radius: var(--default-border-radius);
  width: 60%;
  height: 80vh;
  margin-top: 13vh; /* nav min-height = 10vh, dus altijd 3vh afstand van nav nu */
  margin-left: auto;
  margin-right: auto;
}

button {
  height: 100px;
}

.column_box {
  display: flex;

  gap: 100px;
  justify-content: center;
  height: 70vh; /* Set the height of the container to the full height of the viewport */
}

.col-1, .col-2 {
  flex: 1; /* Divide the container into 2 equal columns */
  /* background-color: red; */
}

.text {
  border-radius: 60px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
  margin-top: 40px;
}

.smalltext {
  font-size: 14px;
  font-style: italic;
}

.boldtext {
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
}

.text h1 {
  font-weight: 500;
}

.form {
  border-radius: 60px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 50px;
}

.input {
  border: 0;
  box-sizing: border-box;
  color: black;
  font-size: 14px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
  border-radius: 30px;
}

.cut {
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.onebutton {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.submit {
  background-color: #463c95;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 68px;
  outline: 0;
  text-align: center;
  width: 250%;
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
  font-weight: bold;
}

.submit:hover {
  background-color: #5f51c9;
  transition: ease-in 0.15s;
}

.twobuttons {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 60px;
}

.small1 {
  background-color: #463c95;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  outline: 0;
  text-align: center;
  width: 50%;
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
  font-weight: bold;
}

.small1:hover {
  background-color: #5f51c9;
  transition: ease-in 0.15s;
}

.small2 {
  background-color: white;
  border-radius: 40px;
  border: 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  outline: 0;
  text-align: center;
  width: 30%;
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
  font-weight: bold;
}

.small2:hover {
  background-color: #dadada;
  transition: ease-in 0.15s;
}

</style>

<script>
// @ is an alias to /src
export default {
  name: 'Login-page'
}
</script>
