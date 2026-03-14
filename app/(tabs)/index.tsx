import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
} from "react-native";

const { width } = Dimensions.get("window");

const COLORS = {
  bg: "#020202", 
  card: "#0d0d0d",
  border: "#1a1a1a",
  turquoise: "#00f5d4", 
  gold: "#FFD700",      
  white: "#FFFFFF",
  textDim: "#555555",
  red: "#ff4757",
  purple: "#7158e2",
};

export default function HomeScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      
      <Animated.View style={[styles.mainWrapper, { opacity: fadeAnim }]}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerText}>KARTU IDENTITAS</Text>
          <View style={styles.headerLine} />
        </View>

        {/* KARTU UTAMA */}
        <View style={styles.card}>
          <View style={styles.neonBar} />

          <View style={styles.body}>
            {/* Foto Profile */}
            <View style={styles.photoContainer}>
              <View style={styles.glowOuter}>
                <View style={styles.photoBorder}>
                  <Image
                    source={require("../../assets/images/profil.jpeg")}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={styles.verifiedBadge}>
                <Text style={styles.badgeStar}>✦</Text>
              </View>
            </View>

            <Text style={styles.uniName}>UNIVERSITAS PRIMA INDONESIA</Text>

            <View style={styles.divider} />

            {/* DATA MAHASISWA */}
            <View style={styles.infoBox}>
              <View style={styles.dataGroup}>
                <Text style={styles.label}>NAMA MAHASISWA</Text>
                <Text style={styles.nameValue}>Crisdayanti Laggita Br Siagian</Text>
              </View>

              <View style={styles.row}>
                <View style={[styles.chip, { borderLeftColor: COLORS.red }]}>
                  <Text style={styles.label}>NIM</Text>
                  <Text style={styles.chipText}>24330362189</Text>
                </View>
                <View style={[styles.chip, { borderLeftColor: COLORS.purple }]}>
                  <Text style={styles.label}>JURUSAN</Text>
                  <Text style={styles.chipText}>Sistem Informasi</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Bagian Quote Dengan Emoji */}
            <View style={styles.quoteArea}>
              <View style={styles.emojiRow}>
                <Text style={styles.emoji}>💡</Text>
                <Text style={styles.emoji}>✨</Text>
              </View>
              <Text style={styles.quoteText}>
                "Tak semua usaha itu dipermudah, tapi semua yang berusaha pasti akan berbuah."
              </Text>
              <Text style={styles.emoji}>🚀</Text>
            </View>

            {/* FOOTER BARS */}
            <View style={styles.footer}>
              <View style={[styles.pulse, { width: 40, backgroundColor: COLORS.turquoise }]} />
              <View style={[styles.pulse, { width: 10, backgroundColor: COLORS.gold }]} />
              <View style={[styles.pulse, { width: 20, backgroundColor: '#222' }]} />
              <View style={[styles.pulse, { width: 5, backgroundColor: COLORS.red }]} />
            </View>
          </View>
        </View>

        {/* Tagline Bawah Terang */}
        <Text style={styles.bottomStatus}>● MAHASISWA AKTIF UNPRI · 2025/2026</Text>

      </Animated.View>
    </View>
  );
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 4,
  },
  headerLine: {
    width: 20,
    height: 2,
    backgroundColor: COLORS.turquoise,
    marginTop: 5,
    borderRadius: 1,
  },
  card: {
    width: width - 60,
    backgroundColor: COLORS.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    overflow: 'hidden',
    elevation: 20,
  },
  neonBar: {
    height: 4,
    backgroundColor: COLORS.turquoise,
  },
  body: {
    padding: 20,
    alignItems: 'center',
  },
  photoContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  glowOuter: {
    padding: 3,
    backgroundColor: COLORS.gold,
    borderRadius: 15,
  },
  photoBorder: {
    padding: 2,
    backgroundColor: COLORS.card,
    borderRadius: 13,
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 10,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: COLORS.gold,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.card,
  },
  badgeStar: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  uniName: {
    color: COLORS.gold,
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#1a1a1a',
    marginVertical: 15,
  },
  infoBox: {
    width: '100%',
  },
  dataGroup: {
    marginBottom: 15,
  },
  label: {
    color: COLORS.turquoise,
    fontSize: 7,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 4,
  },
  nameValue: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  chip: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    borderLeftWidth: 3,
  },
  chipText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  quoteArea: {
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
    paddingVertical: 10,
    borderRadius: 12,
  },
  emojiRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  emojiSemangat: {
    fontSize: 18,
  },
  quoteText: {
    color: "#ccc", 
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 4,
    alignItems: 'center',
  },
  pulse: {
    height: 3,
    borderRadius: 2,
  },
  bottomStatus: {
    marginTop: 20,
    color: "#888", 
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});