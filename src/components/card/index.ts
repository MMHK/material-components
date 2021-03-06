import Component from 'vue-class-component';

var Velocity = require('velocity-animate');

@Component({
    props: {
        contentClass: {
            required: false,
            'default': null,
            twoWay: false
        },
        titleInImage: {
            type: Boolean,
            required: false,
            twoWay: false,
            'default': false
        },
        small: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        medium: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        large: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        }
    },
    template: require('./card.html')
})
export default class Card {
    private $el: any;
    private $els: any;
    private _slotContents: any;

    private active: boolean;

    data() {
        return {
            active: false
        }
    }

    compiled() {
        var activators = this.$el.querySelectorAll('.activator');
        Array.prototype.slice.call(activators).forEach((activator) => {
            activator.addEventListener('click', this.open);
        });

        var revealClose = this.$els.revealClose;
        if (revealClose) {
            revealClose.addEventListener('click', this.close);
        }
    }

    open() {
        if (!this.active) {
            this.active = true;
            var reveal: HTMLElement = this.$els.reveal;
            if (reveal) {
                reveal.style.display = 'block';
                Velocity(reveal, "stop", false);
                Velocity(reveal, {translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
            }
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            var reveal: HTMLElement = this.$els.reveal;
            if (reveal) {
                Velocity(reveal,
                    {translateY: 0}, {
                        duration: 225,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: () => {
                            reveal.style.display = 'none';
                        }
                    });
            }
        }
    }

    get imageSlot() {
        return 'image' in this._slotContents;
    }

    get titleSlot() {
        return 'title' in this._slotContents;
    }

    get actionsSlot() {
        return 'actions' in this._slotContents;
    }

    get closeSlot() {
        return 'close' in this._slotContents;
    }

    get revealSlot() {
        return 'reveal' in this._slotContents;
    }
}