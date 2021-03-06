import Component from 'vue-class-component';

@Component({
    props: {
        label: {
            type: String,
            required: false,
            'default': false
        }
    },
    template: require('./optgroup.html')
})
export default class Optgroup {
}