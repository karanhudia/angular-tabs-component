import { Component, Input, EventEmitter, Output } from '@angular/core';

import { TabComponent } from '../../components/tabs/tab.component';

@Component({
  selector: 'tabs',
  template: `
  	<ul class="tabs__tab-bar">
			<li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tabs__tab" [ngClass]="{'active': tab.active == true}">
				{{ tab.tabTitle }}
			</li>
		</ul>
		<ng-content></ng-content>
  `,
  styles: [`
		:host {
			padding: 10px 10px;
			display: flex;
			height: calc(100vh - 20px);
			flex-direction: column;
		}
		.tabs__tab-bar {
			align-self: center;
			border-radius: 4px;
			overflow: hidden;
			z-index: 1000;
			margin-bottom: -12px;
			border: 1px solid #C9C9C9;
		}
		.tabs__tab {
			padding: 4px 10px;
			display: inline-block;
			background-color: white;
			cursor: pointer;
		}
		.tabs__tab.active {
			background-color: #6FBBFF !important;
			color: white;
		}
  `]
})

export class TabsContainer {
	currentTab: TabComponent;
	@Output() currentTabChange = new EventEmitter<TabComponent>();

	tabs: TabComponent[] = [];

	addTab(tab: TabComponent) {
		if (this.tabs.length === 0) {
			tab.active = true;
			this.currentTabChange.emit(tab);
      	}
		this.tabs.push(tab);
	}
	selectTab(tab: TabComponent) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true
		this.currentTabChange.emit(tab);
	}
}
