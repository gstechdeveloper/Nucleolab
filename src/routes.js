import HomeView from "@/views/HomeView"
import ExamesView from "@/views/ExamesView.vue"
import ConveniosView from "@/views/ConveniosView.vue"
import SobreView from "@/views/SobreView.vue"
import UnidadesView from "./views/UnidadesView.vue"
import ExamesExamesView from "./views/ExamesExamesView.vue"
import ExameAgendamentos from "./views/ExameAgendamentos.vue"
import ExamesResultados from "./views/ExamesResultados.vue"

const routes= [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/exames",
        name: "exames",
        redirect: "/exames/exames",
        component: ExamesView,
        children: [
            {
                path: "exames",
                name: "exames.exames",
                component: ExamesExamesView
            },
            {
                path: "agendamento",
                name: "exames.agendamento",
                component: ExameAgendamentos
            },
            {
                path: "resultados",
                name: "exames.resultados",
                component: ExamesResultados
            }
        ]
    },
    {
        path: "/convenios",
        name: "convenios",
        component: ConveniosView
    },
    {
        path: "/sobrenos",
        name: "sobrenos",
        component: SobreView
    },
    {
        path: "/unidades",
        name: "unidades",
        component: UnidadesView
    },
    
]

export default routes