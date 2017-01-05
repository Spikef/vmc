<template>
    <div class="page-spinner">
        <div class="page-title">Spinner</div>
        <spinner color="#b1b1b1" type="blade"></spinner>
        <spinner color="#b1b1b1" type="snake"></spinner>
        <spinner color="#b1b1b1" type="double-bounce"></spinner>
        <spinner color="#b1b1b1" type="triple-bounce"></spinner>
        <spinner color="#b1b1b1" type="fading-circle"></spinner>

        <switch></switch>

        <span class="vmc-red-dot">一些有趣的文字</span>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Spinner, Switch } from '../../src';

    export default {
        components: {
            Spinner,
            Switch
        },
        methods: {
            out(item) {
                console.log(item)
            }
        },
        data() {
            return {
                list: [
                    {
                        name: 'kk',
                        age: 27
                    },
                    {
                        name: 'dd',
                        age: 32
                    }
                ]
            }
        },
        ready() {
            var id = this.$route.query.id;
            if (id == 1) {
                setTimeout(() => {
                    this.list = [
                        {
                            name: 'bbbb',
                            age: 27
                        },
                        {
                            name: 'cccc',
                            age: 32
                        },
                        {
                            name: 'dddd',
                            age: 12
                        }
                    ]
                }, 2000);
            } else {
                setTimeout(() => {
                    this.list = [
                        {
                            name: '王重阳',
                            age: 66
                        }
                    ]
                }, 5000);
            }
        }
    }
</script>