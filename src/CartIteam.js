function CartIteam({cartIteam,removeFromCart}){
    return (<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{cartIteam.title}</div>
      {cartIteam.price}
    </div>
    <button onClick={()=>removeFromCart(cartIteam)} class="badge bg-primary rounded-pill">X</button>
  </li>
    );
}
export default CartIteam;
