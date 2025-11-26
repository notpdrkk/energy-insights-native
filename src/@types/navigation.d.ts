export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    HistoricoScreen: undefined;
    RankingScreen: undefined;
    ConsumoScreen: undefined;
    Perfil: undefined;
    Integrantes: undefined;
    Home: undefined;
    Tabs: undefined;
    Drawer: undefined;
}

export type Tablist = {
    Home: undefined;
    Perfil: undefined;
    Consumo: undefined;
    Ranking: undefined; 
}

declare global { 
    namespace ReactNavigation {
        interface RootParamList extends StackList, Tablist {}
    }
}

export type DrawerList = {
    DrawerTabs: undefined;
    DrawerPerfil: undefined;
    DrawerIntegrantes: undefined;
    DrawerConsumoScreen: undefined;
}