# material-components fork for MixMedia

## [Demo + docs](https://mmhk.github.io/material-components/#!/)

## About

* *No jQuery*
* uses [materializecss.com](http://materializecss.com)

## Usage

```js
// 0. Require Vue
import Vue from 'vue'

// 1. Require the module
import VueMaterialComponents from 'vue-material-components'

// 2. Require the Materialize CSS (or import it in your HTML)
import 'vue-material-components/assets/css/materialize.min.css'

// 3. Install the plugin
Vue.use(VueMaterialComponents)
```

```html
<!-- 4. Use it in a template -->
<md-button class="waves-effect waves-light">Hello, world!</md-button>
```

## Change log

* **0.2.0** Plugin now uses the `Vue.use` syntax.

* Vue is now external dependency and must be linked before MaterialComponents

* **0.3.0** md-btn component

* 根据MM的实际使用情况，裁剪了部分功能并。

* 为select 组件增加mobile模式，在mobile端渲染的时候会使用原生select代理模拟select渲染。

* 为select 组件增加自定义 icon slot

* 修复select 组件在dist包下，无法生效option的问题。

* 为select 组件增加一个 `refreshContent` 方法，用于当 slot 内容改变的时候，刷新的dropdown/option 数据。（这个select组件的思路就是不支持动态刷新内容的……） 