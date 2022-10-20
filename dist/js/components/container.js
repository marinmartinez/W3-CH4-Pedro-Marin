import { Component } from './component.js';
export class Container extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
        <div class="container"></div>
        `;
    }
}
