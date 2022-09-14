class SearchView {
  _parenEl = document.querySelector('.search');
  getQuery() {
    const query = this._parenEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    return (this._parenEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    this._parenEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

//Export just instance of the Calss
export default new SearchView();
