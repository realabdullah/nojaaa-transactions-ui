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
    <svg v-if="icon === 'Dashboard'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 2.75H2.75V9.16667H9.16667V2.75Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.25 2.75H12.8333V9.16667H19.25V2.75Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.25 12.8333H12.8333V19.25H19.25V12.8333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.16667 12.8333H2.75V19.25H9.16667V12.8333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="icon === 'Customers'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_943)">
            <path
                d="M15.5833 19.25V17.4167C15.5833 16.4442 15.197 15.5116 14.5094 14.8239C13.8218 14.1363 12.8891 13.75 11.9167 13.75H4.58334C3.61088 13.75 2.67825 14.1363 1.99061 14.8239C1.30298 15.5116 0.916672 16.4442 0.916672 17.4167V19.25"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.25 10.0833C10.275 10.0833 11.9167 8.44171 11.9167 6.41667C11.9167 4.39162 10.275 2.75 8.25 2.75C6.22495 2.75 4.58333 4.39162 4.58333 6.41667C4.58333 8.44171 6.22495 10.0833 8.25 10.0833Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.0833 19.25V17.4167C21.0827 16.6043 20.8123 15.815 20.3146 15.173C19.8168 14.5309 19.1199 14.0723 18.3333 13.8692"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14.6667 2.86916C15.4554 3.07111 16.1545 3.52981 16.6537 4.17295C17.1529 4.81609 17.4239 5.60709 17.4239 6.42125C17.4239 7.2354 17.1529 8.0264 16.6537 8.66955C16.1545 9.31269 15.4554 9.77139 14.6667 9.97333"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2_943">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'Products'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.125 8.61666L6.875 3.85916" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19.25 14.6667V7.33334C19.2497 7.01184 19.1648 6.69608 19.0039 6.41774C18.843 6.1394 18.6118 5.90826 18.3333 5.74751L11.9167 2.08084C11.638 1.91993 11.3218 1.83522 11 1.83522C10.6782 1.83522 10.362 1.91993 10.0833 2.08084L3.66667 5.74751C3.38824 5.90826 3.15698 6.1394 2.99609 6.41774C2.8352 6.69608 2.75033 7.01184 2.75 7.33334V14.6667C2.75033 14.9882 2.8352 15.3039 2.99609 15.5823C3.15698 15.8606 3.38824 16.0918 3.66667 16.2525L10.0833 19.9192C10.362 20.0801 10.6782 20.1648 11 20.1648C11.3218 20.1648 11.638 20.0801 11.9167 19.9192L18.3333 16.2525C18.6118 16.0918 18.843 15.8606 19.0039 15.5823C19.1648 15.3039 19.2497 14.9882 19.25 14.6667Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path d="M2.9975 6.38L11 11.0092L19.0025 6.38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11 20.24V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="icon === 'Transactions'" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_957)">
            <path
                d="M12.7273 0.909088H5.45455C4.97234 0.909088 4.50988 1.10065 4.1689 1.44162C3.82793 1.7826 3.63637 2.24506 3.63637 2.72727V17.2727C3.63637 17.7549 3.82793 18.2174 4.1689 18.5584C4.50988 18.8993 4.97234 19.0909 5.45455 19.0909H16.3636C16.8459 19.0909 17.3083 18.8993 17.6493 18.5584C17.9903 18.2174 18.1818 17.7549 18.1818 17.2727V6.36363L12.7273 0.909088Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M12.7273 0.909088V6.36363H18.1818" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.18182 12.7273H13.6364" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2_957">
                <rect width="21.8182" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'Discounts'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_963)">
            <path d="M8.25 13.75L13.75 8.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M8.70833 9.16667C8.96146 9.16667 9.16667 8.96146 9.16667 8.70833C9.16667 8.4552 8.96146 8.25 8.70833 8.25C8.4552 8.25 8.25 8.4552 8.25 8.70833C8.25 8.96146 8.4552 9.16667 8.70833 9.16667Z"
                fill="black"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13.2917 13.75C13.5448 13.75 13.75 13.5448 13.75 13.2917C13.75 13.0385 13.5448 12.8333 13.2917 12.8333C13.0385 12.8333 12.8333 13.0385 12.8333 13.2917C12.8333 13.5448 13.0385 13.75 13.2917 13.75Z"
                fill="black"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4.58333 6.6C4.58333 6.06514 4.7958 5.5522 5.174 5.174C5.5522 4.7958 6.06514 4.58333 6.6 4.58333H7.51666C8.04915 4.58302 8.55991 4.37213 8.9375 3.99666L9.57916 3.355C9.76657 3.16653 9.98939 3.01697 10.2348 2.91491C10.4802 2.81285 10.7434 2.76031 11.0092 2.76031C11.2749 2.76031 11.5381 2.81285 11.7835 2.91491C12.0289 3.01697 12.2518 3.16653 12.4392 3.355L13.0808 3.99666C13.4584 4.37213 13.9692 4.58302 14.5017 4.58333H15.4183C15.9532 4.58333 16.4661 4.7958 16.8443 5.174C17.2225 5.5522 17.435 6.06514 17.435 6.6V7.51666C17.4353 8.04915 17.6462 8.55991 18.0217 8.9375L18.6633 9.57916C18.8518 9.76657 19.0014 9.98939 19.1034 10.2348C19.2055 10.4802 19.258 10.7434 19.258 11.0092C19.258 11.2749 19.2055 11.5381 19.1034 11.7835C19.0014 12.0289 18.8518 12.2518 18.6633 12.4392L18.0217 13.0808C17.6462 13.4584 17.4353 13.9692 17.435 14.5017V15.4183C17.435 15.9532 17.2225 16.4661 16.8443 16.8443C16.4661 17.2225 15.9532 17.435 15.4183 17.435H14.5017C13.9692 17.4353 13.4584 17.6462 13.0808 18.0217L12.4392 18.6633C12.2518 18.8518 12.0289 19.0014 11.7835 19.1034C11.5381 19.2055 11.2749 19.258 11.0092 19.258C10.7434 19.258 10.4802 19.2055 10.2348 19.1034C9.98939 19.0014 9.76657 18.8518 9.57916 18.6633L8.9375 18.0217C8.55991 17.6462 8.04915 17.4353 7.51666 17.435H6.6C6.06514 17.435 5.5522 17.2225 5.174 16.8443C4.7958 16.4661 4.58333 15.9532 4.58333 15.4183V14.5017C4.58302 13.9692 4.37213 13.4584 3.99666 13.0808L3.355 12.4392C3.16653 12.2518 3.01697 12.0289 2.91491 11.7835C2.81285 11.5381 2.76031 11.2749 2.76031 11.0092C2.76031 10.7434 2.81285 10.4802 2.91491 10.2348C3.01697 9.98939 3.16653 9.76657 3.355 9.57916L3.99666 8.9375C4.37213 8.55991 4.58302 8.04915 4.58333 7.51666V6.6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2_963">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'Customers Groups'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_971)">
            <path
                d="M15.5833 19.25V17.4167C15.5833 16.4442 15.197 15.5116 14.5094 14.8239C13.8218 14.1363 12.8891 13.75 11.9167 13.75H4.58334C3.61088 13.75 2.67825 14.1363 1.99061 14.8239C1.30298 15.5116 0.916672 16.4442 0.916672 17.4167V19.25"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.25 10.0833C10.275 10.0833 11.9167 8.44171 11.9167 6.41667C11.9167 4.39162 10.275 2.75 8.25 2.75C6.22495 2.75 4.58333 4.39162 4.58333 6.41667C4.58333 8.44171 6.22495 10.0833 8.25 10.0833Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.0833 19.25V17.4167C21.0827 16.6043 20.8123 15.815 20.3146 15.173C19.8168 14.5309 19.1199 14.0723 18.3333 13.8692"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14.6667 2.86917C15.4554 3.07111 16.1545 3.52981 16.6537 4.17296C17.1529 4.8161 17.4239 5.6071 17.4239 6.42125C17.4239 7.23541 17.1529 8.02641 16.6537 8.66955C16.1545 9.31269 15.4554 9.77139 14.6667 9.97334"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2_971">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'Invoices'" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_978)">
            <path
                d="M12.7273 0.909088H5.45455C4.97234 0.909088 4.50988 1.10065 4.1689 1.44162C3.82793 1.7826 3.63637 2.24506 3.63637 2.72727V17.2727C3.63637 17.7549 3.82793 18.2174 4.1689 18.5584C4.50988 18.8993 4.97234 19.0909 5.45455 19.0909H16.3636C16.8459 19.0909 17.3083 18.8993 17.6493 18.5584C17.9903 18.2174 18.1818 17.7549 18.1818 17.2727V6.36363L12.7273 0.909088Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M12.7273 0.909088V6.36363H18.1818" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.18182 12.7273H13.6364" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2_978">
                <rect width="21.8182" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <svg v-else-if="icon === 'Sales Targets'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_984)">
            <path
                d="M11 11.9167C11.5063 11.9167 11.9167 11.5063 11.9167 11C11.9167 10.4937 11.5063 10.0833 11 10.0833C10.4937 10.0833 10.0833 10.4937 10.0833 11C10.0833 11.5063 10.4937 11.9167 11 11.9167Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11 15.5833C13.5313 15.5833 15.5833 13.5313 15.5833 11C15.5833 8.46868 13.5313 6.41666 11 6.41666C8.4687 6.41666 6.41667 8.46868 6.41667 11C6.41667 13.5313 8.4687 15.5833 11 15.5833Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2_984">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>
</template>
