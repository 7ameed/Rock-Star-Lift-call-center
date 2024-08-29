import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from 'reactstrap'


function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "MONDAY CRM SETUP-ONE TIME",
      price: 200,
      quantity: 1
    },
    {
      id: 2,
      name: "PREDECTIVE DIALER UNLIMIT ",
      price: 125,
      quantity: 1
    },
    {
      id: 3,
      name: "LIST SKIPTRACED 10K RECORD",
      price: 400,
      quantity: 1
    },
    {
      id: 4,
      name: "REAL Estate COLD CALLERS",
      price: 792,
      quantity: 1
    },
  ];

  return (
    <div >
        <Container >
            <Row>
            {products.map((p) => (
        <Col md="3" key={p.id} className="text-center mb-10 productsselected" >
            <h2>{p.name}</h2>
            <h3>{p.price}$</h3>
          <button class="button-33"  onClick={() => addItem(p)}>Add to costs</button>

        </Col>
      ))}

            </Row>
        </Container>
     
    </div>
  );
}

function Cart() {
  const {
    cartTotal,
    emptyCart,
    totalItems,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p className="text-center mt-5 mb-5 ">Your cart is empty</p>;

  return ( 
    
    <div >
      <h1 className="text-center mt-2 mb-2 " > Total ({totalUniqueItems})</h1>
      <button className="btn btn-danger" id="btn-5" onClick={() =>emptyCart()} >DeleteAllItems</button>
        <Container>
          <Row>
              <Col md="12">
              <table className="table table-dark  text-center" >
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Operation</th>
        </thead>
          <tbody>
          {items.map( (item) => (
            <tr key={item.id}>
              <td> {item.quantity} x {item.name} </td>
              <td> {item.quantity}  </td>
              <td> {item.price * item.quantity} </td>
              <td>
                  <button className=" btn btn-success"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button className=" btn btn-primary mx-3"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger"  onClick={() => removeItem(item.id)}>&times;</button>
              </td>
              
            </tr>
          ))}
          </tbody>
         
        </table>
        <h3>Total Price Is {cartTotal} $</h3>
              </Col>
          </Row>
        </Container>
        </div>
    
        )
}


function CostCalculator() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}

export default CostCalculator;
