import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      // + before value makes from value number
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  nextPage() {
    const currPage = this._data.page;
    return `
    <button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currPage + 1}</span>
    <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
    `;
  }
  prevPage() {
    const currPage = this._data.page;
    return `
    <button data-goto="${
      currPage - 1
    }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>
    `;
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(numPages);
    // console.log(currPage);
    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this.nextPage();
    }
    // Last page
    if (currPage === numPages && numPages > 1) return this.prevPage();

    // Other page
    if (currPage < numPages && currPage > 1) {
      // Featsure to return multiple methods/values ;)
      return [this.prevPage(), this.nextPage()];
    }
    // Page 1 and there are no other pages
    return ``;
  }
}
export default new PaginationView();
