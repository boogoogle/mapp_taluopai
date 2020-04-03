import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './daily-tarot.scss'

export default class DailyTarot extends Component {
  componentWillUnmount () { }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '每日塔罗牌占卜'
  }


  /** 随机生成一个牌型 */
  randomCardPattern(){
    let n = Math.ceil(Math.random() * 20)

    Taro.navigateTo({
      url: `/pages/cardPattern/cardPattern?pattern=${n}`
    })
  }

  render () {
    return (
      <View className='daily-tarot'>
        <Text>每日塔罗牌</Text>
        <View className='content'>
          <View>第一步：请根据您要占卜的问题类别选择牌型，根据占卜内容的不同，牌型分为：综合类、爱情类、情感类、友情类。</View>
          <View>第二步：系统会自动为您洗牌，并根据牌型将选好的牌放在相应的位置。</View>
          <View>第三步：请您逐次打开每张牌，系统会根据牌所在的位置显示牌义。</View>
        </View>
        <View className='flex'>
          <AtButton type='primary'>选取牌型</AtButton>
          <AtButton type='primary' onClick={this.randomCardPattern}>随机一个牌型</AtButton>
        </View>
      </View>
    )
  }
}
