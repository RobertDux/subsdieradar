<template>
    <main>
        <div class="header">
          <!-- <div>
            <button @click="advanceProgress">Advance Progress</button>
            <div id="progress-bar">
              <div :style="{ width: progress + '%' }" id="progress"></div>
            </div>
            <br><br>
            <p>Progress: {{ progress }}%</p>
          </div> -->
          <step-form-component></step-form-component>
        </div>
        
    </main>
  
</template>

<script>
import StepFormComponent from '@/components/StepFormComponent'
export default {
  name: 'form-page',
  components: {
    StepFormComponent
  }
};


</script>


<style scoped>
main {
  background: ;
  border-radius: var(--default-border-radius);
  width: 90%;
  height: 75vh;
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
  background: ;
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
  background: white;
  border: 2px solid #463c95;
  color: black;
  border-radius: 10px;
  padding: 10px;
}

.progress-item.active {
  box-sizing: border-box;
  width: 216px;
  height: 43px;
  background: #463c95;
  border: 2px solid #463c95;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
}


main .header {
  padding: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 130px;
}

main .button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-bg-color);
  max-width: 30%;
  border-radius: var(--default-border-radius);
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: var(--main-text-color);
  font-size: 1.2rem;
  text-align: center;
  white-space: nowrap; /* zodat button text altijd op 1 regel blijft met kleinere schermen */
}
.button {
  width: 192px;
  height: 43px;
  left: 715px;
  top: 776px;
  background: #FFFFFF;
  border: 2px solid #282B2F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.button:hover {
  cursor:pointer;
  background-color: #e0e0e0;
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


#progress-bar {
  width: 673px;
  height: 20px;
  background-color: #D9D9D9;
  border-radius: 30px;
  }

#progress {
  height: 100%;
  background-color: #edeafe;
  border-radius: 30px;
  
  }
</style>
