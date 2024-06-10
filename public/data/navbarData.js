export const navbarData = [
  {
    id: "menu1",
    menuTitle: "Início",
    path: "/",
  },
  {
    id: "menu2",
    menuTitle: "Sorteio",
    path: "#",
    menuItems: [
      {
        id: "allContest",
        title: "Todos os Sorteios",
        menuItemPath: "/contest",
      },
      {
        id: "contestDetailsOne",
        title: "Detalhes do Sorteio Um",
        menuItemPath: "/contest-details-one",
      },
      {
        id: "contestDetailsTwo",
        title: "Detalhes do Sorteio Dois",
        menuItemPath: "/contest-details-two",
      },
      {
        id: "lotteryDetailsOne",
        title: "Detalhes da Loteria Um",
        menuItemPath: "/lottery-details",
      },
      {
        id: "lotteryDetailsTwo",
        title: "Detalhes da Loteria Dois",
        menuItemPath: "/lottery-details-two",
      },
    ],
  },
  {
    id: "menu3",
    menuTitle: "Vencedores",
    path: "/winner",
  },
  {
    id: "menu4",
    menuTitle: "Páginas",
    path: "#",
    menuItems: [
      {
        id: "userPanel",
        title: "Painel do Usuário",
        menuItemPath: "/user",
      },
      {
        id: "cartPage",
        title: "Página do Carrinho",
        menuItemPath: "/cart",
      },
      {
        id: "checkoutPage",
        title: "Página de Checkout",
        menuItemPath: "/checkout",
      },
      {
        id: "userInfo",
        title: "Informações do Usuário",
        menuItemPath: "/user-info",
      },
      {
        id: "UserLottery",
        title: "Loteria do Usuário",
        menuItemPath: "/user-lottery",
      },
      {
        id: "UserReferral",
        title: "Indicação do Usuário",
        menuItemPath: "/user-referral",
      },
      {
        id: "UserTransaction",
        title: "Transação do Usuário",
        menuItemPath: "/user-transaction",
      },
      {
        id: "page404",
        title: "Página 404",
        menuItemPath: "/404",
      },
    ],
  },
  {
    id: "menu5",
    menuTitle: "Minha conta",
    path: "/user",
  },
];
