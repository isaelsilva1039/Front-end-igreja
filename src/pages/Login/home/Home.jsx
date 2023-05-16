import React from 'react';
import SideMenu from '../../../components/Home/SideMenu';
import { BsPersonFill } from 'react-icons/bs';
import { BiBarChartAlt2, BiDollar, BiGridAlt, BiGroup, BiMoney, BiRightArrowAlt, BiUser } from "react-icons/bi";






function Home() {
    const items = [

        {
            label: 'Dashboard',
            icon:  <BiGridAlt /> ,
            route: '/home',
          },
        
        {
          label: 'Financeiro',
          icon:  <BiMoney /> ,
          route: '/item2',
          submenu: [
            {
              label: 'Dizimo',
              icon: <i className="bi bi-gear-fill"></i>,
              route: '/item2/subitem1',
            },
      
            {
                label: 'Despesas',
                icon: <i className="bi bi-star-fill"></i>,
                route: '/item2/subitem2',
              },
          ],
        },
        
        
        {
            label: 'Memobro',
            icon: <BiGroup />,
            route: '/item2',
            submenu: [
              {
                label: 'Novo membro',
                icon: <i className="bi bi-gear-fill"></i>,
                route: '/item2/subitem1',
              },
              {
                label: 'Empresa',
                icon: <i className="bi bi-star-fill"></i>,
                route: '/item2/subitem2',
              },

            ],
          },

          {
            label: 'Relatorios',
            icon: <BiBarChartAlt2 />,
            route: '/item2',
            submenu: [
              {
                label: 'Relatorios dizimos',
                icon: <i className="bi bi-gear-fill"></i>,
                route: '/item2/subitem1',
              },
              {
                label: 'Relatorio despesas ',
                icon: <i className="bi bi-star-fill"></i>,
                route: '/item2/subitem2',
              },
              {
                label: 'Relatorio membros ',
                icon: <i className="bi bi-star-fill"></i>,
                route: '/item2/subitem2',
              },

            ],
          },

          {
            label: 'Usuario',
            icon: <BiUser />,
            route: '/item2',
            submenu: [
              {
                label: 'Novo membro',
                icon: <i className="bi bi-gear-fill"></i>,
                route: '/item2/subitem1',
              },
              {
                label: 'Empresa',
                icon: <i className="bi bi-star-fill"></i>,
                route: '/item2/subitem2',
              },

            ],
          },
        {
            label: 'Logout',
            icon:  <BiRightArrowAlt /> ,
            route: '/',
            submenu: [
                {
                  label: 'Deslogar',
                  icon: <i className="bi bi-star-fill"></i>,
                  route: '/',
                },
            ],
          },
      ];
      
   

  return (
    <div>
       <SideMenu items={items} />
       
    </div>
    
  );
}

export default Home;
