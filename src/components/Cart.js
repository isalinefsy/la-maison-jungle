function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div>
    <ul id="monPanier">
      <li>Monstera : {monsteraPrice}€</li>
       <li>Lierre : {ivyPrice}€</li>
       <li>Fleurs : {flowerPrice}€</li>
   </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>)
  }

  export default Cart