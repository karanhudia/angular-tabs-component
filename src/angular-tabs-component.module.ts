// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components imports
import { TabComponent } from './components';

// Containers imports
import { TabsContainer } from './containers';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
      TabComponent,
      TabsContainer
    ],
    exports: [
      TabComponent,
      TabsContainer
    ]
})
export class TabModule { }
