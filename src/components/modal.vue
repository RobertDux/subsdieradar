<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            title
          </slot>
          <button
              type="button"
              class="btn-close"
              @click="close"
          >
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body">
          </slot>
        </section>

        <footer class="modal-footer">
          <button
              type="button"
              class="btn-green"
              @click="close"
          >
            Sluit details
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalComponent',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .1s ease;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.041);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.modal {
  background: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 57vh;
  border-radius: 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000000;
  justify-content: space-between;
}


.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.modal-body {
  color: black;
  position: relative;
  padding: 30px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #463c95;
  background: transparent;
  
}

.btn-green {
  color: white;
  background: #463c95;
  border: 1px solid #463c95;
  border-radius: 30px;
  height: 50px;
  width: 50%;
}
</style>