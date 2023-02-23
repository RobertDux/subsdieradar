<template>
  <main>
    <div class="container">

      <div class="welcometext">
      <p> Welkom terug op het <strong>WE Labs</strong> bedrijfsportaal,</p>  
      </div>

      <div class="bigtext">
        <h1>
          Wie logt nu in?
        </h1>
      </div>

        <div class="profiles">

          <div class="profile" id="profile-1">
            <a href="/home" class="profile" id="profile-1">
            <img src="../assets/avatar.png" alt="Profile 1">
            </a>
            <h2>Elena</h2>
          </div>

          <div class="profile" id="profile-2">
            <a href="/home" class="profile" id="profile-2">
            <img src="../assets/avatar.png" alt="Profile 2">
            </a>
            <h2>Anouk</h2>
          </div>

          <div class="profile" id="profile-3">
            <a href="/home" class="profile" id="profile-3">
            <img src="../assets/avatar.png" alt="Profile 3">
            </a>
            <h2>Anne</h2>
          </div>

          <div class="profile" id="profile-4">
            <img src="../assets/button.png" alt="Profile 3">
          </div>

        </div>
   

    </div>
  </main>
</template>

<style scoped>
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
}

.profiles {
  display: flex;
  flex-direction: row;
  padding-top: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; /* Wrap the profiles to the next line if there's not enough space */
  justify-content: center; /* Center the profiles horizontally */
  align-items: center;
  margin-top: 10%;
}

.profile {
  position: relative; /* Position the profile names relative to the profile images */
  width: 200px; /* Set the width of each profile */
  height: 150px; /* Set the height of each profile */
  text-align: center; /* Center the profile names */
  margin-left: -35px;
  margin-right: -35px;
}

.profile img {
  width:45%; /* Set the width of the profile images to the full width of the profile */
  height: 60%; /* Set the height of the profile images to 80% of the profile */
  border-radius: 50%; /* Add a border radius of 50% to make the profile images round */
  overflow: hidden; /* Hide any content that overflows the rounded border */
  box-shadow: 0 6px 12px rgb(27 35 43 / 8%), 0 2px 6px rgb(27 35 43 / 20%);
}

#profile-4 img{
  box-shadow: none;
}

.profile h2 {
  position: absolute; /* Position the profile names absolute to the profile images */
  bottom: 0; /* Place the profile names at the bottom of the profile images */
  width: 100%; /* Set the width of the profile names to the full width of the profile images */
  color: black; /* Set the text color of the profile names to white */
  padding: 20px 0; /* Add some padding to the top and bottom of the profile names */
}

h1 {
  font-size: 30;
  font-weight: bold;
}

.welcometext {
  font-size: 20px;
  padding-bottom: 20px;
}


</style>


<script>
// @ is an alias to /src
export default {
  name: 'Profile-page'
}
</script>