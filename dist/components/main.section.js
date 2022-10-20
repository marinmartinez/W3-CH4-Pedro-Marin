import { Component } from './component.js';
export class SectionList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<section class="series">
                  
                              </section>`;
    }
}
