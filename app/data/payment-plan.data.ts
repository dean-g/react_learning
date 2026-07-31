import { IPaymentCards } from "../models/payment-card.interface";

export const paymentPlanData: IPaymentCards[] = [
    {
        id: 1,
        title: "Alice",
        paymentPlan: "visitor",
        credits: 0
    },
    {
        id: 2,
        title: "Bob",
        paymentPlan: "pro",
        credits: 12
    }, {
        id: 3,
        title: "Bob",
        paymentPlan: "pro",
        credits: 4
    },
    {
        id: 4,
        title: "George",
        paymentPlan: "visitor",
        credits: 0
    }, {
        id: 5,
        title: "Charlie",
        paymentPlan: "enterprise",
        credits: 9999
    }, {
        id: 6,
        title: "Bob",
        paymentPlan: "pro",
        credits: 0
    }
]