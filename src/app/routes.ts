import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";







import { APP_ROUTES } from "src/config/routes.config";

import { CustomPreloadingStrategy } from "./Preloading strategies/custom.preloading-strategy";

export const routes: Route[] = [
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'rh', loadComponent: () => import('./optimizationPattern/rh/rh.component').then(m => m.RhComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart/cart.component').then(m => m.CartComponent) },
  {
    path: 'cv',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./cv/cv-routes').then((cvRoutes) => cvRoutes.CV_ROUTES),
  },
  { path: APP_ROUTES.products, loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent) },
  {
    path: APP_ROUTES.todo,
    loadComponent: () => import('./todo/todo/todo.component'),
  },
  {
    path: '',
    loadComponent: () => import('./templates/front/front.component').then(m => m.FrontComponent),
    children: [{ path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) }],
  },
  {
    path: 'admin',
    loadComponent: () => import('./templates/admin/admin.component').then(m => m.AdminComponent),
    children: [{ path: 'color', loadComponent: () => import('./components/color/color.component').then(m => m.ColorComponent) }],
  },
  { path: '**', loadComponent: () => import('./components/nf404/nf404.component').then(m => m.NF404Component) },
];
