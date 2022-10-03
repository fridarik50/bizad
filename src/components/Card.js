import "./Card.css";

function Card(props) {
  const data = props.data;
  return (
    <div className="card m-4 shadow">
      <img src={data.imageUrl} className="card-img-top" alt={data.name} />
      <p className="adNumber mt-2 border border-dark border-1 rounded-pill w-25 text-center">{data.id}</p>
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text mt-2">
          {data.description}
        </p>
        <p className="bizPrice">
        <i className="bi bi-cash-coin me-2"></i>
          {data.price}</p><hr/>
        <p className="bizPhone">
        <i className="bi bi-telephone me-2"></i>
          {data.phoneNumber}</p><hr/>
        <p className="bizAddress">
        <i className="bi bi-geo-alt me-1"></i>
          {data.address}</p><hr/>
        <a href="#" className="btn btn-primary">
          View Website
        </a>
      </div>
    </div>
  );
}

export default Card;
