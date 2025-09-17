Cypress.Commands.add('CarrouselPresence', () => {
    cy.get('#slider-carousel')
        .should('be.visible')
})

Cypress.Commands.add('CarrouselFunctionality', (selector) => {
  cy.get(selector).within(() => {
    cy.wait(600) // adjust according to the animation
    cy.get('.item.active').should('have.length', 1)
  })
})


Cypress.Commands.add('AddProductsToCart', () => {
  cy.get('.product-image-wrapper').then($products => {
    // total amount of productsS
    const productCount = $products.length;

    // obtaing two random indexes to add to cartS
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * productCount);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    // add first random product
    cy.wrap($products)
      .eq(randomIndexes[0])
      .trigger('mouseover')
      .find('.add-to-cart')
      .first()
      .click();

    cy.get('.modal-content').should('be.visible').within(() => {
      cy.get('.btn').contains('Continue Shopping').click();
    });

    // add second random product
    cy.wrap($products)
      .eq(randomIndexes[1])
      .trigger('mouseover')
      .find('.add-to-cart')
      .first()
      .click();

    cy.get('.modal-content').should('be.visible').within(() => {
      cy.get('p a').contains('View Cart').click();
    });
  });

  // check cart has 2 products
  cy.url().should('include', '/view_cart');
  cy.get('tbody tr').should('have.length', 2).each($product => {
    cy.wrap($product).find('.cart_price').should('be.visible');
    cy.wrap($product).find('.cart_quantity').should('be.visible');
    cy.wrap($product).find('.cart_total').should('be.visible');
  });
});

Cypress.Commands.add('RemoveProductsFromCart', () => {
  cy.get('.cart_quantity_delete').click({ multiple: true })
  cy.get('tbody tr').should('have.length', 0)
    cy.get('#empty_cart').should('contain.text', 'Cart is empty! Click here to buy products.')
    cy.get('.cart-item').should('have.length', 0);
})