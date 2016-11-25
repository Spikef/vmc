<template>
    <gridbar class="demo-list-form">
        <p>Form</p>
        <gridbar-item @on-item-click="jump">
            address
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            calendar
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            cell
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            checklist
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            checker
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            color-picker
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            datetime
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            inline-calendar
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            radio
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            range
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            rater
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            selector
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            switch
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            x-button
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            x-input
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            x-textarea
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            x-number
        </gridbar-item>
    </gridbar>
</template>

<script type="text/ecmascript-6">
    import Gridbar from './base/gridbar.vue';
    import GridbarItem from './base/gridbar-item.vue';

    export default {
        components: {
            Gridbar,
            GridbarItem
        },
        props: {
            setindex: {
                type: Number,
                default:0
            }
        },
        methods: {
            jump(index) {
                var name, url

                switch (index) {
                    case 0:
                        name = 'address';
                        break;
                    case 1:
                        name = 'calendar';
                        break;
                    case 2:
                        name = 'cell';
                        break;
                    case 3:
                        name = 'checklist';
                        break;
                    case 4:
                        name = 'checker';
                        break;
                    case 5:
                        name = 'color-picker';
                        break;
                    case 6:
                        name = 'datetime';
                        break;
                    case 7:
                        name = 'inline-calendar';
                        break;
                    case 8:
                        name = 'radio';
                        break;
                    case 9:
                        name = 'range';
                        break;
                    case 10:
                        name = 'rater';
                        break;
                    case 11:
                        name = 'selector';
                        break;
                    case 12:
                        name = 'switch';
                        break;
                    case 13:
                        name = 'x-button';
                        break;
                    case 14:
                        name = 'x-input';
                        break;
                    case 15:
                        name = 'x-textarea';
                        break;
                    case 16:
                        name = 'x-number';
                        break;
                }

                if (name) {
                    this.$router.forward({ name });
                } else {
                    window.location.href = url;
                }

            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .demo-list-form{
        background-color:#fff;
        p{
            margin:0;
            padding:0;
            height:30px;
            color:green;
            padding-left:10px;
            padding-top:10px;
            background-color:#FBF9FE;
        }
    }
</style>
