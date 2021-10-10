import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
    {
        path: 'private',
        component: PrivateComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'help',
                loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
            },
            {
                path: 'chat/:chat',
                loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
            },
            {
                path: '',
                redirectTo: '/private/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/private/home',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
