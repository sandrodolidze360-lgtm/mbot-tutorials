import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewDetails } from './view-details/view-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'home',
        component: Home
    },
      {
        path: 'view-details/:id',
        component: ViewDetails
    },


];
