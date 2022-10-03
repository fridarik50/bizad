import Status from "./Status";

function ServiceTable(props) {

    function handleRemove(service) {
        props.removeService(service);
    }

    return ( 
        <table className="table table-hover mt-5">
            <thead>
                <tr>
                    <th className="w-25">User Name</th>
                    <th className="w-25">Service Name</th>
                    <th className="w-25">Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.services.map(service =>
                        <tr key={service.idCount} className="bg-light">
                            <td>{service.userName}</td>
                            <td>{service.serviceType}</td>
                            <td>
                                <Status type={service.status} />
                            </td>
                            <td>
                                <button onClick={ () => handleRemove(service)} className="btn btn-default">
                                <i className="bi bi-trash text-primary"></i>
                                </button>
                            </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
     );
}

export default ServiceTable;