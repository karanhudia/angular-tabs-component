import { Component, Input } from "@angular/core";

import { TabsContainer } from "../../containers";

@Component({
  selector: "tab",
  host: {
    "[class.hidden]": "!active"
  },
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent {
  @Input() active: boolean;
  @Input() tabTitle: string;

  constructor(tabs: TabsContainer) {
    tabs.addTab(this);
  }
  getTabTitle() {
    return this.tabTitle;
  }
}
