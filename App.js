import Form from './views/Form'
import List from './views/List'
import { createMaterialTopTabNavigator } from 'react-navigation';



export default createMaterialTopTabNavigator(
  {
    'New Card': { screen: Form },
    Cards: { screen: List },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(108, 209, 165)',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: '#fff',
      },
      indicatorStyle: {
          backgroundColor: 'rgb(108, 209, 165)',
      },
    }
  }
)