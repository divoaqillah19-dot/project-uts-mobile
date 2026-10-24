
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type InfoCardProps = {
  title: string;
  status: string;
  onPress: () => void;
};

export default function InfoCard({
  title,
  status,
  onPress,
}: InfoCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  const selesai = status.toLowerCase() === 'selesai';

  const handlePress = () => {
    setShowDetail((previous) => !previous);
    onPress();
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          selesai ? styles.selesai : styles.proses,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            { color: selesai ? '#15803D' : '#C2410C' },
          ]}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Lihat detail"
      >
        <Text style={styles.buttonText}>
          {showDetail ? 'Tutup Detail' : 'Lihat Detail'}
        </Text>
      </TouchableOpacity>

      {showDetail && (
        <View style={styles.detailBox}>
          <Text style={styles.detailTitle}>Detail Aktivitas</Text>

          <Text style={styles.detailText}>
            Nama kegiatan: {title}
          </Text>

          <Text style={styles.detailText}>
            Status: {status}
          </Text>

          <Text style={styles.detailDescription}>
            {selesai
              ? 'Kegiatan ini telah selesai dilaksanakan.'
              : 'Kegiatan ini masih dalam proses pengerjaan.'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 14,
  },
  selesai: {
    backgroundColor: '#DCFCE7',
  },
  proses: {
    backgroundColor: '#FFEDD5',
  },
  statusText: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  detailBox: {
    marginTop: 14,
    padding: 14,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D4ED8',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 6,
  },
  detailDescription: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
    lineHeight: 21,
  },
});
