export const useTransaction = () => {
    const todaysDate = new Date();

    const formatCurrency = (amount) => {
        // Ensure the input is a valid number
        if (isNaN(amount)) return 0;
        if (typeof amount !== 'number') amount = Number(amount);

        // Convert the number to a string and add commas for thousands
        const formattedAmount = amount.toLocaleString('en-US', {
            minimumFractionDigits: 2
        });

        return formattedAmount;
    };

    const formatDate = (date) => {
        const options = {
            year: '2-digit',
            month: 'short',
            day: '2-digit'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const formatTime = (date) => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'UTC'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const convertDateFormat = (dateString) => {
        const inputDate = new Date(dateString);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = inputDate.toLocaleString('en-US', { month: 'short' });
        const year = inputDate.getFullYear().toString().slice(-2);

        return `${day}-${month}-${year}`;
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(date);

        return {
            date: convertDateFormat(formattedDate) === convertDateFormat(formatDate(todaysDate)) ? 'Today' : formattedDate,
            time: formattedTime
        };
    };

    const sumQuantities = (products) => {
        const totalQuantity = products.reduce((accumulator, product) => {
            return accumulator + product.quantity;
        }, 0);

        return totalQuantity;
    };

    const sumAmounts = (paymentHistories) => {
        return paymentHistories.reduce((total, payment) => {
            return total + (typeof payment.amount === 'number' ? payment.amount : 0);
        }, 0);
    };

    return { formatCurrency, formatDateTime, sumQuantities, sumAmounts };
};
