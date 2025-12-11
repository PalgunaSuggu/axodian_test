// Page Title: LeCheck
// Page URL: https://www.axodian.com/lecheck
// Local URL: http://localhost:3000/lecheck
import LeCheck from "../../components/LeCheck_Section/LeCheck";
import SEO from "../../components/SEO";

const leCheck = () => {
    return (
        <>
            <SEO
                title="Historical Exchange Rates & Conversion Tool | LeRemitt"
                description="Check historical exchange rates for various currencies and convert amounts using our LeCheck tool. Get insights into past currency values and plan your international payments effectively with LeRemitt."
                url="https://www.axodian.com/lecheck"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="LeCheck"
                keywords="historical exchange rates, currency converter, foreign exchange history, USD to INR, currency trends, LeRemitt, international payments, past rates, forex checker"
            />
            <LeCheck />
        </>
    );
}

export default leCheck
