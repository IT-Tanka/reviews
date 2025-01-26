<template>
    <div>
        <div v-if="dataLoaded" class="rating">
            <span class="score-rating">{{ rating }}</span>
            <div class="star-rating">
                <Star v-for="(star, index) in stars" :key="index" :rating="star" />
            </div>
            <span class="num-rating">{{ $t('reviews.count', { count: reviews.length }) }}</span>
        </div>
        <div v-else class="star-loading">{{ $t('loading') }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Star from './Star.vue';

type Review = {
    id: string;
    grade: number;
};

const reviews = ref<Review[]>([]);
const rating = ref<number>(0);
const dataLoaded = ref<boolean>(false);

onMounted(async () => {
    try {
        const response = await axios.get('https://67938ba25eae7e5c4d8f0c03.mockapi.io/reviews');
        reviews.value = response.data;
        calculateAverageRating();
    } catch (error) {
        console.error('Error loading data:', error);
    } finally {
        dataLoaded.value = true;
    }
});

const calculateAverageRating = () => {
    if (reviews.value.length > 0) {
        const total = reviews.value.reduce((sum, review) => sum + Math.ceil(Number(review.grade) / 2), 0);
        rating.value = Math.floor((total / reviews.value.length) * 10) / 10;
    }
};


const stars = computed(() => {
    const fullStars = Math.floor(rating.value);
    const halfStar = rating.value - fullStars >= 0.5 ? 1 : 0;

    return [
        ...new Array(fullStars).fill('full'),
        ...new Array(halfStar).fill('half'),
    ];
});
</script>

<style scoped>
.rating {
    display: flex;
    align-items: center;
    gap: 20px;
}

.star-loading,
.rating {
    min-width: 349px;
    min-height: 32px;
    width: 100%;
}

.score-rating {
    line-height: 44px;
    font-weight: 500;
    font-size: xx-large;
}

.star-rating {
    display: flex;
    gap: 6px;
}

.num-rating {
    font-family: Formular Regular, sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #798595;
}

@media (max-width: 1200px) {
    .score-rating {
        line-height: 32px;
        font-size: x-large;
    }
}

@media (max-width: 860px) {

    .star-loading,
    .rating {
        min-width: 231px;
    }

    .rating {
        flex-wrap: wrap;
        gap: 6px;
    }

    .star-rating {
        margin-left: 14px;
    }
}
</style>