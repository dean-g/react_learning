import { IPaymentCards } from "../models/payment-card.interface";

export const paymentPlanData: IPaymentCards[] = [
    {
        id: 1,
        title: "Alice",
        paymentPlan: "visitor",
        planName: "Visitor Plan",
        credits: 0
    },
    {
        id: 2,
        title: "Bob",
        paymentPlan: "pro",
        planName: "Pro Plan",
        credits: 12
    }, {
        id: 3,
        title: "Bob",
        paymentPlan: "pro",
        planName: "Pro Plan",
        credits: 4
    },
    {
        id: 4,
        title: "George",
        paymentPlan: "visitor",
        planName: "Visitor Plan",
        credits: 0
    }, {
        id: 5,
        title: "Charlie",
        paymentPlan: "enterprise",
        planName: "Enterprise Plan",
        credits: 9999
    }, {
        id: 6,
        title: "Bob",
        paymentPlan: "pro",
        planName: "Pro Plan",
        credits: 0
    }
]