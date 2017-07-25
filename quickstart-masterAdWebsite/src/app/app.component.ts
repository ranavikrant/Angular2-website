import { Component, EventEmitter } from '@angular/core';

import { HomeComponent }  from './component/Home/HomeComponent';
import {Navbar }  from './component/Navbar/NavbarComponent';
@Component({
  selector: 'my-app',
  template: `
            <Navbar></Navbar>
           <Home></Home>
            
            `,
 
})
export class AppComponent  {
  
  
    
    
}
