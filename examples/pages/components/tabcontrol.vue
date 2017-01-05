<template>
    <div id="tab-control">
        <navbar>Tab</navbar>

        <div class="content">
            <tab-control :tab-list="tabList" :tab-index.sync="tabIndex">
                <div slot="tab1">
                    tab1 内容云云
                </div>
                <div slot="tab2">
                    tab2 内容云云
                </div>
            </tab-control>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, TabControl } from '../../../src';

    export default {
        components: {
            Navbar,
            TabControl
        },
        data() {
            return {
                tabIndex: 2,
                tabList: [
                    {
                        title: 'Tab1',
                        name: 'tab1'
                    },
                    {
                        title: 'Tab2',
                        name: 'tab2'
                    }
                ]
            }
        }
    }
</script>