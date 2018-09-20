"use strict";
var osAdd =  Vue.component('add_os', {
    data: () => {
        return {
            message: 'meu ovo',
        }
    },
    computed: {
        url() {
            return this.$store.getters.apiUrl + this.endPoint
        }
    },
    methods: {
        destroy(props, row, index) {
            const self = this

        }
    },
    components: {

    },
    props: {

    },
    template: `
    
    <div class="col-lg-9">
    <div class="card">
        <div class="card-header ">
            <div class=" text-right form-actions">
                <button type="submit" class="btn btn-danger"> <i class="fa fa-check"></i>
                    Salvar</button>
                <button type="button" class="btn btn-warning">Cancelar</button>
            </div>
        </div>
        <div class="card-body">

            <h3 class="m-b-1">Incluir OS</h3>
            <form action="#" class="form-material m-t-40">
                <div class="form-body">
                    <div class="row p-t-20">

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">Hora Inicio</label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="hora de inicio">
                                <small class="form-control-feedback"> Hora de Inicio</small>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">Hora Fim</label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="hora de inicio">
                                <small class="form-control-feedback"> Hora de Inicio</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Data</label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="Data">
                                <small class="form-control-feedback"> A data da OS lançada
                                </small>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group ">
                                <label class="control-label">Descrição do atendimento </label>

                                <textarea class="form-control" rows="5"></textarea>
                                <small class="form-control-feedback"> Informe o que foi
                                    realizado
                                    no atendimento</small>
                            </div>
                        </div>

                        <!--/span-->
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Cliente</label>
                                <select class="form-control custom-select">
                                    <option value="">SFERA</option>
                                    <option value="">STARTALL</option>
                                </select>
                                <small class="form-control-feedback"> Informe o Cliente </small>
                            </div>
                            <div class="form-group ">
                                <label class="control-label">Projeto</label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="projeto">
                                <small class="form-control-feedback"> Pesquise o códiogo do
                                    projeto
                                </small>
                            </div>
                        </div>
                        <!--/span-->
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Contato </label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="Contato">
                                <small class="form-control-feedback"> Contato no Cliente</small>
                            </div>
                            <div class="form-group ">
                                <label class="control-label">Modulo </label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="Modulo">
                                <small class="form-control-feedback"> Modulo</small>
                            </div>
                            <div class="form-group ">
                                <label class="control-label">Traslado</label>
                                <input type="text" id="lastName" class="form-control"
                                    placeholder="Traslado">
                                <small class="form-control-feedback"> Traslado
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

    `
});