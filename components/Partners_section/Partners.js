import React from 'react'
import PartnerBanner from './PartnerBanner/PartnerBanner'
import PartnersBenefits from './PartnersBenefits/PartnersBenefits'
import WhoShouldPartner from './WhoShouldPartner/WhoShouldPartner'
import PartnerForm from '../Reusable_section/ScheduleForm/PartnerForm'
import PartnersCta from './partnersCta'

const Partners = () => {
  return (
    <div>
        <PartnerBanner />
        <PartnersBenefits />
        <WhoShouldPartner />
        <PartnerForm />
        <PartnersCta />
    </div>
  )   
}

export default Partners