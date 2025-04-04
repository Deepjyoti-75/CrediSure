import { FeatureCard } from "./FeatureCard"

export function EssentialFeatures() {
    return (
        <div className="flex flex-col items-center bg-black text-white px-4 py-[6rem]">
            <h1 className="font-extrabold text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
                ESSENTIAL FEATURES IN OUR PROJECT
            </h1>

            <div className="relative flex flex-col items-center lg:flex-row justify-around w-[50%] gap-[1.5rem]">
                <FeatureCard title="Data Collection And Analysis" desc="Financial data, Credit History, Market data and Customer Profiling" />
                <FeatureCard title="Credit Scroing Models" desc="Machine learning model, and Score calculation" />
            </div>

            <div className="relative flex flex-col items-center lg:flex-row justify-around w-[50%] gap-[1.5rem]">
                <FeatureCard title="Risk Prediction and Evaluation" desc="Default Probability, Loss Given Default (LGD), Exposure at Default (EAD), and Risk Segmentation" />
                <FeatureCard title="Automated Descision Support" desc="Approval Recommendations, Risk Alerts, and Credit Limits" />
            </div>
        </div>
    )
}