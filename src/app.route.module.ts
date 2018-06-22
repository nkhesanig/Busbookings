
import { HomeComponent } from "./app/home/home.component";
import { BookingComponent } from "./app//booking/booking.component";
import { AboutComponent } from "./app/about/about.component";
import { ContactComponent } from "./app/contact/contact.component";
import {ConfirmedComponent} from "./app/confirmed/confirmed.component";

export const AppRoutes =[

      
    {path:'', component:HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'confirmed', component: ConfirmedComponent},
    {path:'home', component: HomeComponent},
    {path: 'contact', component : ContactComponent},
    {path:'booking', component: BookingComponent, children:[
        
       //{path: 'contact', component : ContactComponent}
    ]}


];
