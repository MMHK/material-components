import Component from 'vue-class-component';

import docCollectionLinks from './links';
import docCollectionHeader from './header';
import docCollectionSecondaryContent from './secondary-content';
import docAvatarContent from './avatar';

@Component({
    components: {
        docCollectionLinks,
        docCollectionHeader,
        docCollectionSecondaryContent,
        docAvatarContent
    },
    template: require('./collections.html')
})
export default class Badges {
    data() {
        return {
            api: [
                {
                    'name': 'Collection',
                    'api': require('../../components/collection/collection-api.json')
                },
                {
                    'name': 'Collection item',
                    'api': require('../../components/collection-item/collection-item-api.json')
                },
                {
                    'name': 'Collection list',
                    'api': require('../../components/collection-list/collection-list-api.json')
                },
                {
                    'name': 'Collection list item',
                    'api': require('../../components/collection-list-item/collection-list-item-api.json')
                }
            ],
            snippets: {
                collectionLinks: require('./links/links.snippet.html'),
                collectionHeader: require('./header/header.snippet.html'),
                collectionSecondaryContent: require('./secondary-content/secondary-content.snippet.html'),
                collectionAvatar: require('./avatar/avatar.snippet.html')
            },
            src: [
                {
                    name: 'Collection',
                    script: require("!!html!highlightjs?lang=ts!../../components/collection/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/collection/collection.html')
                },
                {
                    name: 'Collection item',
                    script: require("!!html!highlightjs?lang=ts!../../components/collection-item/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/collection-item/collection-item.html')
                },
                {
                    name: 'Collection list',
                    script: require("!!html!highlightjs?lang=ts!../../components/collection-list/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/collection-list/collection-list.html')
                },
                {
                    name: 'Collection list item',
                    script: require("!!html!highlightjs?lang=ts!../../components/collection-list-item/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/collection-list-item/collection-list-item.html')
                }
            ]
        }
    }
}