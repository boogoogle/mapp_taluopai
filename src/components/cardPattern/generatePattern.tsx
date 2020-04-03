import Taro from '@tarojs/taro'
import {card} from "@/constant/index";
import {Image} from '@tarojs/components'


export function p1(){
    return [0,1,2].map(i => {
        return <Image 
          key={String(i)} 
          className={['img-card-back',i===this.state.cur ? 'cur' : '' ]}
          src={card}
          onClick={this.handleCardClick.bind(this,i)}
        ></Image>
    })
}

export default {}