<template>
    <div class="flex">
        <div class="h-full p-5 bg-gray-100 w-[250px] flex flex-col gap-6">
            <h1 class="title text-xl font-medium">Databoard</h1>
            <ul>
                <li>
                    <router-link to="#">Countries</router-link>
                </li>
            </ul>
        </div>
        <router-view class=" max-h-full max-w-[calc(100%-250px)]"/>
    </div>
</template>