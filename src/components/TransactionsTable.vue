<script setup>
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import UtilityIcons from '@/components/icons/Utility.vue';
import { useTransaction } from '@/composables/useTransaction';
import { useStore } from '@/stores/index';

const { sortDirection } = storeToRefs(useStore());
const { deleteExpense } = useStore();

const { formatCurrency, formatDateTime, sumQuantities, sumAmounts } = useTransaction();

defineProps({
    transactions: {
        type: Array,
        required: true
    }
});

const setSortDirection = () => {
    if (sortDirection.value === 'desc') sortDirection.value = 'asc';
    else sortDirection.value = 'desc';
};

const showHideDeleteButton = (id) => {
    const expenseToDelete = document.querySelector(`#transaction${id}`);
    const deleteExpenseButton = document.querySelector(`#delete${id}`);
    if (expenseToDelete.checked) deleteExpenseButton.style.display = 'flex';
    else deleteExpenseButton.style.display = 'none';
};
</script>

<template>
    <table class="transactions__table w-100" aria-label="Transactions table">
        <thead>
            <tr class="d-flex items-center">
                <th>&nbsp;</th>
                <th class="col-charcoalBrown d-flex items-center weight-semiBold cursor-pointer" @click="setSortDirection">
                    Date <UtilityIcons :icon="sortDirection === 'desc' ? 'arrow-down' : 'arrow-up'" />
                </th>
                <th class="col-charcoalBrown weight-semiBold w-100">Customer Name</th>
                <th class="col-charcoalBrown weight-semiBold">Amount</th>
                <th class="col-charcoalBrown weight-semiBold">Payment Method</th>
                <th class="col-charcoalBrown weight-semiBold">Products</th>
                <th class="col-charcoalBrown weight-semiBold">Quantity</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="transaction in transactions" :key="transaction.date">
                <tr class="d-flex items-center bg-paleLavenderWhite">
                    <td></td>
                    <td class="weight-semiBold">{{ transaction.date }}</td>
                    <td class="weight-semiBold">₦{{ formatCurrency(transaction.totalIncome) }}</td>
                </tr>
                <template v-for="singleTransaction in transaction.transactions" :key="singleTransaction.id">
                    <tr class="d-flex items-center position-relative">
                        <td>
                            <input
                                type="checkbox"
                                :name="`transaction${singleTransaction.id}`"
                                :id="`transaction${singleTransaction.id}`"
                                :value="singleTransaction.id"
                                @click="showHideDeleteButton(singleTransaction.id)"
                            />
                        </td>
                        <td class="d-flex direction-column items-start" style="gap: 0.4rem">
                            <span class="text col-slateNavy weight-medium">{{ formatDateTime(singleTransaction.created_on).date }}</span>
                            <span class="sub-text col-charcoalBrown weight-regular">{{ formatDateTime(singleTransaction.created_on).time }}</span>
                        </td>
                        <td class="w-100 d-flex direction-column items-start" style="gap: 0.4rem">
                            <span v-if="singleTransaction.vendor" class="text col-slateNavy weight-medium">{{ singleTransaction.vendor.name }}</span>
                            <template v-else>
                                <span v-if="!!singleTransaction.customer?.name" class="text col-slateNavy weight-medium">{{ singleTransaction.customer.name }}</span>
                                <span v-if="!!singleTransaction.customer?.email" class="sub-text col-charcoalBrown weight-regular">{{ singleTransaction.customer.email }}</span>
                            </template>
                        </td>
                        <td class="weight-medium" :class="singleTransaction.vendor ? 'col-brightRed' : 'col-slateNavy'">
                            <span v-if="singleTransaction.paymentHistories && singleTransaction.paymentHistories.length > 0">
                                ₦{{ formatCurrency(sumAmounts(singleTransaction.paymentHistories)) }} of</span
                            >
                            ₦{{ formatCurrency(singleTransaction.amount_paid) }}
                        </td>
                        <td class="col-slateNavy weight-medium text-transform-capitalize">{{ singleTransaction.payment_method.replace(/_/g, ' ') }}</td>
                        <td class="col-slateNavy weight-medium">
                            <span v-for="(product, index) in singleTransaction.products" :key="product.id"
                                >{{ product.name }}<span v-if="index !== singleTransaction.products.length - 1">, </span>
                            </span>
                        </td>
                        <td class="col-slateNavy weight-medium">
                            <template v-if="singleTransaction.products && singleTransaction.products.length > 0">{{ sumQuantities(singleTransaction.products) }}</template>
                        </td>
                        <button
                            class="delete__expense d-none items-center bg-transparent col-brightRed weight-semiBold position-absolute"
                            :id="`delete${singleTransaction.id}`"
                            @click="deleteExpense(singleTransaction.id)"
                        >
                            <UtilityIcons icon="delete" />
                        </button>
                    </tr>
                    <template v-if="singleTransaction.paymentHistories && singleTransaction.paymentHistories.length > 0">
                        <tr v-for="payment in singleTransaction.paymentHistories" :key="payment.id" class="partial__payment d-flex items-center">
                            <td><span class="point position-relative d-block"></span></td>
                            <td class="d-flex direction-column items-start" style="gap: 0.4rem">
                                <span class="text col-blueGrey weight-medium">{{ formatDateTime(payment.createdAt).date }}</span>
                                <span class="sub-text col-blueGrey weight-regular">{{ formatDateTime(payment.createdAt).time }}</span>
                            </td>
                            <td class="w-100 d-flex direction-column items-start" style="gap: 0.4rem">
                                <span class="badge text bg-paleAmber col-brightOrange weight-medium text-wrap-nowrap">Partial Payment</span>
                            </td>
                            <td class="col-brightOrange weight-medium">₦{{ formatCurrency(payment.amount) }}</td>
                            <td class="col-brightOrange weight-medium text-transform-capitalize">{{ payment.paymentMethod.replace(/_/g, ' ') }}</td>
                            <td class="col-slateNavy weight-medium"></td>
                            <td class="col-slateNavy weight-medium"></td>
                        </tr>
                    </template>
                </template>
            </template>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.delete__expense {
    margin: 1.6rem;
    gap: 0.5rem;
    right: 0;
}

.transactions__table {
    padding: 1.6rem;

    th,
    td {
        @include font-size(1.2rem, normal);
        text-align: left;
        padding: 1.2rem;
        text-wrap: wrap;
        min-height: 4rem;

        &:first-child {
            padding-left: 1.6rem;
            min-width: 5.4rem;
        }

        &:nth-child(2) {
            min-width: 9.9rem;
        }

        &:nth-child(3) {
            gap: 0.4rem;
            min-width: 24.9rem;
        }

        &:nth-child(4) {
            min-width: 16rem;
        }

        &:nth-child(5) {
            min-width: 17.7rem;
        }

        &:nth-child(6) {
            min-width: 21.4rem;
        }

        &:nth-child(7) {
            min-width: 13.5rem;
            padding-right: 1.6rem;
        }

        span {
            .text {
                @include font-size(1.4rem, normal);
            }

            .sub-text {
                @include font-size(1rem, normal);
            }
        }
    }

    th {
        text-wrap: nowrap !important;
    }

    .partial__payment {
        .point {
            @include sizing(1.4rem, 1.4rem);
            background: #bdbbc933;
            border-radius: 50%;

            &::before {
                content: '';
                @include sizing(4.5rem, 0.3rem);
                background: #bdbbc933;
                position: absolute;
                top: -4.4rem;
                left: 50%;
                transform: translateX(-50%);
            }

            &::after {
                content: '';
                @include sizing(0.8rem, 0.8rem);
                background-color: #bdbbc9;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
            }
        }

        .badge {
            border-radius: 0.5rem;
            padding: 0.6rem 1rem;
        }
    }
}
</style>
