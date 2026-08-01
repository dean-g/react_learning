import { IPaymentCards } from "@/app/models/payment-card.interface";

export default function PaymentCard({
    title,
    paymentPlan,
    planName,
    credits,
}: IPaymentCards) {
    
    return (
        <div className={`card ${paymentPlan}`}>
            <h2>{title}</h2>
            <p className={`plan ${paymentPlan}`}>{planName}</p>
            {paymentPlan === 'visitor' && <p className="message">Upgrade to unlock features</p>}
            {credits > 4 && <p className="credits"> {credits} remaining </p>}
            {credits > 0 && <button className="use-btn">Use Credit</button> }
            {credits < 5 && <p className="credits warning">Low credits</p>}
            {paymentPlan === 'enterprise' && (
                <>
                    <p className="credits">Unlimited Access</p>
                    <button className="manage-btn">Manage Team</button>
                </>
            )}
            
        </div>
    )
}