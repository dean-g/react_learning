import { IPaymentCards } from "@/app/models/payment-card.interface";

export default function PaymentCard({
    title,
    paymentPlan,
    credits,
}: IPaymentCards) {
    
    let paymentClass: string = "card";
    let paymentPanJsx;
    if(paymentPlan === 'visitor') {
        paymentClass += " visitor"
        paymentPanJsx = (
            <>
                <p className="plan">Visitor Plan</p>
                <p className="message">Upgrade to unlock features</p>
            </>
        )
    } else if(paymentPlan === 'pro') {
        const useCreditJsx = credits > 0 ? (<button className="use-btn">Use Credit</button>): null;
        const lowCredits = credits < 5 ? (<p className="credits warning">Low credits</p>): null;
        const moreCreditsJsx = credits > 4 ? (
            <p className="credits">
                    {credits} remaining
                </p>
        ): null;

        paymentClass += " pro"
        paymentPanJsx = (
            <>
                <p className="plan">Pro Plan</p>
                {moreCreditsJsx}
                {lowCredits}
                {useCreditJsx}
            </>
        )
    } else if(paymentPlan === 'enterprise') {
        paymentClass += " enterprise"
        paymentPanJsx = (
            <>
                <p className="plan">Enterprise Plan</p>
                <p className="credits">Unlimited Access</p>
                <button className="manage-btn">Manage Team</button>
            </>
        )
    }
    return (
        <>
        <div className={paymentClass}>
            <h2>{title}</h2>
            {paymentPanJsx}
        </div>
        </>
    )
}