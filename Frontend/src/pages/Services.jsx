import ForOwners from "../components/Service/ForOwners"
import ForRenters from "../components/Service/ForRenters"
import GetStarted from "../components/Service/GetStarted"
import ServiceHero from "../components/Service/ServiceHero"

function Services(){
    return(
        <>
            <ServiceHero />
            <ForRenters />
            <ForOwners />
            <GetStarted />
        </>
    )
}

export default Services