export type RootStackParamList = {
    StackLogin: undefined;
    StackCadastro: undefined;
    MainDrawer: undefined;
    TabDrawerHome: undefined;
};

export type RootTabParamlist = {
    TabHome: undefined;
    TabRanking: undefined; 
    TabHistorico: undefined;
};

export type RootDrawerParamList = {
    DrawerHome: undefined;
    DrawerPerfil: undefined;
    DrawerConsumoScreen: undefined;
    DrawerIntegrantes: undefined;
};


declare global { 
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList, RootTabParamlist, RootDrawerParamList {}
    }
}
