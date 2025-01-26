<template>
    <teleport to="body">
        <div class="modal-overlay" @click.self="close">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header"></slot>
                </header>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <footer class="modal-footer">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 300px;
    max-width: 500px;
}

.modal-header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.modal-body {
    margin-bottom: 20px;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
}
</style>