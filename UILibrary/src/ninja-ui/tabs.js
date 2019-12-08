
import './styles/tabs.css'

class Tabs {
    constructor(conatiner) {
        this.conatiner = conatiner;
        this.tabs = conatiner.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e) {
        // remove the cureent active class
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active class from content
        this.conatiner.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        console.log('data-target', selector);
        const content = this.conatiner.querySelector(selector);
        content.classList.add('active');
    }
}

export {Tabs as default};