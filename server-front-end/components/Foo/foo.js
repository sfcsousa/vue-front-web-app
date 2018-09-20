"use strict";
var Foo =  Vue.component('foo', {
    data: () => {
        return {
            message: 'Where are u now that I need ya!',
        }
    },
    computed: {
        url() {
            return this.$store.getters.apiUrl + this.endPoint
        }
    },
    methods: {
        edit(id) {
            this.$router.push({
                path: this.endPoint + 'edit/' + id
            })
        },
        view(id) {
            this.$router.push({
                path: this.endPoint + 'view/' + id
            })
        },
        destroy(props, row, index) {
            const self = this

        }
    },
    components: {

    },
    props: {

    },
    template: `
    
<div class="card">
    <p>{{message}}</p>
</div>
    `
});