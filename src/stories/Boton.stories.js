import Boton from "../components/Boton";

export default {
    title: "Boton",
    component: Boton
}

// export const BotonMui = () => <Boton text="Hola Mundo" color="primary" />

const Template = args => <Boton {...args} />

export const Principal = Template.bind({});
Principal.args = {
    color: "principal",
    text: "Hola"
}

export const Secundario = Template.bind({});
Secundario.args = {
    color: "secondary",
    text: "Hola Mundo"
}