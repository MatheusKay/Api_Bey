const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    data: {
        bank: {
            revenueBalance: { type: Number, default: 0 },
            expectedBalance: { type: Number, default: 0 },
            creditBalance: { type: Number, default: 0 },
        },
        expenses: {
            outstandingExpenses: { type: Number, default: 0 },
            paidExpenses: { type: Number, default: 0 },
        },
        planningTable: {
            type: [
                {
                    category: { type: String, default: '' },
                    plannedGoal: { type: Number, default: 0 },
                    paidExpenses: { type: Number, default: 0 },
                    expectedExpenses: { type: Number, default: 0 },
                    totalSpent: { type: Number, default: 0 },
                },
            ],
            default: [],
        },
        objectives: {
            type: [
                {
                    category: { type: String, default: '' },
                    name: { type: String, default: '' },
                    endDate: { type: String, default: '' },
                    currentValue: { type: Number, default: 0 },
                    finalValue: { type: Number, default: 0 },
                    stopObjective: { type: Boolean, default: false },
                    completeObjective: { type: Boolean, default: false },
                },
            ],
            default: [],
        },
    },
})

module.exports = User