
import { Button, Card } from "react-bootstrap";


const ManageCart = (props) => {
  const {  _id, name, img, details, price } = props.service;

 
  const handelDelete = id => {
    
   const url = ` http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert('Deleted SuccessFully')
          window.location.reload();

        }
        
        
      
    })
  }

  return (
    <div className=" col-lg-3 col-md-4 col col-sm-12  ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                  <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Card.Text className="d-flex  justify-content-between">
                        <Button variant="" className="btn btn-outline-warning text-success fs-6 fw-bolder" >$ {price}</Button>
                        <Button onClick={ ()=> handelDelete(_id)}  variant="warning"> <i className="fas fa-times"></i> Cancel Order </Button>
                        </Card.Text>
                        
                        
                        
                    </Card.Body>
                 </Card>
    </div>
  );
};

export default ManageCart;
