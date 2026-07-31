export interface IPaymentCards {
    id?: number;
    title: string;
    paymentPlan: "visitor" | "pro" | "enterprise";
    credits: number;
}