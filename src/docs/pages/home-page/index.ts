import Component from 'vue-class-component';

import components from '../../../components/docs';

@Component({
    components,
    template: require('./home-page.html'),
})
export default class HomePage {
}