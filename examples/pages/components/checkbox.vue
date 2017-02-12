<template>
    <div id="checkbox">
        <navbar>复选框</navbar>

        <div class="content">
            <card>
                <child name="header">单个复选框</child>
                <child name="content">
                    <checkbox :checked.sync="checked1">同意 <a href="http://www.baidu.com" slot="extra">用户注册协议</a></checkbox>
                </child>
                <child name="footer">
                    <span>选择值:</span>
                    <span> {{ checked1 }} </span>
                </child>
            </card>

            <card>
                <child name="header">单个复选框，默认选中</child>
                <child name="content">
                    <checkbox :checked.sync="checked2">同意用户注册协议</checkbox>
                </child>
                <child name="footer">
                    <span>选择值:</span>
                    <span> {{ checked2 }} </span>
                </child>
            </card>

            <card>
                <child name="header">单个复选框，指定选择结果</child>
                <child name="content">
                    <checkbox :checked.sync="checked3" :values="[1, 0]">同意用户注册协议</checkbox>
                </child>
                <child name="footer">
                    <span>选择值:</span>
                    <span> {{ checked3 }} </span>
                </child>
            </card>

            <card>
                <child name="header">复选框列表，显示在一行</child>
                <child name="content">
                    <checkbox :checked.sync="list1" :value="item" v-for="item in listA" inline>{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list1 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">复选框列表，最多只允许选择两项</child>
                <child name="content">
                    <checkbox :checked.sync="list2" :value="item" v-for="item in listB" max="2">{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list2 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">可禁用的复选框列表</child>
                <child name="content">
                    <checkbox :checked.sync="list3" value="选项A" disabled>选项A</checkbox>
                    <checkbox :checked.sync="list3" value="选项B" disabled>选项B</checkbox>
                    <checkbox :checked.sync="list3" value="选项C">选项C</checkbox>
                    <checkbox :checked.sync="list3" value="选项D">选项D</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list3 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">支持全选的复选框列表</child>
                <child name="content">
                    <checkbox :checked.sync="list4" :value="item" v-for="item in listA">{{item}}</checkbox>
                    <checkbox :checked="true" :child-values="listA" :child-checked.sync="list4">全选</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list4 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">支持分组全选的复选框列表</child>
                <child name="content" class="group-box">
                    <checkbox :checked.sync="list7" value="A" :child-values="listA" :child-checked.sync="list5" max="1">选择分组A</checkbox>
                    <checkbox :checked.sync="list5" :value="item" v-for="item in listA" class="box-item">{{item}}</checkbox>

                    <div class="separator"></div>

                    <checkbox :checked.sync="list7" value="B" :child-values="listB" :child-checked.sync="list6" max="1">选择分组B</checkbox>
                    <checkbox :checked.sync="list6" :value="item" v-for="item in listB" class="box-item">{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list7 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">支持多级分组全选的复选框列表</child>
                <child name="content" class="group-box">
                    <checkbox :checked.sync="list10" value="A" :child-values="listA" :child-checked.sync="list8">选择分组A</checkbox>
                    <checkbox :checked.sync="list8" :value="item" v-for="item in listA" class="box-item">{{item}}</checkbox>

                    <div class="separator"></div>

                    <checkbox :checked.sync="list10" value="B" :child-values="listB" :child-checked.sync="list9">选择分组B</checkbox>
                    <checkbox :checked.sync="list9" :value="item" v-for="item in listB" class="box-item">{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>
                        <checkbox :child-values="listC" :child-checked.sync="list10" class="inline-block">全选</checkbox>
                    </span>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Checkbox, Card } from '../../../src';

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