import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { images } from "../Utils/CoinIcons";

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: "bold"
  },
  redText: {
    color: "red",
    fontWeight: "bold"
  },
  greenText: {
    color: "green",
    fontWeight: "bold"
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 20
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 20,
    paddingBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 2
  },
  subRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
});

const CoinCard = ({
  symbol,
  coin_name,
  price_usd,
  percent_change_24h,
  percent_change_7d
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.subRow}>
          <Image style={styles.image} source={{ uri: images[symbol] }} />
          <Text style={{ marginLeft: 20 }}>
            <Text style={styles.bold}>{symbol}</Text> | {coin_name}
          </Text>
        </View>
        <Text>
          {Math.round(price_usd * 100000) / 100000}
          <Text style={styles.bold}> $</Text>
        </Text>
      </View>
      <View style={styles.secondRow}>
        <Text>
          24h:{" "}
          <Text
            style={percent_change_24h > 0 ? styles.greenText : styles.redText}
          >
            {percent_change_24h} %
          </Text>
        </Text>
        <Text>
          7d:{" "}
          <Text
            style={percent_change_7d > 0 ? styles.greenText : styles.redText}
          >
            {percent_change_7d} %
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CoinCard;
