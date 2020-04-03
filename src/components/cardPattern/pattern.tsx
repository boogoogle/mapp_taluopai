import Taro, { Component } from '@tarojs/taro'
import { View ,Image} from '@tarojs/components'
import {card} from "@/constant/index";
import './pattern.scss'

interface State {
    cur: number;
}

interface Props {
    // cur: number;
}

export default class Pattern extends Component<Props, State> {
    constructor(){
        super()
        this.state = {
            cur: 0
        }
    }
    handleCardClick(i: number, e: Event){
        e.stopPropagation()
        this.setState({
            cur: this.state.cur + 1
        })
    }
    render () {
        return (
            <View className='com-pt-container p1'>
                {
                    [0,1,2].map(i => {
                        return <Image 
                          key={String(i)} 
                          className={['img-card-back',i===this.state.cur ? 'cur' : '' ]}
                          src={card}
                          onClick={this.handleCardClick.bind(this,i)}
                        ></Image>
                    })
                }     
            </View>
        )
    }
}