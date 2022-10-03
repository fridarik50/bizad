function Status(props) {

    function statusBadgeCSS() {
        switch (props.type) {
            case 'Active' :
                return 'bg-success';
            case 'Disabled' :
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

    return ( 
        <span className={`badge ${statusBadgeCSS()}`}>
            {props.type}
        </span>
     );
}

export default Status;