import TripList from '../view/trip-list.js';
import PointView from '../view/point.js';
import NewFormView from '../view/new-form.js';
import EditingFormView from '../view/editing-form.js';
import SortingView from '../view/sorting.js';
import { render, RenderPosition } from '../render.js';

export default class TripEventsPresenter {
  constructor() {
    this.component = new TripList();
  }

  init (container) {
    this.container = container;

    render(new SortingView(), this.container, RenderPosition.BEFOREEND);
    render(this.component, this.container);
    render(new EditingFormView(), this.component.getElement(), RenderPosition.BEFOREEND);
    render(new NewFormView(), this.component.getElement(), RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.component.getElement(), RenderPosition.BEFOREEND);
    }
  }
}
