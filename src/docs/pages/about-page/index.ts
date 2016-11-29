import Component from 'vue-class-component';

import components from '../../../components/docs';

@Component({
    components,
    template: require('./about-page.html')
})
export default class AboutPage {
}