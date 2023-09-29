import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
    const searchTerm = ref('');
    const sortDirection = ref('desc');
    const transactions = ref([]);
    const totalTransactions = ref(0);
    const totalTransactionsPages = ref(0);

    const getTransactions = async (page, sort = 'purchase_date') => {
        try {
            const url = `https://dev1.noja.app/api/v1.0/cc/transactions?page=${page}&limit=20&sort=${sort}&sortDirection=${sortDirection.value}&searchTerm=${searchTerm.value}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            });
            const { data, error, message } = await response.json();

            if (error) throw new Error(message);

            transactions.value = data.transactions;
            totalTransactions.value = data.total;
            totalTransactionsPages.value = data.total_pages;
        } catch (error) {
            console.log('error fetching transactions: ', error.message);
        }
    };

    const createExpense = async (expense) => {
        try {
            const url = 'https://dev1.noja.app/api/v1.0/cc/transactions/expense';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                },
                body: JSON.stringify({
                    amount: expense.amount,
                    purchase_date: expense.date,
                    payment_method: expense.paymentMethod,
                    description: expense.description,
                    category_id: 6
                })
            });
            const { data, error, message } = await response.json();

            if (error) throw new Error(message);

            transactions.value = [{ date: new Date(), transactions: [data] }, ...transactions.value];
            totalTransactions.value += 1;
        } catch (error) {
            console.log('error creating expense: ', error.message);
        }
    };

    const deleteExpense = async (id) => {
        try {
            const url = `https://dev1.noja.app/api/v1.0/cc/transactions/expense/${id}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            });
            const { error, message } = await response.json();

            if (error) throw new Error(message);

            const filteredTransactions = transactions.value.filter((transaction) => transaction.id !== id);
            transactions.value = filteredTransactions;
            totalTransactions.value -= 1;
        } catch (error) {
            console.log('error deleting expense: ', error.message);
        }
    };

    watch([sortDirection, searchTerm], () => {
        getTransactions(1);
    });

    return {
        transactions,
        totalTransactions,
        getTransactions,
        sortDirection,
        searchTerm,
        totalTransactionsPages,
        createExpense,
        deleteExpense
    };
});
