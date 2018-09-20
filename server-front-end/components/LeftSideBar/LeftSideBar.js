var LeftSideBar =  Vue.component('leftsidebar', {
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
    
    <ul id="sidebarnav">
    <li class="user-pro"> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
            aria-expanded="false"><img src="static/assets/images/users/1.jpg" alt="user-img"
                class="img-circle"><span class="hide-menu">{{$store.getters.user.name}}</span></a>
        <ul aria-expanded="false" class="collapse">
            <router-link tag="li" to="/profile">
            <a><i class="ti-user"></i> Meu Perfil</a>
            </router-link>
            <router-link tag="li" to="/account">
            <a><i class="ti-settings"></i> Configurar Conta</a>
            </router-link>
            <router-link tag="li" to="/logoff">
            <a><i class="fa fa-power-off"></i> Sair</a>
            </router-link>
        </ul>
    </li>
    <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i
                class="icon-speedometer"></i><span class="hide-menu">Agenda </span></a>
        <ul aria-expanded="false" class="collapse">
            <router-link tag="li" to="/os">
                <a>OS</a>
            </router-link>
            <router-link tag="li" to="/agenda">
                <a>Agenda</a>
            </router-link>
        </ul>
    </li>

    <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i
                class="ti-layout-grid2"></i><span class="hide-menu">Relatórios</span></a>
        <ul aria-expanded="false" class="collapse">
            <router-link tag="li" to="/dashhoras">
                <a>Extrato de Horas</a>
            </router-link>
        </ul>
    </li>
    <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i
                class="ti-layout-grid2"></i><span class="hide-menu">Foo</span></a>
        <ul aria-expanded="false" class="collapse">
                <router-link tag="li" to="/foo">
                    <a>Meu OVO</a>
                </router-link>
                  
        </ul>
    </li>
</ul>
    `
});