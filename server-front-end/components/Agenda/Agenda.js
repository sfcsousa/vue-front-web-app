"use strict";
var agenda =  Vue.component('agenda', {
    data: () => {
        return {
            message: 'Where are u now that I need ya!',
            projeto: {
                desc : "Sfera Workflow"
            }
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
        <div class="card-header">
            <div class='text-center'>
                <p><< Setembro >> </p>
            </div>
        </div>
        <div class= "card-body">
            <ul class="list-group">
               <agenda-list-item></agenda-list-item>
            </ul>
        </div>
    </div>
    `
});