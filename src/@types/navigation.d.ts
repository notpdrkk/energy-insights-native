export type StackList = {
    Login: undefined;
    Cadastro: undefined;
}

export type Tablist = {
    TabHome: undefined;
    TabPerfil: undefined;
    ConsumoScreen: undefined;
}

declare global { 
    namespace ReactNavigation {
        interface RootParamList extends StackList, Tablist {}
    }
}