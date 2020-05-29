<template>
    <div class="wrap"
         @click="handleEmit('click')"
         :style="computedFixedStyle">
        <slot></slot>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import WeexMixin                    from './../../mixins/weex.mixin'
    import EmitMixin                    from './../../mixins/emit.mixin'

    export default {
        mixins: [
            Mixin,
            EmitMixin,
            WeexMixin
        ],
        props: {
            fixed_style: { default: config.fixed_style },
        },
        computed: {
            computedFixedStyle () {
                let paddingBottom = 0;
                let {
                    isX,
                } = this.weex$;
                if (isX) paddingBottom = 40;
                return Object.assign({}, config.fixed_style, { paddingBottom }, this.fixed_style );
            }
        }
    }
</script>
<style>
    .wrap{
        position: fixed;
        width: 750px;
        left: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
    }
</style>
