$(function () {
  const noItemsElem = $('.js-noItems');
  const listElem = $('.js-list');
  const formElem = $('.js-form');
  const toDoTitleElem = $('.js-addHeading');
  const toDoDescrElem = $('.js-addDescription');

  function formSubmitHandler(event) {
    event.preventDefault();

    const toDoTitleElemValue = toDoTitleElem.val();
    const toDoDescrElemValue = toDoDescrElem.val();

    listElem.append(`
      <li class="todo-item js-item">
        <article class="todo-item__content js-itemContent">
          <header class="todo-item__header">
            <h3 class="todo-item__heading">${toDoTitleElemValue}</h3>
            <button type="button" class="todo-item__delete button js-deleteBtn" aria-label="Удалить дело"></button>
            <button type="button" class="todo-item__toggle button js-toggleBtn" aria-label="Свернуть описание"></button>
          </header>
          <p class="todo-item__descr js-itemDescription">${toDoDescrElemValue}</p>
        </article>
      </li>
    `);

    noItemsElem.hide();
    this.reset();
  }

  formElem.on('submit', formSubmitHandler);

  listElem.on('click', '.js-deleteBtn', function () {
    $(this).closest('.js-item').remove();

    if (listElem.children().length === 0) {
      noItemsElem.show();
    }
  });

  listElem.on('click', '.js-toggleBtn', function () {
    const itemContentElem = $('.js-itemContent');
    $(this).parents(itemContentElem).children('.js-itemDescription').slideToggle(200);
    $('.todo-item__toggle').toggleClass('todo-item__toggle_rotate');

    $(this).attr('aria-label') === 'Свернуть описание' ? $(this).attr('aria-label', 'Раскрыть описание') : $(this).attr('aria-label', 'Свернуть описание');
  });
});