import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Adoption } from './adoption/adoption';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'adoption',
    component: Adoption,
    title: 'Adoption Your Cat',
  },
];
