import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import Pattern from '@/components/cardPattern/pattern'
import {IMG_HOST} from "@/constant/index";

import './cardPattern.scss'


export default class Cardpattern extends Component {
  
  componentWillMount(){
    const n = parseInt(this.$router.params.pattern)
    let pFile = ''
    if(n < 10) {
      pFile = `paixing0${n}.png`
    } else {
      pFile = `paixing${n}.png`
    }
    this.pNum = n;
    this.pFile = `${IMG_HOST}/imgs/paixing/${pFile}`
  }
  pNum: number;
  pFile: string;
  
  render () {
    return (
      <View className='cardPattern universial--bg'>
        <Text>牌型编号 {this.pNum}</Text>
        <Pattern></Pattern>
      </View>
    )
  }
}
