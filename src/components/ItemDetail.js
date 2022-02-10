const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <h1>ItemDetail</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={item.image} className="card-img-top" alt="image" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">${item.price}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;