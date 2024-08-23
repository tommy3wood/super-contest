<template>
    <div class="surface-card shadow-2 border-round select-none mx-auto mt-5 w-auto lg:w-6">
        <ul class="list-none p-2 m-0">
            <li>
                <div class="flex align-items-center p-3 border-round">
                    <span class="font-medium text-700">Select a Page</span>
                </div>
            </li>
            <li>
                <a v-ripple @click="navigate(1)"
                    class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                    <i class="pi pi-money-bill mr-2 text-700"></i>
                    <span class="font-medium text-700">Pick Central</span>
                </a>
            </li>
            <li>
                <a v-ripple @click="navigate(2)"
                    class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                    <i class="pi pi-table mr-2 text-700"></i>
                    <span class="font-medium text-700">Standings</span>
                </a>
            </li>
            <li>
                <a v-ripple @click="navigate(3)"
                    class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 p-ripple">
                    <i class="pi pi-user mr-2 text-700"></i>
                    <span class="font-medium text-700">My Profile</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const router = useRouter()

const navigate = (page) => {
    if (page === 1) router.push('/pick-central')
    if (page === 2) router.push('/standings')
    if (page === 3) router.push('/profile')
} 
</script>

<style scoped>
.card {
    margin: 5rem auto
}

@media (max-width: 900px) {
    .card {
        margin: 5rem 1rem;
    }

}
</style>