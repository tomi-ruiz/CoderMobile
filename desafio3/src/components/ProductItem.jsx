import { StyleSheet, Text , Image} from "react-native";
import Card from "./Card";

const ProductItem = ({product}) => {
  return (
    <>
      <Card style={{marginVertical: 20}}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={{fontSize: 25, fontFamily: "RobotoCondensedRegular", fontWeight: 'bold'}}>${product.price}</Text>
        <Image style={{width: 100, height:100}} source={product.images[0]}></Image>
      </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "RobotoCondesedRegular"
  },
});
