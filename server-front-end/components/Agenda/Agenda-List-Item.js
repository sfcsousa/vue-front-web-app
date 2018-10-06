"use strict";
var agendaListItem =  Vue.component('agenda-list-item', {
    data: () => {
        return {
            message: 'Where are u now that I need ya!',
            projeto: {
                desc : "Sfera Workflow"
            },
            dadosOS: "Lorem ipsum dolor sit amet, assarhoncus volutpat. Praesent.",
            dia: "19",
            status: "Apontado",
            data: "10/09/2019"
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
    <li class="list-group">
        <div class="card">
            <div class="card-body">
                <div class="col-md-12">
                    <div class="row">
                        <div class='col-xs-6 col-md-3 col-lg-2'>
                            <p class="display-4">{{dia}}</p>                             
                            <small class="form-control-feedback"> Data Conferencia</small>
                            <p class="text-left ">{{data}}</p>   
                        </div>
                        <div class='col-xs-6 col-md-3 col-lg-2'>
                            <small class="form-control-feedback"> Data Digito</small>
                            <p class="text-left ">{{data}}</p>                             
                            <small class="form-control-feedback"> Data Cadastro</small>
                            <p class="text-left ">{{data}}</p>   
                        </div>
                        <div class='col-xs-6 col-md-6 col-lg-4'>                        
                            <small class="form-control-feedback"> Dados da OS</small>
                            <p >{{dadosOS}}</p>                                              
                            <small class="form-control-feedback">Projeto</small>
                            <p>{{projeto.desc}}</p>
                        </div>
                        <div class='col-xs-6 col-md-6 col-lg-1'>                                            
                        </div>
                        <div class='col-xs-6 col-md-6 col-lg-3'>
                            <status-os status="status"></status-os>                                                     
                        </div>
                    </div>                   
                </div>
            </div>
            <div class="card-footer ">
                <div class="text-right ">
                    <a href="javascript:void(0)" class="btn btn-primary">Consultar/Alterar</a>
                    <a href="javascript:void(0)" class="btn btn-info">Apontar</a>
                </div>
            </div>            
        </div>
    </li>
    `
});