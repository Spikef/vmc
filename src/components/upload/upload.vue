<template>
    <div class="vmc-upload">
        <slot>
            <div class="vmc-upload-button">
                <i class="icono-plus"></i>
            </div>
        </slot>
        <input type="file" class="fileInput" :name="name" :accept="accept" :multiple="multiple" @change="_onChange">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            url: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            accept: {
                type: String,
                default: 'image/*'
            },
            body: {
                type: Object,
                default: () => {}
            },
            multiple: Boolean,
            autoReset: Boolean,
            validator: Function
        },
        methods: {
            _onChange() {
                var files = this.$el.querySelector('input[type=file]').files;
                if (!files.length) return;

                this._uploadFile(files);             // 上传文件
            },
            _uploadFile(files) {
                var fd = new FormData();

                for (let name in this.body) {
                    if (!this.body.hasOwnProperty(name)) continue;

                    let value = this.body[name];
                    fd.append(name, value);
                }

                var filename = this.name;
                for (let i=0,len=files.length; i<len; i++) {
                    let file = files[i];

                    if (typeof this.validator === 'function') {
                        var allow = this.validator(file.name, file.type, file.size);
                        if (!allow) return;
                    }

                    fd.append(filename, files[i]);
                }

                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', this._onProgress, false);//监听上传进度
                xhr.addEventListener('load', this._onSuccess, false);
                xhr.addEventListener('error', this._onError, false);
                xhr.open('POST', this.url);
                xhr.send(fd);
            },
            _onProgress(e) {
                if (e.lengthComputable) {
                    var percentCompleted = Math.round(e.loaded * 100 / e.total);
                    percentCompleted = percentCompleted.toString() + '%';

                    this.$emit('on-progress', percentCompleted);
                }
            },
            _onSuccess(e) {
                var res = e.target.responseText;
                try {
                    res = JSON.parse(res)
                } catch (e) {}

                if (this.autoReset) {
                    this._clearInputFile();
                }

                this.$emit('on-success', res, e);
            },
            _onError(e) {
                this.$emit('on-error', e);
            },
            _clearInputFile() {
                var fileInput = this.$el.querySelector('input[type=file]');
                if (fileInput.value) {
                    try {
                        fileInput.value = '';
                    } catch (e) {}

                    // for old browsers, like <IE11...
                    if (fileInput.value) {
                        var form = document.createElement('form'),
                            brother = fileInput.nextSibling,
                            parent = fileInput.parentNode;

                        form.appendChild(fileInput);
                        form.reset();
                        parent.insertBefore(fileInput, brother);
                    }
                }
            }
        }
    }
</script>

// TODO: Support old android, compress, rotateImage, preview
// http://stackoverflow.com/questions/15639070/empty-files-uploaded-in-android-native-browser/28809955#28809955