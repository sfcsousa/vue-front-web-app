"use strict";
var statusOS =  Vue.component('status-os', {
    data: () => {
        return {
            message: "castan",
        }
    },
    computed: {
        url() {
            return this.$store.getters.apiUrl + this.endPoint
        },
        statusHandler: function(){
            return{
                "bg-cyan" : this.status == "Apontado",
                "bg-danger" : this.status == "rejeitado",
                "bg-info" : this.status == "emaberto",
                "bg-success" : this.status == "aceito",
            }
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
        status
    },
    template: `    
    <div class="box text-center text-white" :class="statusHandler">{{status}}</div>
    `
});


function Status(status){
    this.status = status;
}