const MenuPage = (() => {
  //container
  const contentContainer = document.getElementById("content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="hero">
  <h1>Menu</h1>
  <img src="./Images/chef.png" alt="" width="50" height="50" />
  </div>
<div class="menu-container">
  <div class="menu-item">
    <img src="./Images/burger.jpg" alt="" />
    <div class="item-content">
      <h4>Burger: <span>₹80</span></h4>
      <p>
        Buns, patty, tomato, onions, lettuce, and our secret family
        recipe.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./Images/roll.png" alt="" />
    <div class="item-content">
      <h4>Veg Paneer roll: <span>₹100</span></h4>
      <p>Roll filled with paneer, vegetables and cheese.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./Images/pasta.png" alt="" />
    <div class="item-content">
      <h4>Pasta: <span>₹90</span></h4>
      <p>A delicious macaroni pasta.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./Images/sandwich.png" alt="" />
    <div class="item-content">
      <h4>Grilled Cheese Sandwich: <span>₹120</span></h4>
      <p>
        A toasted and grilled cheese sandwich, dipped in our special
        sauce.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./Images/roll.png" alt="" />
    <div class="item-content">
      <h4>Veg Paneer roll: <span>₹100</span></h4>
      <p>Roll filled with paneer, vegetables and cheese.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./Images/french-fries.png" alt="" />
    <div class="item-content">
      <h4>French Fries: <span>₹40</span></h4>
      <p>
        Sometimes you don't want to eat your burger alone, why not add
        some french fries?
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(menu);
})();

export { MenuPage };
