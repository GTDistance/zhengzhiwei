import Taro, {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";

class Mine extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View>
        <Text>这是我的页面</Text>
      </View>
    )
  }
}

export default Mine
