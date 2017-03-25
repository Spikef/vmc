<template>
    <div id="checkbox">
        <navbar>复选框</navbar>

        <div class="content">
            <card>
                <div name="header">单个复选框</div>
                <div name="content">
                    <checkbox v-model="checked1">同意 <a href="http://www.baidu.com" slot="extra">用户注册协议</a></checkbox>
                </div>
                <div name="footer">
                    <span>选择值:</span>
                    <span> {{ checked1 }} </span>
                </div>
            </card>

            <card>
                <div name="header">单个复选框，默认选中</div>
                <div name="content">
                    <checkbox v-model="checked2">同意用户注册协议</checkbox>
                </div>
                <div name="footer">
                    <span>选择值:</span>
                    <span> {{ checked2 }} </span>
                </div>
            </card>

            <card>
                <div name="header">单个复选框，指定选择结果</div>
                <div name="content">
                    <checkbox v-model="checked3" :value-list="[1, 0]">同意用户注册协议</checkbox>
                </div>
                <div name="footer">
                    <span>选择值:</span>
                    <span> {{ checked3 }} </span>
                </div>
            </card>

            <card>
                <div name="header">复选框列表，显示在一行</div>
                <div name="content">
                    <checkbox v-model="list1" :origin-value="item" v-for="(item, index) in listA" key="index" inline>{{item}}</checkbox>
                </div>
                <div name="footer">
                    <span>选中的项:</span>
                    <span> {{ list1 }} </span>
                </div>
            </card>

            <card>
                <div name="header">复选框列表，最多只允许选择两项</div>
                <div name="content">
                    <checkbox v-model="list2" :origin-value="item" v-for="(item, index) in listB" key="index" max="2">{{item}}</checkbox>
                </div>
                <div name="footer">
                    <span>选中的项:</span>
                    <span> {{ list2 }} </span>
                </div>
            </card>

            <card>
                <div name="header">可禁用的复选框列表</div>
                <div name="content">
                    <checkbox v-model="list3" origin-value="选项A" disabled>选项A</checkbox>
                    <checkbox v-model="list3" origin-value="选项B" disabled>选项B</checkbox>
                    <checkbox v-model="list3" origin-value="选项C">选项C</checkbox>
                    <checkbox v-model="list3" origin-value="选项D">选项D</checkbox>
                </div>
                <div name="footer">
                    <span>选中的项:</span>
                    <span> {{ list3 }} </span>
                </div>
            </card>

            <card>
                <div name="header">支持全选的复选框列表</div>
                <div name="content">
                    <checkbox v-model="list4" :origin-value="item" v-for="(item, index) in listA" key="index">{{item}}</checkbox>
                    <checkbox :checked="true" :child-values="listA" :child-checked="list4" v-sync:child="list4">全选</checkbox>
                </div>
                <div name="footer">
                    <span>选中的项:</span>
                    <span> {{ list4 }} </span>
                </div>
            </card>

            <card>
                <div name="header">支持分组全选的复选框列表</div>
                <div name="content" class="group-box">
                    <checkbox v-model="list7" origin-value="A" :child-values="listA" :child-checked="list5" max="1" v-sync:child="list5">选择分组A</checkbox>
                    <checkbox v-model="list5" :origin-value="item" v-for="(item, index) in listA" key="index" class="box-item">{{item}}</checkbox>

                    <div class="separator"></div>

                    <checkbox v-model="list7" origin-value="B" :child-values="listB" :child-checked="list6" max="1" v-sync:child="list6">选择分组B</checkbox>
                    <checkbox v-model="list6" :origin-value="item" v-for="(item, index) in listB" key="index" class="box-item">{{item}}</checkbox>
                </div>
                <div name="footer">
                    <span>选中的项:</span>
                    <span> {{ list7 }} </span>
                </div>
            </card>

            <card>
                <div name="header">支持多级分组全选的复选框列表</div>
                <div name="content" class="group-box">
                    <checkbox v-model="list10" origin-value="A" :child-values="listA" :child-checked="list8" v-sync:child="list8">选择分组A</checkbox>
                    <checkbox v-model="list8" :origin-value="item" v-for="(item, index) in listA" key="index" class="box-item">{{item}}</checkbox>

                    <div class="separator"></div>

                    <checkbox v-model="list10" origin-value="B" :child-values="listB" :child-checked="list9" v-sync:child="list9">选择分组B</checkbox>
                    <checkbox v-model="list9" :origin-value="item" v-for="(item, index) in listB" key="index" class="box-item">{{item}}</checkbox>
                </div>
                <div name="footer">
                    <span>
                        <checkbox :child-values="listC" :child-checked="list10" class="inline-block" v-sync:child="list10">全选</checkbox>
                    </span>
                </div>
            </card>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Checkbox, Card } from 'vmc';

    export default {
        components: {
            Navbar,
            Checkbox,
            Card
        },
        data() {
            return {
                listA: ['选项A', '选项B', '选项C'],
                listB: ['选项1', '选项2', '选项3', '选项4'],
                listC: ['A', 'B'],
                list1: [],
                list2: [],
                list3: ['选项B'],
                list4: [],
                list5: [],
                list6: [],
                list7: ['A'],
                list8: [],
                list9: [],
                list10: [],
                checked1: false,
                checked2: true,
                checked3: 0
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
  #checkbox {
      .content {
          height: 100%;
          box-sizing: border-box;
          overflow: auto;
          background: #eeeeee;

          .group-box {
              .box-item {
                  margin-left: 10px;
              }

              .separator {
                  height: 15px;
              }
          }

          .inline-block {
              display: inline-block;
          }
      }
  }
</style>
