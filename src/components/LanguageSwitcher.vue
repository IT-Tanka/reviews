<template>
    <div class="language-switcher">
        <label for="language-select" class="language-label"><img src="/images/earth.svg" alt=""></label>
        <select id="language-select" v-model="selectedLanguage" @change="changeLanguage" class="language-select">
            <option v-for="(label, key) in languages" :key="key" :value="key">
                {{ label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);


const languages = {
    en: 'English',
    uk: 'Українська',
};


const changeLanguage = () => {
    locale.value = selectedLanguage.value;
};
</script>

<style scoped>
.language-switcher {
    display: flex;
    align-items: center;
    margin-bottom:15px;
}

.language-label {
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0.5rem;
}
.language-label img{
    height: 40px;
    width: 40px;
}
.language-select {
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    min-width: 150px;
    cursor: pointer;
    background-color: #fff;
    font-size: 1rem;
}
</style>
