import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdButton from '../../../components/button';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdBadge,
        mdButton,
        mdNavbar,
        mdNavItem,
        mdIcon
    },
    template: require('./navbars.html')
})
export default class ButtonsNavbar {
}