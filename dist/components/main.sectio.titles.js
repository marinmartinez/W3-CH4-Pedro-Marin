import { Component } from './component.js';
export class SectionTitles extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<section class="series">
                    <h2 class="section-title">Series list</h2>
                    <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have 4 series pending to watch</p>`;
    }
}
