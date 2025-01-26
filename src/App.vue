<template>
  <LanguageSwitcher />
  <div class="container">
    <div class="content">
      <div class="header">
        <img src="/images/google.svg" alt="google logo" />
        <span>{{ $t('header.googleReviews') }}</span>
      </div>

      <StarRating />
    </div>

    <div class="buttons">
      <Button buttonType="primary" @click="openGoogleReviews">
        {{ $t('buttons.view') }}
      </Button>
      <Button buttonType="secondary" @click="showModal = true">
        {{ $t('buttons.write') }}
      </Button>
    </div>
  </div>

  <Modal v-if="showModal" @close="showModal = false">
    <template #header>
      <h2>{{ $t('modal.header') }}</h2>
    </template>
    <template #body>
      <p>{{ $t('modal.body') }}</p>
    </template>
    <template #footer>
      <Button buttonType="secondary" @click="showModal = false">
        {{ $t('modal.close') }}
      </Button>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import StarRating from './components/StarRating.vue';
import Button from './UIComponents/Button.vue';
import Modal from './UIComponents/Modal.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const showModal = ref<boolean>(false);

const openGoogleReviews = () => {
  window.open('https://www.trustpilot.com/review/www.google.com', '_blank');
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1458px;
  width: 100%;
  margin: auto;
  padding: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  box-sizing: border-box;
}

.content {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 60px;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1;
  min-width: 388px;
  width: 100%;
}

.header image {
  width: 40px;
  height: 40px;
}

.buttons {
  display: flex;
  gap: 10px;
}

@media (max-width: 1367px) {
  .container {
    max-width: 1286px;
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 912px;
  }

  .content {
    flex-wrap: wrap;
    gap: 10px;
  }
  .header {
    min-width:fit-content;
  }
}

@media (max-width: 577px) {

  .container,
  .buttons {
    flex-direction: column;
    max-width: 328px;
    width: 100%;
    text-align: center;
  }

  .container,
  .content {
    gap: 20px;
  }

  .content {
    text-align: start;
  }
}
</style>
