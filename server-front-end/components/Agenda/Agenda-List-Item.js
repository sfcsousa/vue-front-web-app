"use strict";
var agendaListItem =  Vue.component('agenda-list-item', {
    data: () => {
        return {
            message: 'Where are u now that I need ya!',
            projeto: {
                desc : "Sfera Workflow"
            },
            dia: "19"
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
    <li class="media my-4 list-group-item ">
        <div class="media-body">
            <div class="row">
                <div class='col-md-4'>
                    <p>{{dia}}</p> 
                </div>
                <div class='col-md-4'>
                    <p>Dados OS: </p> {{dadosOS}}
                </div>
                <div class='col-md-4'>
                    <p>Status</p>
                </div>
            </div>                    
            <div class="row">
                <div class='col-md-4'>
                    <p>Projeto: </p> {{projeto.desc}}
                </div>
                <div class='col-md-4'>
                    <p>Cliente: </p> {{dadosOS}}
                </div>
                <div class='col-md-4'>
                    <p>A&ccedil;&otilde;es:  </p>
                </div>
            </div>      
        </div>
    </li>
    `
});