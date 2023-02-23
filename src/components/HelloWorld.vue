<template>
  <main>
        <div class="header">
            <img class="logo" src="../assets/logo-white.png" alt="logo">
            <p>Zoek begeleid en snel naar de subsidie die het beste bij uw project past!</p>
            <a class="about-button" href="">Over ons</a>
        </div>
        <a class="button" href="/form">
            Aan de slag
        </a>
    </main>
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
</style>
