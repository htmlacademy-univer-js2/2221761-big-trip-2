import TripList from '../view/trip-list.js';
import PreviewPointView from '../view/point.js';
import EditingPointView from '../view/editing-form.js';
import SortingView from '../view/sorting.js';
import { render } from '../render.js';

export default class TripEventsPresenter {
  constructor(tripContainer) {
    this.eventsList = new TripList();
    this.tripContainer = tripContainer;
  }

  init(pointsModel) {
    this.pointsModel = pointsModel;
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditingPointView(this.boardPoints[0], this.destinations, this.offers), this.eventsList.getElement());

    for (const point of this.boardPoints){
      render(new PreviewPointView(point, this.destinations, this.offers), this.eventsList.getElement());
    }
  }
}
