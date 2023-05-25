import {render} from './framework/render.js';
import SiteMenuView from './view/site-menu-view.js';
import {generateFilter} from './mock/filter.js';
import FiltersView from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new BoardPresenter();

const pointsModel = new PointsModel();

const filters = generateFilter(pointsModel.points);

render(new FiltersView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenter.init(siteMainElement.querySelector('.trip-events'), pointsModel);
