import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
    {
        path: 'public',
        component: PublicComponent,
        children: [
            {
                path: 'welcome',
                loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/welcome',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: 'register',
                loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/public/welcome',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
