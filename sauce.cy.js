describe('template spec', () => {
  it('Войти в аккаунт ДНС', () =>{
    const phone = '79120120795';
    const pass = 'NFyz130!';
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.user-profile__wrapper').hover()
    cy.get('.base-ui-button_JKH base-ui-button_medium_uIe base-ui-button_brand_avQ base-ui-button_ico-none_M-8').click()
    cy.get('.block-other-login-methods__password-caption').click()
    cy.get('base-ui-input-row__input base-ui-input-row__input_with-icon=ir-o7b4v').type(`${phone}{enter}`)
    cy.get('base-ui-input-row__input base-ui-input-row__input_with-icon=ir-5vnack').type(`${pass}{enter}`)
    cy.get('.base-ui-button-v2_big base-ui-button-v2_brand base-ui-button-v2_ico-none base-ui-button-v2').click()
  }
  )
  it('Добавление товара в корзину'), () => {
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.catalog-menu__root-item-info catalog-menu__root-item-title').click()
    cy.get('.subcategory__image-content loaded').click()
    cy.get('.subcategory__image-content loaded').click()
    cy.get('.button-ui buy-btn button-ui_passive-done button-ui_brand').click()
  }
  it('Удаление товара из корзины'), () => {
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.buttons__link-price cart-link-counter__price').hover()
    cy.get('.cart-product__delete').click()
  }
  it('Найти товар DEXP '), () => {
    const tovar = '14.1 Ноутбук DEXP Aquilon серый';
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.presearch__input').type(`${tovar}{enter}`)
  }
  it('Оставить отзыв на товаре DEXP '), () => {
    const tovar = '14.1 Ноутбук DEXP Aquilon серый';
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.presearch__input').type(`${tovar}{enter}`)
    cy.get('product-card-tabs__title ui-link ui-link_black').click()
    cy.get('button-ui button-ui_brand ow-header__new-opinion-text-link').click()
    cy.get('characteristic-slider-item__star').click()
    cy.get('characteristic-slider-item__star').click()
    cy.get('characteristic-slider-item__star').click()
    cy.get('characteristic-slider-item__star').click()
    cy.get('characteristic-slider-item__star').click()
    cy.get('send-button__button').click()
  }
  it('Обратиться в техподдержку'), () => {
    const tovar = '14.1 Ноутбук DEXP Aquilon серый';
    cy.visit('https://www.dns-shop.ru/')
    cy.get('.chat-btn_7ku6q chat-btn--animation_HOdXL').click()
    cy.get('.chat-add-message-block-input').type(`${tovar}{enter}`)
  }
})