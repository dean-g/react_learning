import { paymentPlanData } from "@/app/data/payment-plan.data";
import PaymentCard from "../components/payment-plan/PaymentCard";
import "./style.css";


export default function Example6() {

    return (
        <div className="container">
            {paymentPlanData.map((plan) => 
                <PaymentCard 
                    credits={plan.credits}
                    paymentPlan={plan.paymentPlan}
                    title={plan.title}
                    key={plan.id}
                />
            )}
        </div>
    )
}