import Component from 'vue-class-component';

import components from '../../components/docs';
import mixins from '../../mixins';
import directives from '../../directives';

@Component({
    props: {
        src: {
            required: true
        }
    },
    directives,
    components,
    mixins,
    template: require('./doc-sources.html'),
})
export default class DocSources {
    private $broadcast: any;

    private expanded: boolean;
    private src: any;

    data() {
        return {
            expanded: true
        }
    }

    get sources() {
        if (Array.isArray(this.src)) {
            return this.src;
        }

        return [this.src];
    }

    toggle() {
        if (this.expanded) {
            this.close();
        }
        else {
            this.open();
        }
    }

    close() {
        this.$broadcast('collapsible::close');
        this.expanded = false;
    }

    open() {
        this.$broadcast('collapsible::open');
        this.expanded = true;
    }
}