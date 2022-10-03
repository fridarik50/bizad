import { useState } from "react";
import Message from "./Message";
import ServiceBar from "./ServiceBar";
import ServiceTable from "./ServiceTable";
import Title from "./Title";

function Services() {

    const [servicesData, setServicesData] = useState([]);

    let idCount = servicesData.length;
    const setID = () => {idCount++;return idCount;};

    function addService(newService) {
        newService.idCount = setID();
        const updated = [...servicesData, newService];
        setServicesData(updated);
    }

    function removeService (service) {
        const updated = servicesData.filter(serviceItem => serviceItem.idCount !== service.idCount);
        setServicesData(updated);
    }


    return ( 
        <>
            <Title mainTxt="Services">
                <h5 className="main-para text-white">
                    Choose services that you would like to <br/>
                    get from BizAd
                </h5>
            </Title>

            <ServiceBar addService={addService} />
            {
                servicesData.length === 0 &&
                <Message />
            }
            <ServiceTable services={servicesData} removeService={removeService} />
        </>
     );
}

export default Services;