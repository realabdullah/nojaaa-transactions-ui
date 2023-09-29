<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TransactionTable from '@/components/TransactionsTable.vue';
import Pagination from '@/components/ThePagination.vue';
import UtilityIcons from '@/components/icons/Utility.vue';
import { useStore } from '@/stores/index';
import CreateExpenseForm from './CreateExpenseForm.vue';

const { transactions, totalTransactions, searchTerm, totalTransactionsPages } = storeToRefs(useStore());
const { getTransactions } = useStore();

const isModalOpen = ref(false);

await getTransactions(1);
</script>

<template>
    <section class="transactions">
        <h2 class="transactions__header weight-semiBold col-slatePurple">Transactions ({{ totalTransactions }})</h2>

        <div class="transactions__body overflow-y-hidden overflow-x-auto bg-white">
            <div class="transactions__body-header d-flex items-center">
                <button class="d-flex items-center bg-paleBlueGrey col-bluePurple weight-medium"><UtilityIcons icon="add" />Add Income</button>
                <button class="d-flex items-center bg-paleCrimsom col-brightRed weight-medium" @click="isModalOpen = true"><UtilityIcons icon="add" />Add Expense</button>
                <button class="d-flex items-center bg-grey col-slateNavy weight-medium">View Debts</button>
                <form class="w-100 position-relative" @submit.prevent>
                    <UtilityIcons class="search col-blueGrey position-absolute" icon="search" />
                    <input v-model="searchTerm" type="search" name="searchTransaction" id="searchTransaction" placeholder="Search transactions" />
                </form>
                <button class="d-flex items-center bg-paleLavenderWhite col-slateNavy weight-medium"><UtilityIcons icon="filter" />Filter</button>
            </div>

            <TransactionTable v-if="transactions.length > 0" :transactions="transactions" />
            <p v-else class="transactions__body-empty weight-semiBold col-slatePurpl">No Transactions!</p>
            <Pagination :total-pages="totalTransactionsPages" @fetch-transactions="getTransactions($event)" />
        </div>
    </section>

    <CreateExpenseForm v-if="isModalOpen" @close-modal="isModalOpen = false" />
</template>

<style lang="scss" scoped>
.transactions {
    &__header {
        @include font-size(1.8rem, normal);
        margin-bottom: 2.4rem;
    }

    &__body {
        border-radius: 0.9rem;

        &-header {
            white-space: nowrap;
            gap: 1.6rem;
            padding: 1.6rem;
            border-bottom: 1px solid #f5f4f9;

            button {
                @include sizing(3.4rem, auto);
                @include font-size(1.3rem, normal);
                padding: 0.9rem 1.6rem;
                gap: 0.8rem;
                border-radius: 5px;

                &.bg-paleBlueGrey {
                    border: 1px solid #6868f74d;
                }

                &.bg-paleCrimsom {
                    border: 1px solid $col-paleCrimsom;
                }

                &.bg-grey {
                    border: 1px solid $col-blueGrey;
                }

                &.bg-paleLavenderWhite {
                    border: 1px solid $col-paleBlueGrey;
                }
            }

            form {
                min-width: 20rem;

                .search {
                    top: 50%;
                    left: 1rem;
                    transform: translateY(-50%);
                }

                input {
                    @include sizing(3.4rem, 100%);
                    @include font-size(1.3rem, normal);
                    padding: 0.9rem 1.6rem;
                    padding-left: 4.2rem;
                    border-radius: 5px;
                    border: 1px solid $col-blueGrey;

                    &:focus {
                        border-color: $col-bluePurple;
                    }
                }
            }
        }

        &-empty {
            text-align: center;
            padding: 4rem;
        }
    }
}
</style>
