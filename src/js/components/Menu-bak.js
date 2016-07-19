import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
          <section class="block-section-menu">
            <div class="container">
              <div class="row">
                <div class="block-section-menu-header">
                  <h2 class="text-center ui-title-menu">Pizza Menu</h2>
                </div>
                <div class="col-sm-12">

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-1.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Kimchi BBQ Chicken</div>
                    <div class="pizza-list-desc">
                      Slow Cooked Pulled Chicken marinated in Bulgogi sauce, Shitake Mushrooms, Shallots on a Garlic base, Garnished with Kimchi, Red & Green Chilli
                    </div>
                    <div class="pizza-list-price">$21.00</div>
                  </div>

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-2.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Peri-Peri</div>
                    <div class="pizza-list-desc">
                      Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce
                    </div>
                    <div class="pizza-list-price">$24.00</div>
                  </div>

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-3.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Moorish Lamb</div>
                    <div class="pizza-list-desc">
                      Slow Cooked Pulled Lamb marinated in Moorish spices, Tomatoes, Capsicum Medley, Garbanzos , topped with a Slice of Lemon & Yoghurt sauce
                    </div>
                    <div class="pizza-list-price">$19.00</div>
                  </div>

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-4.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Meat Deluxe</div>
                    <div class="pizza-list-desc">
                      Chorizo Sausage, Spanish Onions, Roasted Capsicum, Jalapeños & Chilli on a Spicy Tomato Salsa base, served with Fresh Avocado Salsa.
                    </div>
                    <div class="pizza-list-price">$20.00</div>
                  </div>

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-5.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Margherita</div>
                    <div class="pizza-list-desc">
                      Margherita with Authentic Buffalo Mozzarella and Cherry Tomatoes on a Tomato base, garnished with Fresh Basil, served with Cracked Pepper & Sea Salt
                    </div>
                    <div class="pizza-list-price">$23.00</div>
                  </div>

                  <div class="pizza-list-item">
                    <div class="pizza-list-img">
                      <img class="img-responsive center-block" src="assets/images/catalog-6.png" height="200" width="200" alt="Foto" />
                    </div>
                    <div class="pizza-list-header">Vegetarian Supreme</div>
                    <div class="pizza-list-desc">
                      Grilled Eggplant, Marinated Artichokes, Baby Spinach, Roasted Capsicum, Mushrooms, Sundried Tomatoes & Bocconcini on a Tomato base, Pesto Aioli
                    </div>
                    <div class="pizza-list-price">$21.00</div>
                  </div>



                </div>
              </div>
            </div>
          </section>
    );
  }
}
