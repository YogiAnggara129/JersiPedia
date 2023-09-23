import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils';
import CardAddress from '../../components/small/CardAddress';
import useProfle from '../../hooks/useProfile';
import useListOrder from '../../hooks/useListCart';
import CustomDropdown from '../../components/small/CustomDropdown';
import {SizedBox} from '../../components';
import {CustomButton} from '../../components/small/CustomButton';
import {CartWhiteIc} from '../../assets';

export default function Checkout() {
  const profile = useProfle();
  const orders = useListOrder();
  const order = orders[0];
  const expedition: string[] = [];
  return (
    <View style={styles.pages}>
      <View style={styles.isi}>
        <Text style={styles.textBold}>Apakah Benar Alamat ini ?</Text>
        {profile !== undefined && <CardAddress profile={profile} />}

        <View style={styles.totalHarga}>
          <Text style={styles.textBold}>Total Harga :</Text>
          <Text style={styles.textBold}>
            Rp. {numberWithCommas(String(order.totalHarga))}
          </Text>
        </View>

        <CustomDropdown label="Pilih Ekspedisi" datas={expedition} />
        <SizedBox height={10} />

        <Text style={styles.textBold}>Biaya Ongkir :</Text>

        <View style={styles.ongkir}>
          <Text style={styles.text}>Untuk Berat : {order.berat} kg</Text>
          <Text style={styles.textBold}>Rp. {numberWithCommas('15000')}</Text>
        </View>

        <View style={styles.ongkir}>
          <Text style={styles.text}>Estimasi Waktu</Text>
          <Text style={styles.textBold}>2-3 Hari</Text>
        </View>
      </View>

      <View style={styles.footer}>
        {/* Total Harga  */}
        <View style={styles.totalHarga}>
          <Text style={styles.textBold}>Total Harga :</Text>
          <Text style={styles.textBold}>
            Rp. {numberWithCommas(String(order.totalHarga + 15000))}
          </Text>
        </View>

        {/* Tombol  */}
        <CustomButton
          text="Bayar"
          fontSize={18}
          padding={responsiveHeight(15)}
          icon={<CartWhiteIc />}
          onPress={() => {}}
          //   onPress={() => this.props.navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  isi: {
    paddingHorizontal: 30,
  },
  textBold: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  ongkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30,
  },
});
