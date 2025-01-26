<template>
    <button :class="['btn', buttonTypeClass]" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    buttonType: {
        type: String,
        default: 'primary',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits();

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};

const buttonTypeClass = computed(() => {
    return {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
    }[props.buttonType] || 'btn-primary';
});
</script>

<style scoped>

.btn {
    padding: 10px 20px;
    font-size: 14px;
    line-height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    border: none;
}

.btn-primary {
    background: linear-gradient(90deg, #E6F7F5 0%, #F8FCFC 100%);
    color: #394155;
    height: 44px;
    width: 132px;
    position: relative;
    z-index: 1;

}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #AACEDB, #BEE2E0);
    z-index: -1;
    border-radius: 8px;
    padding: 1px;
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.btn-primary:hover {
    background: #36A8A0;
    color: #fff;
}

.btn-primary:hover::before {
    background: #36A8A0;
}

.btn-secondary {
    background: #3CB9A0 linear-gradient(90deg, #3CB9A0 0%, #1786AC 100%);
    color: #fff;
    width: 109px;
}

.btn-secondary:hover {
    background: #36A8A0;
}

@media(max-width:577px) {

    .btn {
        width: 100%;
    }
}
</style>