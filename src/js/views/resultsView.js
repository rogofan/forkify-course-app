import View from './View';
import previwView from './previwView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recepie found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => previwView.render(results, false))
      .join('');
  }
}
export default new ResultsView();
