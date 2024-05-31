<template>
  <div>
    <div><strong>Kết quả:</strong></div><br>
    <div class="demo">
      <slot/>
    </div>
  </div>
</template>

<style>
.demo {
  padding: 22px 24px;
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  margin-bottom: 1.2em;
  transition: background-color .5s ease;
}

.dark .demo {
  background-color: var(--vp-code-block-bg)
}

.demo p {
  margin: 0
}

.demo button {
  background-color: var(--vp-code-block-bg);
  transition: background-color .5s;
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: .9em;
  font-weight: 600
}

.demo button + button {
  margin-left: 1em
}

.demo input, .demo textarea, .demo select {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: .2em .6em;
  margin-top: 10px;
  background: transparent;
  transition: background-color .5s
}

.dark .demo select {
  background: var(--vp-code-block-bg)
}

.dark .demo select option {
  background: transparent
}

.demo input:not([type]):focus, .demo textarea:focus, .demo select:focus {
  outline: 1px solid blue
}

.demo select {
  -webkit-appearance: listbox
}

.demo label {
  margin: 0 1em 0 .4em
}

.demo select[multiple] {
  width: 100px
}

.demo h1 {
  margin: 10px 0 0
}
</style>
<script setup lang="ts">
</script>