import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'',
     component:AdminComponent
    },
    { path:'mfe1',
    loadChildren:()=>import('remoteappone/homeModule').then((module)=>module.homeModule),
   },
   { path:'mfe2',
   loadChildren:()=>import('remoteapptwo/homeModule').then((module)=>module.homeModule),
  },
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{}