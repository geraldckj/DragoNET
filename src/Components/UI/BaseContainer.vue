// base container is used as a wrapper, in order to wrap elements/components in a card-like structure

<template>
  <div class="cont">
    <slot></slot>
  </div>
</template>

<style scoped>
.cont {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 120rem;
  
}


</style>