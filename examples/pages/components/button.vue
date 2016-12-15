<template>
    <div id="button">
        <navbar>单选框</navbar>

        <div class="content">
            <div class="button-list">
                <v-button type="default">type: default</v-button>
                <v-button type="primary">type: primary</v-button>
                <v-button type="success">type: success</v-button>
                <v-button type="info">type: info</v-button>
                <v-button type="danger">type: danger</v-button>
                <v-button type="warning">type: warning</v-button>
                <v-button :colors="customColors">custom colors</v-button>

                <v-button type="primary" disabled>type: primary but disabled</v-button>

                <v-button type="primary">
                    <i slot="icon-left" class="icono-cart"></i>
                    button with icon
                </v-button>

                <v-button type="primary">
                    <i slot="icon-left" class="icono-cart"></i>
                    button with icon and spinner
                    <span  slot="icon-right">
                        <spinner color="white" size="20"></spinner>
                    </span>
                </v-button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../../src/components/navbar';
    import { vButton } from '../../../src/components/button';
    import Spinner from '../../../src/components/spinner';

    export default {
        components: {
            Navbar,
            vButton,
            Spinner
        },
        data() {
            return {
                customColors: {
                    font: '#ffffff',
                    background: '#605ca8'
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #button {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;

            .button-list {
                padding-top: 10px;

                .vmc-button-v {
                    margin-bottom: 10px;

                    i {
                        transform: scale(0.8);
                    }
                }
            }
        }
    }
</style>