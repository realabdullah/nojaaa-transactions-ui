<script setup>
import { ref, reactive, defineEmits } from 'vue';
import BaseModal from '@/components/base/Modal.vue';
import BaseInput from '@/components/base/TextInput.vue';
import BaseSelect from '@/components/base/Select.vue';
import BaseDate from '@/components/base/DatePicker.vue';
import BaseTextArea from '@/components/base/TextArea.vue';
import { useStore } from '@/stores/index';

const emit = defineEmits(['close-modal']);

const { createExpense } = useStore();

const paymentMethods = [
    { value: 'cash', label: 'Cash' },
    { value: 'bank_transfer', label: 'Bank Transfer' },
    { value: 'card', label: 'Card' }
];

const createNewAfterSubmit = ref(false);
const expenseForm = reactive({
    amount: '',
    paymentMethod: '',
    date: '',
    description: ''
});

const isFormValid = () => {
    // Check if the amount is a valid number
    const isValidAmount = !isNaN(Number(expenseForm.amount));

    // Check if other properties are not empty or just white spaces
    const isValidPaymentMethod = expenseForm.paymentMethod.trim() !== '';
    const isValidDate = expenseForm.date.trim() !== '';

    // Return true if all conditions are met
    return isValidAmount && isValidPaymentMethod && isValidDate;
};

const createNewExpense = async () => {
    try {
        if (!isFormValid()) return;
        await createExpense(expenseForm);
        if (createNewAfterSubmit.value) {
            expenseForm.amount = '';
            expenseForm.paymentMethod = '';
            expenseForm.date = '';
            expenseForm.description = '';
        } else {
            emit('close-modal');
        }
    } catch (error) {
        console.log('error here in page => ', error);
    }
};
</script>

<template>
    <BaseModal title="New Expense" @close-modal="$emit('close-modal')">
        <template #body>
            <form class="add__expense-form d-flex direction-column" @submit.prevent="createNewExpense">
                <BaseInput v-model="expenseForm.amount" type="text" name="amount" label="Amount Spent" placeholder="₦ 0.00" disabled required />
                <fieldset class="d-grid">
                    <BaseSelect v-model="expenseForm.paymentMethod" name="payment-method" label="Payment Method" placeholder="Payment Method" :options="paymentMethods" disabled required />
                    <BaseDate label="Date Of Expense" placeholder="23 - 01 - 2022" @update-value="expenseForm.date = $event" />
                </fieldset>
                <BaseTextArea v-model="expenseForm.description" name="description" label="What was this payment for? (optional)" placeholder="e.g new purchase of items" disabled required />
            </form>
        </template>
        <template #footer>
            <div class="modal__footer d-flex items-center content-between bg-paleLavenderWhite">
                <label for="createNew" class="checkbox d-flex items-center text-wrap-nowrap weight-medium col-slateNavy">
                    <input v-model="createNewAfterSubmit" type="checkbox" name="createNew" id="createNew" />
                    Create new after submiting
                </label>
                <button type="submit" class="d-flex items-center content-center bg-bluePurple col-white weight-semiBold" @click="createNewExpense">Save Expense</button>
            </div>
        </template>
    </BaseModal>
</template>

<style lang="scss" scoped>
.add__expense-form {
    gap: 2.4rem;
    padding-bottom: 2.4rem;

    fieldset {
        gap: 2.4rem;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 2.4rem;
        border-bottom: 1px solid $col-paleBlueGrey;
    }
}

.modal__footer {
    padding: 1.6rem 2.4rem;
    gap: 2rem;

    .checkbox {
        @include font-size(1.3rem, normal);
        gap: 0.8rem;
    }

    button {
        @include sizing(3.6rem, 100%);
        max-width: 25.2rem;
        @include font-size(1.3rem, normal);
        padding: 1.6rem;
        border-radius: 0.5rem;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
