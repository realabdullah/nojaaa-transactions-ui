<script setup>
import { defineProps } from 'vue';

defineProps({
    icon: {
        type: String,
        required: true
    }
});
</script>

<template>
    <svg v-if="icon === 'add'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.33334V12.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33334 8H12.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="icon === 'search'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="icon === 'filter'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_39)">
            <path
                d="M9.33333 5.33333C10.0697 5.33333 10.6667 4.73638 10.6667 4C10.6667 3.26362 10.0697 2.66666 9.33333 2.66666C8.59695 2.66666 8 3.26362 8 4C8 4.73638 8.59695 5.33333 9.33333 5.33333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M2.66663 4H7.99996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.6666 4H13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M5.33333 9.33333C6.06971 9.33333 6.66667 8.73638 6.66667 8C6.66667 7.26362 6.06971 6.66666 5.33333 6.66666C4.59695 6.66666 4 7.26362 4 8C4 8.73638 4.59695 9.33333 5.33333 9.33333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M2.66663 8H3.99996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66663 8H13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M11.3333 13.3333C12.0697 13.3333 12.6667 12.7364 12.6667 12C12.6667 11.2636 12.0697 10.6667 11.3333 10.6667C10.597 10.6667 10 11.2636 10 12C10 12.7364 10.597 13.3333 11.3333 13.3333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M2.66663 12H9.99996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6666 12H13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_39">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'arrow-down'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_100)">
            <path d="M8 3.33333V12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.6667 10L8 12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.33331 10L7.99998 12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_100">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'caret-left'" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_171)">
            <path d="M10.5 12L6.5 8L10.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_171">
                <rect width="16" height="16" fill="white" transform="translate(16.5 16) rotate(180)" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'caret-right'" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_187)">
            <path d="M6.5 4L10.5 8L6.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_187">
                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'caret-down'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_249)">
            <path d="M3 6L9 12L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_249">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'calendar'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_150)">
            <path
                d="M13.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V14.25C3 15.0784 3.67157 15.75 4.5 15.75H13.5C14.3284 15.75 15 15.0784 15 14.25V5.25C15 4.42157 14.3284 3.75 13.5 3.75Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M12 2.25V5.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 2.25V5.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 8.25H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 11.25H6V12.75H7.5V11.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_150">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'close'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6.75281L6 18.7528" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 6.75281L18 18.7528" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="icon === 'hamburger'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_924)">
            <path d="M3 4.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 9H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 13.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2_924">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'date'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1201_150)">
            <path
                d="M13.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V14.25C3 15.0784 3.67157 15.75 4.5 15.75H13.5C14.3284 15.75 15 15.0784 15 14.25V5.25C15 4.42157 14.3284 3.75 13.5 3.75Z"
                stroke="#5A5477"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M12 2.25V5.25" stroke="#5A5477" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 2.25V5.25" stroke="#5A5477" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 8.25H15" stroke="#5A5477" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 11.25H6V12.75H7.5V11.25Z" stroke="#5A5477" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1201_150">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'delete'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="delete-outline">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
    </svg>
</template>
