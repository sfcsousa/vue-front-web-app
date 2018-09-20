"use strict";
var daysOpenedDash =  Vue.component('days-opened-dash', {
    data: () => {
        return {
            message: 'meu ovo',
            openedNumber: '15',
            diaSemana: "Segunda Feira",
            dia: "17",
            mes: "Setembro"
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
    
    <div class="col-xs-12 col-lg-3">
        <div class='row'>
            <!-- Chart -->
            <div class="col-md-12">
                <div class="card bg-cyan text-white">
                    <div class="card-body ">
                        <div class="row ">
                            <div class="col-6 m-t-40">
                                <h3>&nbsp;</h3>
                                <div class="display-4">{{openedNumber}}</div>
                                <p class="text-white">OSs em aberto</p>
                            </div>
                            <div class="col-6 text-right">
                                <h1 class="m-b-"><i class="mdi mdi-calendar"></i></h1>
                                <b class="text-white">{{diaSemana}}</b>
                                <p class="op-7 text-white">{{dia}} {{mes}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
});