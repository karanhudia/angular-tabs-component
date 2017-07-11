// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components imports
import { TabComponent } from './components/tabs/tab.component';

// Containers imports
import { TabsContainer } from './containers/tabs-container/tabs.container';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
      TabComponent,
      TabsContainer
    ],
    exports: [
      TabComponent,
      TabsContainer
    ],
    bootstrap: [ TabsContainer ]
})
export class TabModule { }
