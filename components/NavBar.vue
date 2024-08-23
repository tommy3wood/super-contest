<template>
    <div class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static"
        style="min-height: 80px">
        <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div
            class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <div>Super Contest 2024</div>
                </li>
            </ul>
            <ul v-if="route.name != 'index'"
                class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-money-bill mr-2"></i>
                        <span> Pick Central</span>
                    </a>
                </li>
                <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-table mr-2"></i>
                        <span>Standings</span>
                    </a>
                </li>
                <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-user mr-2"></i>
                        <span>My Profile</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
</script>