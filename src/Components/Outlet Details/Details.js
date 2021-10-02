import ContactCard from "./Cards/ContactCard"
import LocationCard from "./Cards/LocationCard"
import TimingsCard from "./Cards/TimingsCard"

function Details(){
    return (
        <div className="details">
            <TimingsCard />
            <LocationCard />
            <ContactCard />
        </div>
    )
}

export default Details