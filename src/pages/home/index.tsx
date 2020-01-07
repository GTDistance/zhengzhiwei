import Taro, {Component} from "@tarojs/taro";
import {View, Swiper, SwiperItem, Text, Button} from "@tarojs/components";
import './index.scss'

class Home extends Component {
  config = {
    navigationBarTitleText: '郑天下'
  }

  render() {
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          interval={3000}
          vertical={false}
          indicatorDots={true}
          circular={true}
          autoplay={true}>
          <SwiperItem className='swiper_item_bg1'>
            <View>
              <Text>1</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='swiper_item_bg2'>
            <View>
              <Text>2</Text>
            </View>
          </SwiperItem>
          <SwiperItem className='swiper_item_bg3'>
            <View>
              <Text>3</Text>
            </View>
          </SwiperItem>
        </Swiper>
        <Button onClick={this.btnClick}>按钮</Button>
        <Button onClick={this.authorizeClick} open-type='getUserInfo'>授权</Button>
      </View>
    )
  }

  btnClick = () => {
    console.info('btnClick')
    Taro.switchTab({url: '/pages/mine/index'}).then()
  }
  authorizeClick = () => {
    Taro.authorize({
      scope: 'scope.userInfo',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问

      }
    })
  }
}

export default Home
