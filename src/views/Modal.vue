<template>
    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <button class="close" @click="closeModal">&times;</button>
            <img :src="selectedImage" alt="Gallery Image" />
        </div>
    </div>
</template>


<script>
export default {
    props: ['showModal', 'selectedImage'],
    methods: {
        closeModal() {
            this.$emit('close-modal');
        }
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* Semi-transparent black overlay */
    z-index: 999;
    /* Ensure the modal overlay is above other elements */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {

    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 26px;
    color: #000;
}

/* Style the image inside the modal */
img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
}
</style>
