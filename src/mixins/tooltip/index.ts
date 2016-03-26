import tooltip from '../../materialize/tooltip';

export default {
    methods: {
        tooltip: function (event, message, position, delay) {
            var element = event.currentTarget;
            return tooltip(element, message, position, delay)
        }
    }
}