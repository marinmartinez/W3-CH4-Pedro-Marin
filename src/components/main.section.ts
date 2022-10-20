import { Component } from './component.js';

export class SectionList extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<section class="series">
                  
                              </section>`;
    }
}
