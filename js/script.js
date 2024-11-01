const app = Vue.createApp({
    data() {
        return {
            mensaje: '',
            progreso: 0,
            tareas: [
                { nombre: 'Bañarme', completada: true },
                { nombre: 'Almorzar', completada: true },
                { nombre: 'Atender mis Clases', completada: true },
                { nombre: 'Un rato de Hobby', completada: false },
                { nombre: 'Salir a Correr', completada: false }
            ]
        };
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completada).length;
        },
        barraColor() {
            if (this.progreso >= 70) return 'bg-danger';
            if (this.progreso >= 41) return 'bg-warning';
            return 'bg-success';
        }
    },
    methods: {
        incrementar() {
            if (this.progreso < 100) this.progreso += 10;
        },
        decrementar() {
            if (this.progreso > 0) this.progreso -= 10;
        },
        toggleTarea(index) {
            this.tareas[index].completada = !this.tareas[index].completada;
        }
    }
});

app.mount('#app');
