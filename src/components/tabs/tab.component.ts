import { Component, Input } from "@angular/core";

import { TabsContainer } from "../../containers/tabs-container/tabs.container";

@Component({
  selector: "tab",
  host: {
    "[class.hidden]": "!active"
  },
  template: `
  	<div class="tabs__panel">
			<ng-content></ng-content>
		</div>
	`,
  styles: [
    `
			:host {
				display: flex;
				height: 100%;
			}
			:host(.hidden) {
				display: none;
			}
			.tabs__panel {
				background-color: #D7D7D7;
				width: 100%;
				box-shadow: inset 0px 0px 0px 1px #c9c9c9;
				border-radius: 6px;
				padding: 30px 15px;
			}
		`
  ]
})
export class TabComponent {
  active: any;
  @Input() tabTitle: string;

  constructor(tabs: TabsContainer) {
    tabs.addTab(this);
  }
}
