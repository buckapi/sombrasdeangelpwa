import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) }, 
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'blog', loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule) }, 
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'downloads', loadChildren: () => import('./components/downloads/downloads.module').then(m => m.DownloadsModule) },
  { path: 'capacity', loadChildren: () => import('./components/capacity/capacity.module').then(m => m.CapacityModule) },
  { path: 'client', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
  { path: 'solutions', loadChildren: () => import('./components/solutions/solutions.module').then(m => m.SolutionsModule) },
  { path: 'solutionsdetail', loadChildren: () => import('./components/solutionsdetail/solutionsdetail.module').then(m => m.SolutionsdetailModule) },
  { path: 'industries', loadChildren: () => import('./components/industries/industries.module').then(m => m.IndustriesModule) },
  { path: 'shop', loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule) },
  { path: 'detail', loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
