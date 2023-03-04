import FiltersView from './view/filters.js';
import TripEventsPresenter from './presenter/trip.js';
import { render, RenderPosition } from './render.js';

const filterContainer = document.querySelector('.trip-main');
const tripContaier = document.querySelector('.trip-events');
const tripPresenter = new TripEventsPresenter();

render(new FiltersView(), filterContainer.querySelector('.trip-controls__filters'), RenderPosition.BEFOREEND);

tripPresenter.init(tripContaier);
