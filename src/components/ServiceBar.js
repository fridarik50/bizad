import { useState } from "react";

function ServiceBar(props) {

    const [userName, setUserName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [status, setStatus] = useState('Active');

    function handleBtnClick (e) {
        e.preventDefault();

        props.addService({
            userName: userName,
            serviceType: serviceType,
            status: status
        });
    }

    return ( 
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="d-flex">
                        <a className="navbar-brand" href="#"></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                            <form className="d-flex justify-content-evenly align-items-center w-auto">

                                <div className="user-name me-2 w-100">
                                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control w-100 me-2" type="text" placeholder="User Name" aria-label="UserName" />
                                </div>

                                <label className="d-flex justify-content-evenly me-2 w-100 fs-6">Service Name:</label>
                                <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="form-select me-2 h-25 w-auto" aria-label="ServiceType">
                                    <option>Choose your preferred service</option>
                                    <option>Mailing List</option>
                                    <option>WhatsApp Group Notifications</option>
                                    <option>Leave Feedback and Ranking</option>
                                    <option>Notify me about new buisnesses uploaded to BizAd</option>
                                </select>

                                <label className="d-flex justify-content-around me-2 w-100 fs-6">Status:</label>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select me-3 h-25 w-75" aria-label="Default select example">
                                    <option>Active</option>
                                    <option>Disabled</option>
                                </select>


                                <button onClick={ (e) => handleBtnClick(e)} className="btn btn-outline-success h-25 w-100" type="submit">Add Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default ServiceBar;