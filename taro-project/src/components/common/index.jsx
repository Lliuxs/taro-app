import { View, Image } from "@tarojs/components";
import "./index.scss";

import Img from "./img/1.png";

export default function Index() {
  return (
    <View className="common">
      <View> Common Style Example</View>
      <Image src={Img}></Image>
    </View>
  );
}
