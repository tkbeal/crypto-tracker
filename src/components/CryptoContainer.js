import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from "../Actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin, x) => (
      <CoinCard
        key={x}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    ));
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return(
        <View>
          <Spinner 
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation='fade'
          />
        </View>
      )
    }
    else {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.renderCoinCards()}
        </ScrollView>);
    }
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: '2%',
    paddingBottom: '20%'
  }
});

const mapStateToProps = state => {
  return {
    crypto: state.crypto
  };
};

export default connect(
  mapStateToProps,
  { FetchCoinData }
)(CryptoContainer);
